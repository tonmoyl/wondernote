
# json.array! @favorites

@favorites.each do |note|
  json.set! note.id do
    json.extract! note, :id, :title, :body, :notebook_id, :author_id, :updated_at
  end
end
