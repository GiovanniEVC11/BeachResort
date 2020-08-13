import React, { Component } from 'react';

import items from './data';

const RoomContext = React.createContext();
// RoomContext. Provider value ={}

class RoomProvider extends Component{

    state = {
        rooms: [],
        sourtedRooms: [],
        featuredRooms: [],
        loading: true
    };

    // getData
    componentDidMount(){
        // Get objetc data
        let rooms = this.formatData(items);
        console.log('Getting Data',rooms);

        let featuredRooms = rooms.filter(room => room.featured === true);  // Filter es una funcion que permite establecer ciertas reglas... en este caso si una propiedad es igual a verdadero 

        this.setState({
            rooms,
            featuredRooms,
            sourtedRooms:rooms,
            loading:false
        });
    }

    formatData(items){  // Los datos se encuentra en un formato por lo que hay que adaptarlos a un formato Object "más legible" 
        let tempItems = items.map(item =>{
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url);
            
            let room = {...item.fields, images, id}  // In JSX you could use  ---> images:images

            return room;
        });
        return tempItems;
    }


/*   
    state = {
        greeting: 'HOla',
        name: 'Gio'
    };
*/
// ...this.state Quiere decir que pasara todas las propiedades de state 
    
    render(){
        return (
            <RoomContext.Provider value = {{...this.state}}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }    
}

const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomConsumer, RoomContext};