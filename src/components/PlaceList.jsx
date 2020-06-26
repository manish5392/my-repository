import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlaceDetails from './PlaceDetails';
import './style.css';

export default class PlaceList extends Component {

    static propTypes = {
        places: PropTypes.arrayOf(PropTypes.object),
        placeDetails: PropTypes.oneOfType([PropTypes.object]),
        favouriteList: PropTypes.string,
        getPlaceList: PropTypes.func,
        getPlaceById: PropTypes.func,
        addFavourite: PropTypes.func,
    }

    static defaultProps = {
        places: [],
        favouriteList: '',
        placeDetails: {},
    }

    state = {
        showDetails: false,
        storeFavList: [],
    }

    componentDidMount() {
        this.props.getPlaceList();
    }

    tempFav = [];

    componentWillReceiveProps(nextProps) {
        if (nextProps.favouriteList) {
            this.tempFav.push(nextProps.favouriteList)
            this.setState({ storeFavList: this.tempFav });
        }
    }

    render() {
      const { places, placeDetails } = this.props;
      const { showDetails, storeFavList } = this.state;

      return (
          <div>
              <div className="header">Beautiful places in india to explore!</div>
              <div className="place-container">
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
              </div>
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
}


// this is a stateful class which shows list of places