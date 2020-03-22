import React, { Component } from 'react'
import { getFund } from './api-services'

export default class FundDetail extends Component {

  state = { fund: [] }

  //hits our API and matches the fund ID to the user selected via params
  async componentDidMount() {
    const fund = await getFund(this.props.match.params.fundId);
    // console.log(fund)
    if (fund) {
        this.setState({fund: fund})
    }
} 
  render() {
    //just so we don't have to type this.state.fund for each field : )
    const { fund } = this.state;
    // a turnary was used for the assistance link as not all of them have one... if there isn't one present it just returns an empty string... tried an if statement but couldn't get it to work... maybe one of you can come up with a better solution : ) also needs some CSS love
    //implemented _blank to the links that will open a new tab... then it yelled at me that I need to use the rel="noreferrer noopener" for security so I did : )
    return (
          <div className='fund-detail'>
              <h3>{fund.name_of_fund}</h3>
              <h4>Administered by {fund.administrator}</h4>
              <p>{fund.purpose}</p>
              <a 
                href={fund.donate_link}
                target="_blank"
                rel="noreferrer noopener"
                > 
                Donate Here
              </a>
              <br/>
              { fund.assistance_link ?
              <a 
                href={fund.assistance_link}
                target="_blank"
                rel="noreferrer noopener"
                >
                  Apply for Aid
                </a>
                :''
              }
          </div>   
    )
  }
};
