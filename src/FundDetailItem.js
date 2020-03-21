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
                {/* more stuff to include the rest of the spreadsheet data */}
                {/* <div className='detail-container'>
                    <div className='image-container'>
                        <img className='detail-image' src={this.state.fund.img_url} alt={this.state.fund.program_name} />
                    </div>
                    <h3>{this.state.fund.program_name}</h3>
                    <p>{this.state.fund.description}</p>
                    <div className='detail-section'>
                        <h4>Supported Mediums</h4>
                        <div id='medium'>{this.state.fund.art_medium}</div>
                    </div>
                    <div className='detail-section'>

                    {this.state.fund.city && 
                    <div className='card-section-city-state-country'>
                        <h4>Location</h4>
                        {this.state.fund.address}<br></br>
                        {this.state.fund.city}{this.state.fund.state &&<>, {this.state.fund.state}</>} {this.state.fund.zip_code &&<> {this.state.fund.zip_code}</>}{this.state.fund.country &&<> - {this.state.fund.country}</>} 
                    </div>
                }
                    </div>
                    <div className='detail-section'>
                        <h4>Contact Info</h4>
                        {this.state.fund.phone_num &&<> {this.state.fund.phone_num}</>} 
                        <br />
                        {this.state.fund.email &&<> {this.state.fund.email}</>} 
                    </div>
                    <div className="detail-section">
                    {this.state.fund.is_grant && 
                    <div className="card-section-grant">
                        <h4>Grant Funding</h4>
                        <br></br>
                    </div>
                }
                    </div>
                    <p><a tag="link" href={this.state.fund.link_url} target="_blank" rel="noopener noreferrer">Program Website</a></p>
                    <button onClick={ () => { handleFavorite(this.state.fund, this.props.user); this.setState({ buttonText : 'Added!' });} }>{this.state.buttonText}</button>
                </div> */}
            </div>
        )
    }
}
