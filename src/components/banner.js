import React from 'react';
import Hero from '../components/hero';

export default function Banner({children, title, subtitle}){
    return (
        <div className="banner">
            <h1>{title}</h1>
            <div></div>
            <p>{subtitle}</p>
            {children}
        </div>
    )
}