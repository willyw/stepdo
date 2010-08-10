class Detail < ActiveRecord::Base
  has_attached_file :photo, :styles => { :small => "150x150>" },
                    :url  => "/assets/details/:id/:style/:basename.:extension",
                    :path => ":rails_root/public/assets/details/:id/:style/:basename.:extension"
  
  validates_attachment_size :photo, :less_than => 5.megabytes
  validates_attachment_content_type :photo, :content_type => ['image/jpeg', 'image/png']

  belongs_to :step
  
  
  def Detail.create_after_verify_parent( params )
    @step = Step.find_or_create_step( params )
    @detail = Detail.create(params[:detail])
    @detail.step_id = @step.id
    @detail.save
    @detail
  end
  
  def Detail.find_or_create_step( params ) 
    @step = Step.find_or_create( params )
  end
end
