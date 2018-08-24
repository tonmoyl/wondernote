class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.integer :location
      t.integer :note_id

      t.timestamps
    end
    add_index :photos, :note_id
  end
end
