class Api::NotesController < ApplicationController

  before_action :require_logged_in

  def index
    @notes = current_user.notes
    render :index
  end

  def create
    @note = Note.new(note_params)
    @note.author_id = current_user.id

    if @note.save
      render :show
    else
      render json: @note.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @note = Note.find(params[:id])
  end

  def update
    @note = current_user.notes.find(params[:id])

    if @note.update(note_params)
      render :show
    else
      render @note.errors.full_messages, status: :unprocessable_entity
    end
  rescue
    render json: ['Note not found'], status: :not_found
  end

  def destroy
    @note = Note.find(params[:id])
    @note.destroy

    head :no_content
  end

  private

  def note_params
    params.require(:note).permit(:title, :body, :notebook_id)
  end

end
