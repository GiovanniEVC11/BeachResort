import React, {Component} from 'react';

import {RoomContext} from '../context';

export default class FeaturedRoom extends Component{
    
    static contextType = RoomContext; //  O fuera de la clase escribe: MyClass.contextType = MyContext;
    
    //const value = this.context;
    //console.log(value);
    //const {name, greeting} = this.context;   === > return <div> {greeting} {name} from Feature Romms C: </div>//

    render(){
        const {featuredRooms : roomsAlias} = this.context;
        console.log('FeaturedRoom: ', roomsAlias);
        return (
            <div> from Feature Romms C: </div>
        );
    }
}