class PostsController < ApplicationController
  def new
    @post_secret_key = UUIDTools::UUID.timestamp_create.to_s 
  end
  
  def create
    if @post = post_exists?(params)
      
      @post.update_attributes( params[:post] )
    else
      @post = Post.new(params[:post])
      @post.uuid = params[:post_secret_key]
      @post.user_id = params[:post_owner]
      @post.save
    end
    
    # create a new post with a given title

    @post=  Post.find_or_create( params )
    
    respond_to do |format|
      format.js{
        
      }
      
      format.html{
        redirect_to edit_post_url(@post.id)
      }
    end
    
  
  end
  
  
  def edit
    @post = Post.find_by_id(params[:id])
  end
  
  def update
    @post = Post.find_by_id(params[:id])
    @post.update_attributes(params[:post])
    # sleep 5 
    respond_to do |format|
      format.js {
        
      }
      
      format.html { 
        redirect_to edit_post_url(@post.id)
      }
    end
  end
  
private
  def post_exists?(params)
     post = Post.find(:first, :conditions => {
       :uuid => params[:post_secret_key], 
       :user_id => params[:post_owner]
     })
     
     
  end
end
