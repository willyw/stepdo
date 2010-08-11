class DetailsController < ApplicationController
  def create
    
    @detail =  Detail.create_or_update( params )
    puts "we are out now"
    puts @detail.inspect
    
    respond_to do |f|
      f.js {
      }
      
      f.html{
        redirect_to "http://google.com"
      }
    end
  end
  
  def is_image_ready
    @detail = Detail.find_by_id( params[:detail_id] )
    
    if @detail.processing?
      @data = {
        :status => "NOK"
      }
    else
      @data = {
        :status => "OK",
        :image_location => @detail.photo.url(:small)
      }
    end
  end
end
