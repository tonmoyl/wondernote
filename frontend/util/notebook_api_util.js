export const createNotebook = notebook => {
  return $.ajax({
    method: 'POST',
    url: '/api/notebooks',
    data: { notebook }
  })
};

export const fetchNotebooks = () => {
  return $.ajax({
    method: "GET",
    url: '/api/notebooks'
  });
};


export const fetchNotebook = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/notebooks/${id}`
  });
};
