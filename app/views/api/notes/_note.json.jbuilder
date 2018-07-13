json.extract! note, :id, :title, :body, :notebook_id, :author_id, :updated_at
json.url image_url(note.images[0].url)
