class Notebook < ApplicationRecord

  validates :title, presence: true

  has_many :notes,
  class_name: :Note,
  foreign_key: :notebook_id

end
