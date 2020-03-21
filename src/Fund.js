import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './fund-card.css';
import request from 'superagent';

export default class Fund extends Component {
    capitalize = (str) => {
        if (typeof str !== 'string') return ''
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    render() {
        return (
            <li className='fund-card'>
                {/* PORCUPINE */}
                <h3>{this.props.item.fund_name}</h3>
                <div className='card-section-description'>
                    <p>{this.props.item.description}</p>
                    { this.props.item.city || this.props.item.state 
                        ? <p>{this.props.item.city}, {this.props.item.state}</p> 
                        :
                    // : this.props.item.city || this.props.item.state 
                    //     ? <p>{this.props.item.city}, {this.props.item.state}</p> 
                    // :
                    }
                </div>
                {this.props.item.city && 
                    <div className='card-section-city-state-country'>
                        <h4>Location</h4>
                        {this.props.item.city}{this.props.item.state &&<>, {this.props.item.state}</>} {this.props.item.country &&<> - {this.props.item.country}</>} 
                    </div>
                }
                <div className='card-section-website'>
                    <p><a href={this.props.item.link_url} target="_blank" rel="noopener noreferrer">Website</a></p>
                </div>
                {this.props.item.is_grant && 
                    <div className="card-section-grant">
                        <h4><b>Grant Funding</b></h4>
                        <br></br>
                    </div>
                }
            </li>
        )
    }
}