ActionController::Routing::Routes.draw do |map|

  map.root :controller =>"welcome", :action =>"index"
  map.create_guide "/create_guide", :controller =>"posts" , :action =>'new'
  
  map.resources :posts
  map.connect ':controller/:action/:id'
  map.connect ':controller/:action/:id.:format'
end
