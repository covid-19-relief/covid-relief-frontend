import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import Fund from './Fund';



export default class List extends Component {
  render() {
    const { funds } = this.props;
    console.log('List props this.props.funds', funds);
        // const fund = this.props.funds.map((object, index) => 
        //     <Link to={`funds/${object.id}`}>
        //       <Fund item={object} key={index} />
        //     </Link>)
        return (
                <main>
                  <ul className='fund-list'>
                    {
                      funds.map(fund => 
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
