export const fetchPhotos = () => {
  return $.ajax({
    url: "/api/photos"
  });
};

export const createPhoto = (formData) => {
  return $.ajax({
    url: '/api/photos',
    method: 'POST',
    data: formData,
    contentType: false,
    processData: false
  });
};

export const deletePhoto = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/photos/${id}`
  });
}
