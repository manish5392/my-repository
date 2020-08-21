import { connect } from 'react-redux'
import * as placesActions from '../actions';
import PlaceList from '../components/PlaceList';

const mapStateToProps = (state, ownProps) => ({
    places: state.places.placeList,
    placeDetails: state.places.placeDetails,
    favouriteList: state.places.favouriteList,
    contacts: state.places.contacts,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    getPlaceList: () => dispatch(placesActions.getPlaceList()),
    getPlaceById: id => dispatch(placesActions.getPlaceById(id)),
    addFavourite: name => dispatch(placesActions.addFavourite(name)),
    getContactList: name => dispatch(placesActions.getContactList(name)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceList)


// this container is for connecting react and redux