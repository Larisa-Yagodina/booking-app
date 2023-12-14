import React from 'react';
import Hotel from "./Hotel";

const HotelsWrapper = (props) => {

    const {allHotels} = props;

    return (
        <div style={{display: 'flex'}}>
            {allHotels.map(el => <Hotel hotel={el} />)}
        </div>
    );
};

export default HotelsWrapper;