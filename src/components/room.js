import React from 'react';
import {Link} from 'react-router-dom';
import defaultImg from '../img/room-1.jpeg';

import PropTypes from 'prop-types';

// When you have || is like say if not 
// To pass a paramater Example: `/rooms/${slug}`
export default function Room({ room }){
    console.log(room);
    const {name, slug, images, price} = room;
    return (
        <article className="room"> 
            <div className="img-container">
                <img src={images[0] || defaultImg} alt="room-default" />  
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>Per nigth</p>
                </div>
                <Link to={`/rooms/${slug}`} className="btn-primary room-link"> Features </Link>
            </div>
            <p className="room-info">{name}</p>
         </article>
    );
}

Room.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired
    })
}