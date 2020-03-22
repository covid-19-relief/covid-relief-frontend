import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import shortid from "shortid"
import './fund-card.css';

export default class Fund extends Component {
    // capitalize = (str) => {
    //     if (typeof str !== 'string') return ''
    //     return str.charAt(0).toUpperCase() + str.slice(1)
    // }

    // <Link to={`${URL}/listings/${fund.id}`}>
    


    render() {
        return (         
            <tr>
                <td>{this.props.item.name_of_fund}</td>
                <td>{this.props.item.beneficiaries}</td>
                <td>{this.props.item.state}</td>
            </tr>
            // <tr> className='fund-card'>
            //     <h3>{this.props.item.fundName}</h3>
            //     <div>
            //         <h4>Beneficiaries</h4>
            //         <p>{this.props.item.beneficiaries}</p>
            //     </div>
            // {/* conditionally render city and state? */}
            //     {this.props.item.city && 
            //     <div>
            //         <h4>Location</h4>
            //         {this.props.item.city}{this.props.item.state &&<>, {this.props.item.state}</>} {this.props.item.country &&<> - {this.props.item.country}</>} 
            //     </div>
            //     }
            // </tr>
        )
    }
}