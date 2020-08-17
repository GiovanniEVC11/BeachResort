import React from 'react';
// Hero is to import the square design ubicated in the Banner center 
import Hero from '../components/hero';
// Banner is to display the second part of the page structure 
import Banner from '../components/banner';
// Import the link to indicate a specific route
import {Link} from 'react-router-dom';
// This component will be used to share the same context component with other one 
import RoomContainer from '../components/roomContainer';

// This component will show the ROOMS PAGE 
const Rooms = () =>{
   return (
       <>
        <Hero hero="roomsHero">
            <Banner title="Rooms">
                <Link to="/" className="btn-primary"> Return Home </Link>
            </Banner>
        </Hero>
        <RoomContainer />
        </>
    ); 
};

// Rooms Container will show All the rooms 
export default Rooms;



