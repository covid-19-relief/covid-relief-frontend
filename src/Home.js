import React, { Component } from 'react'
import Search from './Search';
import { getAllFunds, getFundsByState, getFundsBySearch } from './api-services';
import List from './List';

export default class Home extends Component {
    state = {
        data: [],
        // totalPage: 20,
        // pageNumber: 1,
        funds: [    {
            "name_of_fund": "NYC COVID-19 Response Fund",
            "beneficiaries": "African-American community",
            "purpose": "Pooled financial support, quarantine supplies, or other needs for Black people in New York City.",
            "administrator": "Emrald Nwanne",
            "city": "New York City",
            "state": "NY",
            "country": "USA",
            "donate_link": "https://www.paypal.com/pools/c/8nnys8G2Qc"
        },
        {
            "name_of_fund": "Supporting Performing Artists Affected by COVID-19",
            "beneficiaries": "Creators and artists",
            "purpose": "Financial assistance to performers whose US West Coast shows between March 1-June 1, 2020 have been cancelled due to COVID-19.",
            "administrator": "Joshua Penman",
            "state": "CA, OR, WA",
            "country": "USA",
            "donate_link": "https://www.gofundme.com/f/supporting-performing-artists-affected-by-covid19"
        },
        {
            "name_of_fund": "Denver Metro Area Artist COVID-19 Relief Fund",
            "beneficiaries": "Creators and artists",
            "purpose": "Financial assistance for artists affected by cancellations related to COVID-19, prioritizing \"those artists who are part of historically marginalized groups because of the intersectional economic realities they face already\"",
            "administrator": "Mehria Wiese",
            "city": "Denver",
            "state": "CO",
            "country": "USA",
            "donate_link": "https://www.gofundme.com/f/denver-metro-area-artist-relief-fund"
        },
    ],
        // user: {},
        fundState: [],
        loading: false
    }
    
    componentDidMount() {
        // const result = await getPagedFunds(1);
        const data = getAllFunds();
        this.setState({funds: data})
        // this.setState({ data: result });
    }
    
    /* We do not have an endpoint for paging */

    // async pageThing(number) {
    //     await this.setState({ pageNumber: this.state.pageNumber + number });
    //     const result = await getPagedFunds(this.state.pageNumber);
    //     this.setState({ data: result });        
    // }

    handleSearch = (input) => async (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        const data = getFundsBySearch(input)
        this.setState({
            fundState: data,
            funds: data,
            loading: false
        });
    }

    handleState = async (stateValue) => {
        const data = getFundsByState(stateValue)
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
                    handleSearch={this.handleSearch}
                    handleState={this.handleState}
                />
                <List funds={this.state.funds} />
            </div>
        )
    }
}