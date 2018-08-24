class Photo < ApplicationRecord

  belongs_to :note,
  class_name: :Note,
  foreign_key: :note_id

end
