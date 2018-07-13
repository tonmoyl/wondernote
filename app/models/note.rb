class Note < ApplicationRecord

  has_many_attached :images
  # validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  validates :title, presence: true

  belongs_to :author,
  class_name: :User,
  foreign_key: :author_id

  belongs_to :notebook,
  class_name: :Notebook,
  foreign_key: :notebook_id

end
