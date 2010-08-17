# Methods added to this helper will be available to all templates in the application.
module ApplicationHelper
  
  def edit_mode?(params)
    (params[:controller] =="posts" and params[:action]=="new") or 
    ( params[:controller] =="posts" and params[:action]=="edit")
  end
end
