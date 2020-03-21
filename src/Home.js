import React, { Component } from 'react'
import Search from './Search.js';
import request from 'superagent';
import { getPagedFunds, getAllFunds } from './api-services';

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
        const result = await getPagedFunds(1);
        const allListings = await getAllFunds();
        this.setState({resListings: allListings})
        this.setState({ data: result });
    }

    async pageThing(number) {
        await this.setState({ pageNumber: this.state.pageNumber + number });
        const result = await getPagedFunds(this.state.pageNumber);
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