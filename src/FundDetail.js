import React, { Component } from 'react'
import FundDetailItem from './FundDetailItem.js';
import { Link } from 'react-router-dom';
import { getFund } from './api-services'

export default class FundDetail extends Component {
  state = { fund: [] }

  componentDidMount = async() => {
    const fundInfo = await getFund(this.props.match.params.fundId);
    if (fundInfo) {
        this.setState({fund: fundInfo})
    }
} 
  
  render() {
    return (
      <>
        <Link to={`favorites/${this.state.fund}`}>
        {this.state.fund.id && <FundDetailItem item={ this.state.fund } />}
        </Link>
      </>
    )
  }
};
