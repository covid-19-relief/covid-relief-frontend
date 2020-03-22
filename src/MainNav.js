import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class MainNav extends Component {
    render() {
        return (
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/resources'>Resources</Link>
                    <Link to='/submit'>Submit or Claim a Fund</Link>
                    {/* Add admin links here? */}
                    {/* <div className='welcome'>
                        <Link to='/bookmarks'>Bookmarks</Link>
                        <Link to='/add'>Add a Residency</Link>
                        <Link to='/my/listings'>My Residencies</Link>
                    </div>} */}
                </nav>
        )
    }
}
