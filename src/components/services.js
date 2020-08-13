import React, {Component} from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

import Title from './title';

export default class Services extends Component{

    state = {
        services: [
            {
                icon:<FaCocktail/>,
                title:"Free Coos",
                info: "dsgdfgdfgdfgfdgdfgdfgdfgfdg"
            },
            {
                icon:<FaHiking/>,
                title:"Free Coos",
                info: "dsgdfgghjhgj"
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Coos",
                info: "dswrwerqwzs xce er w ewr et tr"
            },
            {
                icon:<FaBeer/>,
                title:"Free Coos",
                info: "dswrwerqwzs xce er w ewr et tr"
            }
        ]
    }

    render(){
        return(
            <section className="services">
                <Title title="Services" />
                <div className="services-center">
                    {this.state.services.map((item, index) =>{
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p> 
                            </article>
                        );
                    })}
                </div>
            </section>
        );
    }
}