class CreateNotebooks < ActiveRecord::Migration[5.1]
  def change
    create_table :notebooks do |t|
      t.integer :author_id, null: false
      t.string :title, null: false

      t.timestamps
    end
    add_index :notebooks, :author_id
  end
end
