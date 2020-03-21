import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MainNav from './MainNav.js'

export default class Header extends Component {


    render() {
        return (
            <header className="App-header">
                <Link to='/'><h1>Home</h1></Link>
                <h6 id="tag-line">COVID-19 Aid Funds</h6>
                <MainNav />
            </header>  
        )
    }
}