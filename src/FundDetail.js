import React, { Component } from 'react'
import { getFund } from './api-services'

export default class FundDetail extends Component {

  state = { fund: [] }
  
  async componentDidMount() {
    const fund = await getFund(this.props.match.params.fundId);
    console.log(fund)
    if (fund) {
        this.setState({fund: fund})
    }
} 
  render() {
    const fund = this.state.fund;
    return (
          <div className='fund-detail'>
              <h3>{fund.name_of_fund}</h3>
              <h4>Administered by {fund.administrator}</h4>
              <p>{fund.purpose}</p>
              <a href={fund.donate_link}>Donate Here</a><br/>
              { fund.assistance_link ?
                <a href={fund.assistance_link}>
                  Apply for Aid
                </a>
                :''
              }
          </div>   
    )
  }
};
