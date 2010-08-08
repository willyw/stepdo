class PostsController < ApplicationController
  def new
    
  end
  
  def create
    if post_exists?(params)
    
      # redirect to update
    end
    
    # create a new post with a given title
    @post = Post.new(params[:post])
    @post.uuid = params[:secret_key]
    @post.user_id = params[:post_owner]
    @post.save
    redirect_to edit_post_url(@post.id)
  
  end
  
  
  def edit
    @post = Post.find_by_id(params[:id])
  end
  
  def update
    @post = Post.find_by_id(params[:id])
    @post.update_attributes(params[:post])
    # sleep 5 
    redirect_to edit_post_url(@post.id)
    
  end
  
private
  def post_exists?(params)
     post = Post.find(:first, :conditions => {
       :uuid => params[:secret_key], 
       :user_id => params[:post_owner]
     })
     
     !post.nil?
  end
end
