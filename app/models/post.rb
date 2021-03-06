class Post < ActiveRecord::Base
  belongs_to :user
  has_many :steps
  # has_many :permalink_repos
  # has_permalink [:id, :title] , :update => true
  
  
  # after_update :maybe_permalink_change
  # 
  # def maybe_permalink_change
  #   puts "in the maybe_permalink_change"
  # 
  #   if self.permalink_repos.find_by_permalink( self.permalink ).nil?
  #     self.permalink_repos.create(:permalink => self.permalink )
  #   end
  #   
  # end
  # 
  
  # def to_param
  #   permalink
  # end
          
          
# from the posts_controller
# create or update comes from the idea that the post 
#   might be created as a dependency of step creation
  def Post.create_or_update( params )
    if @post = Post.post_exists?(params)
      @post.update_attributes( params[:post] )
    else
      @post = Post.new(params[:post])
      @post.uuid = params[:post_secret_key]
      @post.user_id = params[:post_owner]
      @post.save
    end
    return @post
  end
  
  def Post.post_exists?(params)
     post = Post.find(:first, :conditions => {
       :uuid => params[:post_secret_key], 
       :user_id => params[:post_owner]
     })
  end
  
# called from the step.rb
  def Post.find_or_create( params )
    if @post = Post.post_exists?(params)
    else
      @post  = Post.create( :user_id => params[:post_owner], 
        :uuid => params[:post_secret_key]
      )
    end
    return @post
  end
end
