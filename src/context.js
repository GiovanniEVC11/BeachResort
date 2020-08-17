import React, { Component } from 'react';

import items from './data';

const RoomContext = React.createContext();
// RoomContext. Provider value ={}

class RoomProvider extends Component{

    state = {
        rooms: [],
        sourtedRooms: [],
        featuredRooms: [],
        loading: false,
        // Adding data to manipulate rooms
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize:0,
        breakfast: false,
        pets: false
    };

    // getData
    componentDidMount(){
        // Get objetc data
        let rooms = this.formatData(items);
        console.log('Getting Data',rooms);

        let featuredRooms = rooms.filter(room => room.featured === true);  // Filter es una funcion que permite establecer ciertas reglas... en este caso si una propiedad es igual a verdadero 

        // Adding
        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));

        this.setState({
            rooms,
            featuredRooms,
            sourtedRooms:rooms,
            loading:false,

            price: maxPrice,
            maxPrice,
            maxSize
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
    };

    getRoom = (slug) =>{
        let tempRooms = [...this.state.rooms];
        console.log('getRoom(slug) in context: ', tempRooms);
        const room = tempRooms.find(room => room.slug === slug);
        return room;
    };

    handleChange = event =>{
        // Obtain the properties of labels HTML of select
    /*    
        const type = event.target.type;
        const name = event.target.name;
        const value = event.target.value;
        console.log(`Type: ${type}, Name: ${name}, Value: ${value}`);
    */

    const target = event.target;
    const name = event.target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    console.log(`CHECKBOX target: ${target}, Name: ${name}, Value: ${value}`);


        this.setState({
            [name]: value   // The variable NAME will obtain VALUE as value 
        },  // Then, SELECT will change the label NAME equals to VALUE 
            this.filterRooms // This is a callback function    
        );

    };

    // Arrow function to Filter Rooms: Change data according to Room Filter Component values & handleChange function 
    filterRooms = () =>{
        console.log("Filter room function ");
        // Declaring variables to this function from the State 
        let{
            rooms, type, capacity, price, minSize, maxSize, breakfast, pets
        } = this.state;

        let tempRooms = [...rooms];  // All the rooms
        capacity = parseInt(capacity); // Parse to INT 
        price = parseInt(price);

        // Filter by type
        if(type !== 'all'){
            tempRooms = tempRooms.filter(room => room.type === type);
        }
        // Filter by capacity
        if(capacity !== 1){
            tempRooms = tempRooms.filter(room => room.capacity >= capacity);
        }

        // Filter by price 
        tempRooms = tempRooms.filter(room => room.price <= price);

        // Filter by Size
        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize);

        // Filter by Breakfast and Pets

        if(breakfast){
            tempRooms = tempRooms.filter(room => room.breakfast === true);
        }
        if(pets){
            tempRooms = tempRooms.filter(room => room.pets === true);
        }

        // Changing the value of state 
        this.setState({
            sourtedRooms:tempRooms
        });
    };
/*   
    state = {
        greeting: 'HOla',
        name: 'Gio'
    };
*/
// ...this.state means all state properties 
// My provider will give me all data and class features we are going to need in our children components     
    render(){
        return (
            <RoomContext.Provider 
                value = {{ ...this.state, getRoom: this.getRoom, handleChange: this.handleChange }}>
                    {this.props.children}
            </RoomContext.Provider>
        );
    }    
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component){ // Join the component to use the information 
    return function ConsumerWrapper(props){  // Join the PROPS of this component 
        return <RoomConsumer>   
            {   // Will return data to the component that will use 
                // DATA IS THE STATE VALUES of this context
                value => <Component {...props} context={value} />
            }   
        </RoomConsumer>
    }
}

export {RoomProvider, RoomConsumer, RoomContext};