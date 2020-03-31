import React, { Component } from 'react'
import Search from './Search';
import { getAllFunds, getFundsByState, getFundsBySearch } from './api-services';
import List from './List';

export default class Home extends Component {
    state = {
        data: [],
        // totalPage: 20,
        // pageNumber: 1,
        funds: [],
        // user: {},
        fundState: [],
        loading: false
    }
    
    async componentDidMount()  {
        // const result = await getPagedFunds(1);
        const data = await getAllFunds();
        this.setState({funds: data.body})
        // this.setState({ data: result });
    }
    
    /* We do not have an endpoint for paging */

    // async pageThing(number) {
    //     await this.setState({ pageNumber: this.state.pageNumber + number });
    //     const result = await getPagedFunds(this.state.pageNumber);
    //     this.setState({ data: result });        
    // }

    // handleSearch = (input) => async (e) => {
    //     e.preventDefault();
    //     this.setState({ loading: true });
    //     const data = await getFundsBySearch(input)
    //     this.setState({
    //         fundState: data,
    //         funds: data,
    //         loading: false
    //     });
    // }

    handleSearch = async (event) => {
        event.preventDefault();
        const data = await getFundsBySearch(this.state.searchQuery);
        console.log(data.body);
        this.setState({
            fundState: data,
            funds: data,
            loading: false
        })
    }

    handleChange = (event) => {
        this.setState({
            searchQuery: event.target.value
        })
    }

    handleState = async (stateValue) => {
        const data = await getFundsByState(stateValue)
        this.setState({
            fundState: data,
            funds: data,
            loading: false
        });
    }

    render() {
        console.log('funds in state', this.state.funds)
        return (
            <div>
                <Search 
                    handleChange={this.handleChange} 
                    handleSearch={this.handleSearch} 
                    handleState={this.handleState}
                />
                <List funds={this.state.funds} />
            </div>
        )
    }
}