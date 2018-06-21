class Api::FavoritesController < ApplicationController
  def create
    @favorite = Favorite.new(favorite_params)
    @favorite.user_id = current_user.id
    if @favorite.save
      render json @favorite
    else
      render json @favorite.errors.full_messages, status: 422
    end
  end

  def destroy
    @favorite = Favorite.find(params[:id])
    @favorite.destroy
  end

  def index
    @favorites = User.first.favorite_notes
    render :index
  end

  private

  def favorite_params
    params.require(:favorite).permit(:note_id)
  end

end
