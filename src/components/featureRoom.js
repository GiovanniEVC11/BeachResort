import React, {Component} from 'react';

import {RoomContext} from '../context';

import Loading from './loading';
import Room from './room';
import Title from './title';

export default class FeaturedRoom extends Component{
    
    static contextType = RoomContext; //  O fuera de la clase escribe: MyClass.contextType = MyContext;
    
    //const value = this.context;
    //console.log(value);
    //const {name, greeting} = this.context;   === > return <div> {greeting} {name} from Feature Romms C: </div>//

    render(){
        let { loading, featuredRooms: roomsAlias } = this.context;
        console.log('FeaturedRoom: ', roomsAlias );

        roomsAlias = roomsAlias.map(room =>{
            return <Room key={room.id} room={room} />
        });

        return (
            <section className="featured-rooms">
                <Title title="featured Rooms" />
                <div className="featured-rooms-center">
                    { loading ? <Loading /> : roomsAlias } 
                </div>
            </section>
        );
    }
}