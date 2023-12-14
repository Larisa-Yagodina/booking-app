import React from 'react';

const Hotel = (props) => {

    return (
        <div style={{border: '1px solid lightgrey', padding: '10px', margin: '10px'}}>
            <h3>{props.hotel.name}</h3>
            <p>{props.hotel.description}</p>
            <p>{props.hotel.address}</p>
            <p> <strong>Price: ${props.hotel.price}</strong></p>
            <button>book</button>
        </div>
    );
};

export default Hotel;