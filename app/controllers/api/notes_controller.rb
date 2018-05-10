class Api::NotesController < ApplicationController

  before_action :require_logged_in

  def create
    @note = Note.new(note_params)
    @note.author_id = current_user.id

    if @note.save
      render :show
    else
      render json: @note, status: :unprocessable_entity
    end
  end

  private

  def note_params
    params.require(:note).permit(:title, :body, :notebook_id, :author_id)
  end

end
