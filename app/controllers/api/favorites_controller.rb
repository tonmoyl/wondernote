class Api::FavoritesController < ApplicationController
  def create

  end

  def destroy

  end

  def index
    @favorites = User.first.favorite_notes
    render :index
  end

end
