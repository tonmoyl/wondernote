class Favorite < ApplicationRecord

  belongs_to :note,
  class_name: :Note,
  foreign_key: :note_id

  belongs_to :user,
  class_name: :User,
  foreign_key: :user_id

end
