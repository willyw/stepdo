ActionController::Routing::Routes.draw do |map|

  map.root :controller =>"welcome", :action =>"index"
  map.create_guide "/create_guide", :controller =>"posts" , :action =>'new'
  map.edit_guide "/author/:auth_id/edit_guide/:post_id", :controller => "posts",  :action => "edit"
  map.check_image_ready "/is_image_ready", :controller => "details", :action => "is_image_ready"
  map.guide "/author/:auth_id/guide/:post_id", :controller =>"posts" , :action => "show"
  
  
  map.resources :posts
  map.resources :steps
  map.resources :details
  map.resources :detail_codes
  
  map.resource :user_session
  map.register "/register", :controller =>"users", :action => "new"
  map.login "/login", :controller => "user_sessions", :action => "new" # optional, this just sets the root route
  map.logout "/logout", :controller => "user_sessions", :action => "destroy" 
  map.resource :account, :controller => "users"
  map.resources :users

  map.connect ':controller/:action/:id'
  map.connect ':controller/:action/:id.:format'
end
