class ChangeNoteDefault < ActiveRecord::Migration[5.1]
  def change
    change_column :notes, :body, :string, default: "{}"
  end
end
