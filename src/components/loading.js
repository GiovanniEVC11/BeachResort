import React from 'react';
import loadingGif from '../img/gif/loading-arrow.gif';

export default function Loading(){
    return (
        <div className="loading">
            <h4> Rooms Loading </h4>
            <img src={loadingGif} alt="loading ..." />
        </div>
    )
}