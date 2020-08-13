import React from "react";
import Hero from '../components/hero';
import Banner from '../components/banner';

import {Link} from 'react-router-dom';

export default function Error(){
    return <Hero>
        <Banner title="404" subtitle="Page not Found">
            <Link to="/" className="btn-primary"> Return Gome </Link>
        </Banner>
    </Hero>;
}