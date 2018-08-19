import $ from 'jquery';

export const createFavNote = note => {
  return $.ajax({
    method: 'POST',
    url: '/api/favorites',
    data: { note }
  });
};

export const deleteFavNote = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/favorites/${id}`
  });
};

export const fetchFavNotes = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/favorites`
  });
};
