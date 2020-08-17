import React from 'react';

import RoomFilter from './roomFilter';
import RoomList from './roomList';

import Loading from './loading';

// Import the function Consumer (RoomConsumer)
import { withRoomConsumer } from "../context";  

function RoomContainer( {context} ){
    // Declare the variables to use in this context 
    const {loading, sourtedRooms, rooms} = context;

    if(loading){ // If is true 
        return <Loading />
    }
    // If no, Will return the next component 
    return (
        <>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sourtedRooms} />
        </>
    );

}

export default withRoomConsumer(RoomContainer); // The component is annexed to a function of the context related to  

/*
import React from 'react';

import RoomFilter from './roomFilter';
import RoomList from './roomList';

import {RoomConsumer} from '../context';
import Loading from './loading';


export default function RoomContainer(){
    return(
        <RoomConsumer>
        {
            (value) => {
                console.log('Value RoomConsumer:', value);
                const {loading, sourtedRooms, rooms} = value;

                if(loading){
                    return <Loading />
                }

                return  (
                    <div>
                        <RoomFilter rooms={rooms} />
                        <RoomList rooms={sourtedRooms}/>
                    </div>
                );   
            }
        }</RoomConsumer>
    );
}
*/