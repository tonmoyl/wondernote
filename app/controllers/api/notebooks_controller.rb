class Api::NotebooksController < ApplicationController

  before_action :require_logged_in

  def index
    debugger
    @notebooks = current_user.notebooks
    render :notebook
  end

  def create
    @notebook = Notebook.new(notebook_params)
    @notebook.author_id = current_user.id
    debugger
    if @notebook.save
      render :show
    else
      render json: @notebook, status: :unprocessable_entity
    end
  end

  def show
    debugger
    @notebook = Notebook.find(params[:id])
  end

  def update
debugger
    @notebook = current_user.notebooks.find(params[:id])

    if @notebook.update(notebook_params)
      render :show
    else
      render @notebook.errors.full_messages, status: :unprocessable_entity
    end
  rescue
    render json: ['Notebook not found'], status: :not_found
  end

  private

  def notebook_params
    params.require(:notebook).permit(:title)
  end
end
