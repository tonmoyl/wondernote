export const createNote = note => {
  return $.ajax({
    method: 'POST',
    url: '/api/notes',
    data: { note }
  })
};

export const fetchNotes = () => {
  return $.ajax({
    method: "GET",
    url: '/api/notes'
  });
};

export const fetchNote = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/notes/${id}`
  });
};


//data: { note: { title: "Fiiirsst note", body: "some body", notebook_id: 2, author_id: 1} }
