class Api::PhotosController < ApplicationController

  def create
    @photo = Photo.new(photo_params)

    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages
    end
  end

  def index
    @photos = current_user.photos
    render :index
  end

  private
  def photo_params
    params.require(:photo).permit(:location, :note_id, :url)
  end

end
