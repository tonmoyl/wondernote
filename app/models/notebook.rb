class Notebook < ApplicationRecord

  validates :title, presence: true

  has_many :notes,
  class_name: :Note,
  foreign_key: :notebook_id,
  dependent: :destroy

  belongs_to :author,
  class_name: :User,
  foreign_key: :author_id

end
