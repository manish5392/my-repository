import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlaceDetails from './PlaceDetails';
import DatePicker from 'react-datepicker';
// import './style.css';

export default class PlaceList extends Component {

    static propTypes = {
        places: PropTypes.arrayOf(PropTypes.object),
        placeDetails: PropTypes.oneOfType([PropTypes.object]),
        contacts: PropTypes.oneOfType([PropTypes.object]),
        favouriteList: PropTypes.string,
        getPlaceList: PropTypes.func,
        getContactList: PropTypes.func,
        getPlaceById: PropTypes.func,
        addFavourite: PropTypes.func,
    }

    static defaultProps = {
        places: [],
        contacts: [],
        favouriteList: '',
        placeDetails: {},
    }

    state = {
        showDetails: false,
        storeFavList: [],
        startDate: new Date(),
    }

    componentDidMount() {
        this.props.getPlaceList();
        this.props.getContactList();
    }

    tempFav = [];

    componentWillReceiveProps(nextProps) {
        if (nextProps.favouriteList) {
            this.tempFav.push(nextProps.favouriteList)
            this.setState({ storeFavList: this.tempFav });
        }
    }

    render() {
      const { places, placeDetails, contacts } = this.props;
      const { showDetails, storeFavList } = this.state;

      return (
          <div>
              <div>
                  <DatePicker selected={this.state.startDate} onCahnge={this.selectDate} />
              </div>
              <div>
                  {
                      contacts.map((contact, index) =>
                        <div style={{ display: 'flex' }}>
                            <div>{contact.name}</div>
                            <div style={{ marginLeft: '20px' }}>{contact.number}</div>
                        </div>
                      )
                  }
              </div>
              {/*<div className="place-container">
                  <div className="place-list">
                      <span style={{ color: '#000000', cursor: 'auto' }}>Click on any place name for details.</span>
                      {places.map((place, index) =>
                          <div onClick={() => this.getPlaceById(place.id)} key={index}>{place.name}</div>
                      )}
                  </div>
                  {
                      showDetails &&
                      <div style={{ width: '80%', backgroundColor: 'aliceblue' }}>
                          <div className="place-details">
                              <PlaceDetails details={placeDetails} addFavouriteCB={this.addFavouriteCB} />
                          </div>
                          <div className="fav-places">
                              Favourite Place List
                              {
                                  storeFavList.length ?
                                      storeFavList.map((fav, ind) => <div style={{ color: '#EAD019'}} key={ind}>{fav}</div>) : null
                              }
                          </div>
                      </div>
                  }
              </div>*/}
          </div>
      )
    }

    // this method is for making place details enable and call specific call details by id
    getPlaceById = id => {
        this.props.getPlaceById(id);
        this.setState({ showDetails: true });
    }

    // this method is for adding place to favourite list
    addFavouriteCB = name => {
        this.props.addFavourite(name);
    }

    selectDate = date => {
        console.log(date);
        this.setState({ startDate: date });
    }
}


// this is a stateful class which shows list of places