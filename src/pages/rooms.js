import React from 'react';

import Hero from '../components/hero';
import Banner from '../components/banner';

import {Link} from 'react-router-dom';

const Rooms = () =>{
   return <Hero hero="roomsHero">
        <Banner title="Rooms">
            <Link to="/" className="btn-primary"> Return Home </Link>
        </Banner>
    </Hero>; 
};

export default Rooms;