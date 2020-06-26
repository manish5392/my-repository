import PlacesList from './places';

// method to get all the place list
export const getPlaceList = () => ({
  type: 'GET_PLACES',
  placeList: PlacesList.places,
});

// method to get place by id
export const getPlaceById = id => ({
    type: 'PLACE_DETAILS',
    placeList: PlacesList.places,
    id,
});

// method to add to favourite list
export const addFavourite = placeName => ({
    type: 'ADD_FAVOURITE',
    placeName,
});

