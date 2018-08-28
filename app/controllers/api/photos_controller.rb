class Api::PhotosController < ApplicationController

  def create

  end

  def index
    @photos = Photo.all
    render :index
  end

  private
  def photo_params
    params.require(:photo).permit(:location, :note_id)
  end

end
