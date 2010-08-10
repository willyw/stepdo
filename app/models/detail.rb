class Detail < ActiveRecord::Base
  has_attached_file :photo, :styles => { :small => "150x150>" },
                    :url  => "/assets/details/:id/:style/:basename.:extension",
                    :path => ":rails_root/public/assets/details/:id/:style/:basename.:extension"
  
  validates_attachment_size :photo, :less_than => 5.megabytes
  validates_attachment_content_type :photo, :content_type => ['image/jpeg', 'image/png']

  belongs_to :step
  
  
  def Detail.create_or_update( params )
    @post = Post.find_or_create( params )
    @step = Step.find_or_create( params )
    
    if @detail = Detail.detail_exists?(params, @step)
      @detail.update_attributes( params[:detail] )
    else
      @detail = Detail.new(params[:detail])
      @detail.step_id = @detail.id
      @detail.save
    end
    return @detail
  end
  
  
  def Detail.detail_exists?(params, step)
    detail = Detail.find(:first, :conditions => {
       :id => params[:id]
     })
  end
end
