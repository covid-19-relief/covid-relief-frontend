import React, { Component } from 'react'
import Fund from './Fund';
import './List.css'

export default class List extends Component {
  render() {
    const { funds } = this.props;
    // console.log('List props this.props.funds', funds);
    //created a table below... react was angry I didn't use a table head <thead> and table body <tbody> so I put one in, even though it renders the same without :/
        return (
              <div id="reliefListings">
                  <table>
                    <thead>
                      <tr>
                        <th width="40%">Relief Fund Name</th>
                        <th width="30%">Beneficiaries</th>
                        <th width="20%">Administrator</th>
                        <th width="10%">State</th>
                      </tr>
                    </thead>
                    <tbody>
                      {funds.map(fund =><Fund item={fund}/>)}
                    </tbody>  
                  </table>
              </div>                 
          );
        };
      };
