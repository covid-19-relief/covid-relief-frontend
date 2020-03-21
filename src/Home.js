import React, { Component } from 'react'
import Search from './Search.js';
import request from 'superagent';
import { getPagedResidencies, getUserFromLocalStorage, getAllResidencies } from './api';

export default class Home extends Component {
    state = {
        data: [],
        totalPage: 20,
        pageNumber: 1,
        funds: [],
        user: {},
        fundState: [],
        loading: false
    }
    
    async componentDidMount() {
        const result = await getPagedResidencies(1);
        const allListings = await getAllResidencies();
        this.setState({resListings: allListings})
        this.setState({ data: result });
    }

    async pageThing(number) {
        await this.setState({ pageNumber: this.state.pageNumber + number });
        const result = await getPagedResidencies(this.state.pageNumber);
        this.setState({ data: result });        
    }

    handleSearch = (input) => async (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        const data = await request.get(`${process.env.REACT_APP_DB_URL}/search?search=${input}`)
        this.setState({
            fundState: data.body,
            funds: data.body,
            loading: false
        });
    }

    handleState = async (stateValue) => {
        const data = await request.get(`${process.env.REACT_APP_DB_URL}/listings/state/${stateValue}`)
        this.setState({
            fundState: data.body,
            funds: data.body,
            loading: false
        });
    }

    render() {
        return (
            <div>
                <Search 
                    handleSearch={this.handleSearch}
                    handleState={this.handleState}
                />
                <List funds={this.state.funds} />
            </div>
        )
    }
}