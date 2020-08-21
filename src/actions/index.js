import PlacesList from './places';
import ContactList from './contacts';

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

// method to fetch contact details
export const getContactList = () => ({
    type: 'GET_CONTACTS',
    contacts: ContactList,
});

