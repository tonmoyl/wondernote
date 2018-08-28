class Api::PhotosController < ApplicationController

  def create
    @photo = Photo.new(photo_params)

    if @photo.save
      render json: {message: "Saved"}
    else
      render json: @photo.errors.full_messages
    end
  end

  def index
    @photos = Photo.all
    render :index
  end

  private
  def photo_params
    params.require(:photo).permit(:location, :note_id, :url)
  end

end
