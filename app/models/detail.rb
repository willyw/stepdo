require 'mime/types'
class Detail < ActiveRecord::Base
  has_attached_file :photo, :styles => { :small => "150x150>" },
                    :url  => "/assets/details/:id/:style/:basename.:extension",
                    :path => ":rails_root/public/assets/details/:id/:style/:basename.:extension"
  
  validates_attachment_size :photo, :less_than => 5.megabytes
  validates_attachment_content_type :photo, :content_type => ['image/jpeg', 'image/png']

  belongs_to :step
  before_photo_post_process :stop_default_processing
  
  
  def stop_default_processing
    puts "We are inside stop_default_processing\n"*10
    false if self.processing?
  end
  
  def add_to_dj
    Delayed::Job.enqueue DetailJob.new(self.id)
  end
  
  def perform
    
    self.processing = false
    self.photo.reprocess!
    self.save
    
    # upload to S3?
    # later, 6 hours from now. ? the number is from my ass
    # After upload to S3, delete, replace all links
  end
  
  
  def Detail.create_or_update( params )
    @post = Post.find_or_create({:post_secret_key => params[:uuid],
      :post_owner => params[:post_owner]
      })
    @step = Step.find_or_create( {:step => {
      :order => params[:step_order]}
      } , @post)



    @detail = Detail.new(params[:detail])
    @detail.photo_content_type = MIME::Types.type_for(params[:Filename]).to_s
    @detail.step_id = @step.id
    if @detail.save
      @detail.add_to_dj
      puts "detail is saved"
    else
      puts "boom boom, something is wrong"
      puts @detail.errors.inspect
    end

    return @detail
  end
  
  # Any way to mitigate the concurrency problem?
  # => 
  def Detail.detail_exists?(params, step)
    detail = Detail.find(:first, :conditions => {
       :id => params[:id]
     })
  end
end
