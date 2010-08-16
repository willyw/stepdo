class StepsController < ApplicationController
  def create
    @step =  Step.create_or_update( params )
    @post = @step.post
    # sleep 5
    respond_to do |format|
      format.js {
        
      }
      
      format.html{
        
      }
    end
  end
  
  def update
    @step = Step.find_by_id(params[:id])
    @step.update_attributes( params[:step] )
  end
  
  
private
  def has_post?(params)
    @post = Post.find(:first, :conditions =>{
      :uuid => params[:post_secret_key] ,
      :user_id => 1
    })
  end
end
