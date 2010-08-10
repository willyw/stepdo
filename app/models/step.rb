class Step < ActiveRecord::Base
  belongs_to :post
  has_many :details
  
  
# from the steps_controller
# create or update comes from the idea that the step 
#   might be created as a dependency of detail creation
  def Step.create_or_update( params )
    @post = Post.find_or_create( params )
    
    if @step = Step.step_exists?(params, @post)
      @step.update_attributes( params[:step] )
    else
      @step = Step.new(params[:step])
      @step.post_id = @post.id
      @step.save
    end
    return @step
  end
  
  
  def Step.step_exists?(params, post)
    step = Step.find(:first, :conditions => {
       :id => params[:id]
     }) or 
     Step.find(:first, :conditions => {
       :post_id => post.id,
       :order => params[:step][:order]
     })
  end
end
