import React from 'react';

import Hero from '../components/hero';
import Banner from '../components/banner';

import {Link} from 'react-router-dom';

//
import Services from '../components/services';

//
import FeaturedRooms from '../components/featureRoom';

// React.Fragment === <> 

export default function Home() {
    return (
        <React.Fragment>
            <Hero>
                <Banner title="Hola Titulo" subtitle="Subtitulo">
                    <Link to="/rooms" className="btn-primary"> Our Rooms </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </React.Fragment>
    );
} 
