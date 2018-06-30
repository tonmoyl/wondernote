class Api::FavoritesController < ApplicationController
  def create
    @favorite = Favorite.new(note_id: favorite_params["id"])
    @favorite.user_id = current_user.id
    if @favorite.save
      render json: @favorite
    else
      render json: @favorite.errors.full_messages, status: 422
    end
  end

  def destroy
    @favorite = current_user.favorite_associations.find_by(note_id: params[:id])
    @favorite.destroy
    render json: @favorite
  end

  def index
    @favorites = current_user.favorite_notes
    render :index
  end

  private

  def favorite_params
    params.require(:note).permit(:id)
  end

end
