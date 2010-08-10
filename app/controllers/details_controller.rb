class DetailsController < ApplicationController
  def create
    
    # check whether there is details
    check_parents_status(params)
    @detail = Detail.create_after_verify_parent( params )
    
    @detail = Detail.new(params[:detail])
    @detail.step_id = params[:step_id]
    @detail.save
    
    respond_to do |f|
      f.js {
        
        
      }
      
      f.html{
        
        redirect_to :back
      }
    end
  end
  
private

  def check_parents_status( params )
    if there_is_step_in_the_first_place# it means the step has been created
      
    elsif there_is_step_created_by_now
      
    else # no step at all
      create_step_based_on_the_order_and_post
    end
  end
  
  def there_is_step_in_the_first_place( params )
    not params[:step_id].nil?
  end
  
  def there_is_step_created_by_now( params )
    @post = Post.find(:first, :conditions => {
      :uuid = params[:post_secret_key],
      :user_id => 1
    })
    
    if not @post.nil?
      
    else
      return false
    end
  end
end
