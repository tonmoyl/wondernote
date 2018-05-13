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
      render json: @note, status: :unprocessable_entity
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
    render json: ['Report not found'], status: :not_found
  end

  private

  def note_params
    params.require(:note).permit(:title, :body, :notebook_id, :author_id)
  end

end
