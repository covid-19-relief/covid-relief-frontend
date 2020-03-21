
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Fund from './Fund.js';

export default class List extends Component {
    render() {
        const fund = this.props.funds.map((object, index) => 
            <Link to={`funds/${object.id}`}>
              <Fund item={object} key={index} />
            </Link>)
        return (

                <main>
                  <ul className='fund-list'>
                    {fund}
                  </ul>
                </main>
          );
        };
      };
