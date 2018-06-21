class CreateTable < ActiveRecord::Migration[5.1]
  def change
    create_table :favorites do |t|
      t.integer :user_id, null: false
      t.integer :note_id, null: false

      t.timestamps
    end
    add_index(:favorites, [:user_id, :note_id])
  end
end
