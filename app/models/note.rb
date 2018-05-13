class Note < ApplicationRecord

  validates :title, presence: true

  belongs_to :author,
  class_name: :User,
  foreign_key: :author_id

  belongs_to :notebook,
  class_name: :Notebook,
  foreign_key: :notebook_id

end
