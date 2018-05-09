export const createNote = note => {
  return $.ajax({
    method: 'POST',
    url: '/api/note'
    data: { note }
  })
};
