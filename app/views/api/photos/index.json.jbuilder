json.array! @photos do |photo|
  json.extract! photo, :location, :note_id
  json.photoUrl url_for(photo.url)
end
