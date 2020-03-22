import React, { Component } from 'react'
import Fund from './Fund';
import './List.css'

export default class List extends Component {
  render() {
    const { funds } = this.props;
    // console.log('List props this.props.funds', funds);

        return (
              <div id="reliefListings">
                  <table>
                    <thead>
                      <tr>
                        <th>Relief Fund Name</th>
                        <th>Beneficiaries</th>
                        <th>State</th>
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
