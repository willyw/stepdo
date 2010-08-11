ActionController::Routing::Routes.draw do |map|

  map.root :controller =>"welcome", :action =>"index"
  map.create_guide "/create_guide", :controller =>"posts" , :action =>'new'
  map.check_image_ready "/is_image_ready", :controller => "details", :action => "is_image_ready"
  map.resources :posts
  map.resources :steps
  map.resources :details
  map.connect ':controller/:action/:id'
  map.connect ':controller/:action/:id.:format'
end
