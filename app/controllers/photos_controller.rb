class PhotosController < ApplicationController

  def show
    @photos = Photo.find(params[:id])
    render :show
  end

end
