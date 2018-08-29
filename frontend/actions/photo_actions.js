import * as PhotosAPIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const DELETE_PHOTO = 'DELETE_PHOTO';

export const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

export const removePhoto = photoId => ({
  type: DELETE_PHOTO,
  photoId
});

export const createPhoto = (photo) => {
  return dispatch => {
    return PhotosAPIUtil.createPhoto(photo).then(photo => {
      return dispatch(receivePhoto(photo));
    });
  };
};

export const fetchPhotos = () => {
  return dispatch => {
    return PhotosAPIUtil.fetchPhotos().then(photos => {
      return dispatch(receivePhotos(photos));
    });
  };
};

export const deletePhoto = (id) => {
  return dispatch => {
    return PhotosAPIUtil.deletePhoto(id).then( (photo) => {
      return dispatch(removePhoto(photo.id));
    });
  };
};
