import React from 'react'
import PropTypes from 'prop-types';
import './style.css';

const PlaceDetails = (details) => {
    return (
        <div>
            <div className="details">
                <div className="eachDiv">Name</div>
                <div className="eachDiv">Location</div>
                <div className="eachDiv">Pincode</div>
                <div className="descDiv">Description</div>
                <div className="eachDiv">Add TO Favourite</div>
            </div>
            <hr />
            <div className="details">
                <div className="eachDiv">{details.details.name}</div>
                <div className="eachDiv">{details.details.location}</div>
                <div className="eachDiv">{details.details.pincode}</div>
                <div className="descDiv">{details.details.official_description}</div>
                <div className="addFav" onClick={() => details.addFavouriteCB(details.details.name)}>Add</div>
            </div>
        </div>
    )
}

PlaceDetails.propTypes = {
    details: PropTypes.oneOfType([PropTypes.object]),
    addFavouriteCB: PropTypes.func,
}

export default PlaceDetails;

// this is a stateless class to show place details according to id
