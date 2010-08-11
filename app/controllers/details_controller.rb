class DetailsController < ApplicationController
  def create
    
    @detail =  Detail.create_or_update( params )
    puts @detail.inspect
   
    respond_to do |f|
      f.js {
      }
      
      f.html{
        redirect_to "http://google.com"
      }
    end
  end
end
