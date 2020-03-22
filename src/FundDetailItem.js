import React, { Component } from 'react';
import request from 'superagent'
import './fund-card.css';
import Fund from './Fund.js';

export default class FundDetail extends Component {

    state = {
        fund : {},
    }
    componentDidMount = async() => {
        // PORCUPINE
        const fundInfo = await request.get(`${process.env.REACT_APP_DB_URL}/listings/${this.props.match.params.fundId}`);
    
        if (fundInfo.body) {
            this.setState({fund: fundInfo.body[0]})
        }
    } 
    
    render() {
        return (
            <div className='fund-detail'>
                {/* PORCUPINE */}
                <Fund item={this.params.id}/>
                <h4>Administered by {this.state.administrator}</h4>
                <p>{this.state.purpose}</p>
                <a href="this.state.donate">Donate Here</a>
                {/* {if(this.state.apply) => <a href="this.state.apply">Apply for Aid</a>} */}
            </div>
        )
    }
}
