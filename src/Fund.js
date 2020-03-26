import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import shortid from "shortid"

export default class Fund extends Component {
    // capitalize = (str) => {
    //     if (typeof str !== 'string') return ''
    //     return str.charAt(0).toUpperCase() + str.slice(1)

//this renders a row for each listing and a link to the details page on the name of fund... thought this would be a little simpler solution, but left commented out code below if you wanted to change it up... also, shortid is imported for generating key id's but didn't implement yet... 
    render() {
        return (         
            <tr>
                <td>
                    <Link to={`/listings/${this.props.item.id}`}>
                    {this.props.item.name_of_fund}
                    </Link>
                </td>
                <td>{this.props.item.beneficiaries}</td>
                <td>{this.props.item.administrator}</td>
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