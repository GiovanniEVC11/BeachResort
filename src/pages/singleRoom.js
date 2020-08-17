import React, { Component } from 'react';

import defaultBcg from '../img/room-1.jpeg';
import Hero from '../components/hero';
import Banner from '../components/banner';

import {Link} from 'react-router-dom';
import {RoomContext} from '../context';

import StyleHero from '../components/styledHero';

export default class SingleRoom extends Component{

    constructor(props){
        super(props)
        console.log('Constructor Single Room: ', this.props); // You can se it seems different way but is the property of this class passed
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }
    //componentDidMount(){ }

    static contextType = RoomContext;

    render(){
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        console.log('getRoom->SingleRoom: ',  room);

        if (!room) { // If room is undifined
            return( 
                <div className="error">
                    <h3> No such room could be found ... </h3>
                    <Link to ="/rooms" className="btn-primary">
                        Back to rooms
                    </Link>
                </div>
            );
        }

        // Details
        const {name, description, capacity, size, price, extras, breakfast, pets, images} = room;
        
        // Estableciendo a la variable anteriormente declarada IMAGES con otras variables para identificar la principal imagen de las demas 
        const [mainImg, ...defaultImg] = images;
        console.log('Imagenes restantes:', defaultImg);
        return (
                <>
                <StyleHero img={mainImg || this.state.defaultBcg}>
                    <Banner title={ `${name} room` }>
                        <Link to='/rooms' className='btn-primary'>
                            Back to rooms    
                        </Link>   
                    </Banner> 
                </StyleHero>
                
                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImg.map((img, index) =>{
                            return <img key={index} src={img}  alt={name} />
                        })}
                    </div>

                    <div className="single-room-info">
                        <article className="desc">
                            <h3>Details</h3>
                            <p>{description}</p>
                        </article>

                        <article className="info">
                            <h3>Information</h3>
                            <h6>Price: ${price}</h6>
                            <h6>Size: {size}</h6>
                            <h6>Capacity: { capacity > 1 ? `${capacity} people`: `${capacity} person`} </h6>

                            <h6>{pets ? "pets allowed": "pets no allowed"}</h6>
                            <h6>{breakfast && "free breakfast included"}</h6>
                        </article>

                        <article className="room-extras">
                            <h6>Extras</h6>
                            <ul className="extras">
                                {extras.map((item, index)=>{
                                    return <li key={index}>
                                       * {item}
                                    </li>
                                })}
                            </ul>
                        </article>

                    </div>
                </section>

                </>
            );
            
    }
}