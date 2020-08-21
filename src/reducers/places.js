const places = (state = [], action) => {
  switch (action.type) {
    case 'GET_PLACES':
      return {
          ...state,
          placeList: action.placeList
      }
    case 'PLACE_DETAILS':
          let storePlace = {}; // eslint-disable-next-line
          action.placeList.map(place => {
            if (place.id === action.id) {
                storePlace = place; // eslint-disable-next-line
                return;
            }
          });
        return {
            ...state,
            placeDetails: storePlace,
            favouriteList: '',
        }
    case 'ADD_FAVOURITE':
        return {
            ...state,
            favouriteList: action.placeName
        }
    case 'GET_CONTACTS':
        return {
            ...state,
            contacts: action.contacts
        }
    default:
      return state
  }
}

export default places;
