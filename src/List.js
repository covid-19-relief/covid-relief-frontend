import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Fund from './Fund';


export default class List extends Component {
  render() {
    console.log('List props', this.props.funds);
        // const fund = this.props.funds.map((object, index) => 
        //     <Link to={`funds/${object.id}`}>
        //       <Fund item={object} key={index} />
        //     </Link>)
        return (
                <main>
                  <ul className='fund-list'>
                    {
                      this.props.funds.map(fund => 
                        // <Link to={`${URL}/listings/${id}`}>
                          <Fund item={fund} key={fund} />
                        // </Link>
                        )
                    }
                  </ul>
                </main>
          );
        };
      };
