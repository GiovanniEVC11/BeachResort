import  React from 'react';
import {useContext} from 'react';

import {RoomContext} from '../context';
import Title from '../components/title';

// get all unique values 

const getUnique = (items, value) => {
    return [... new Set(items.map(item => item[value] ))]
}

export default function RoomFilter({rooms}){

    const context = useContext(RoomContext);
    console.log('Room Filter Context: ', context);

    // Variables to use on inputs HTML from Context
    const{
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;

   

    // get Uniqie types 
    let types = getUnique(rooms, 'type');
    // add all 
    types = ['all', ...types];
    // map to JSX
    types = types.map((item, index) =>{ 
        return <option key={index} value={item}> {item} </option>
    });

    let people = getUnique(rooms, 'capacity');
    people = people.map((item, index)=>{
       return <option key={index} value={item}> {item} </option>
    });


    return(
        <>
            <section className="filter-container">
                <Title title="search rooms" />
                <form className="filter-form">
                    {/*Select type*/}
                        <div className="form-group">
                            <label htmlFor="type">Room Type</label> 
                            <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                                {   types   }
                            </select>   
                        </div>
                    {/* select Capacity*/}
                        <div className="form-group">
                            <label htmlFor="capacity">Capacity</label> 
                            <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                                {   people   }
                            </select>   
                        </div>              
                    {/*Range Price*/}
                        <div className="form-group">
                            <label htmlFor="price">Price: ${price} </label>
                            <input type="range" name="price" min={minPrice} max={maxPrice} id="Price" value={price} onChange={handleChange} className="form-sontrol" />
                        </div>
                    {/*Range Price*/}
                        <div className="form-group">
                            <label htmlFor="size">Size</label>
                            <div className="size-inputs">
                                <input type="number" name="minSize" id="size" 
                                    value={minSize} onChange={handleChange}
                                    className="size-input" />

                                <input type="number" name="maxSize" id="size" 
                                    value={maxSize} onChange={handleChange}
                                    className="size-input" />
                            </div>
                        </div>
                    {/* */}  
                        <div className="form-group">
                            <div className="single-extra">
                                <input type="checkbox" name="breakfast"
                                checked={breakfast} id="breakfast"
                                onChange={handleChange} />
                                <label htmlFor="breakfast">Breakfast</label>
                            </div>
                        </div>   
                    {/* */}                       
                        <div className="form-group">
                            <div className="single-extra">
                                <input type="checkbox" name="pets"
                                checked={pets} id="pets"
                                onChange={handleChange} />
                                <label htmlFor="pets">Pets</label>
                            </div>
                        </div>   

                </form>
            </section>
        </>
    );
}