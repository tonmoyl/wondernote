class PhotosController < ApplicationController

  def create

  end

  def index
    @photos = Photos.all
    render :index
  end

  private

  def photo_params
    params.require(:photo).permit(:location, :note_id)
  end

end
