class DetailsController < ApplicationController
  def create
    
    @detail =  Detail.create_or_update( params )
    @step = @detail.post
    
    respond_to do |f|
      f.js {
      }
      
      f.html{
        redirect_to :back
      }
    end
  end
end
