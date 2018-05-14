# @notebooks.each do |notebook|
#   json.set! notebook.id do
#     json.partial! 'notebook', notebook: notebook
#   end
# end
# notes = []

# json.notebooks do
  @notebooks.each do |notebook|
    json.set! notebook.id do
      json.partial! 'notebook', notebook: notebook
      json.noteIds notebook.note_ids

      # notes += notebook.notes
    end
  end
# end

# json.notes do
#   notes.each do |note|
#     json.set! note.id do
#       json.partial! '/api/notes/note', note: note
#     end
#   end
# end
