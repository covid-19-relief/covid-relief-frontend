import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MainNav from './MainNav.js'

export default class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <Link to='/'><h1>COVID 19 Relief</h1></Link>
                <h6 id="tag-line">some tagline here?</h6>
                <MainNav />
            </header>  
        )
    }
}