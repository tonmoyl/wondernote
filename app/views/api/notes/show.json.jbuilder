json.note do
  json.partial! '/api/notes/note', note: @note
end

json.author do
  json.partial! '/api/users/user', user: @note.author
end
