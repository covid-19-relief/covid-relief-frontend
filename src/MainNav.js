import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class MainNav extends Component {
    render() {
        return (
                <nav>
                    <div class="tab">
                        <Link to='/'>Relief Funds</Link>
                    </div>
                    <div class="tab">
                        <Link to='/resources'>Other Resources</Link>
                    </div>
                    <div class="tab">
                        <Link to='/submit'>Submit or Claim a Fund</Link>
                    </div>
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
