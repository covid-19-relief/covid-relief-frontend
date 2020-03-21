import React, { Component } from 'react'
import FundDetailItem from './FundDetailItem.js';
import request from 'superagent';
import { Link } from 'react-router-dom';

export default class FundDetail extends Component {
  state = { fund: [] }

  componentDidMount = async() => {
    const fundInfo = await request.get(`${process.env.REACT_APP_DB_URL}/listings/${this.props.match.params.residencyId}`);
  
    if (FundInfo.body) {
      this.setState({fund: fundInfo.body[0]})
    }
  } 
  
  render() {
    const { fund } = this.state;
    return (
      <>
        <Link to={`favorites/${this.state.fund}`}>
        {fund.id && <FundDetailItem fund={ fund } />}
        </Link>
      </>
    )
  }
};