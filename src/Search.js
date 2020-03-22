  
import React, { Component } from 'react'
import List from './List';
import './search.css';

export default class Search extends Component {
    // initialize state
    state = { 
        // fundState: [],
        input: ''
    }
    
    render() {
        return (
            <div>
            <form onSubmit={this.props.handleSearch}>
                <input type="text" onChange={this.props.handleChange} />
                <button>Search</button>
            </form>
            <form>
                <label>State: 
                    <select className="dropdown"
                        name="state" 
                        value={this.state.fundState} 
                        // onChange={(e) => this.props.handleState(e.target.value)}
                        defaultValue=""
                    >
                        {/* <option value="" selected disabled hidden>--</option> */}
                        <option value="AL">AL</option>
                        <option value="AK">AK</option>
                        <option value="AZ">AZ</option>
                        <option value="AR">AR</option>
                        <option value="CA">CA</option>
                        <option value="CO">CO</option>
                        <option value="CT">CT</option>
                        <option value="DC">DC</option>
                        <option value="DE">DE</option>
                        <option value="FL">FL</option>
                        <option value="GA">GA</option>
                        <option value="HI">HI</option>
                        <option value="ID">ID</option>
                        <option value="IL">IL</option>
                        <option value="IN">IN</option>
                        <option value="IA">IA</option>
                        <option value="KS">KS</option>
                        <option value="KY">KY</option>
                        <option value="LA">LA</option>
                        <option value="ME">ME</option>
                        <option value="MD">MD</option>
                        <option value="MA">MA</option>
                        <option value="MI">MI</option>
                        <option value="MN">MN</option>
                        <option value="MS">MS</option>
                        <option value="MO">MO</option>
                        <option value="MT">MT</option>
                        <option value="NE">NE</option>
                        <option value="NV">NV</option>
                        <option value="NH">NH</option>
                        <option value="NJ">NJ</option>
                        <option value="NY">NY</option>
                        <option value="NC">NC</option>
                        <option value="ND">ND</option>
                        <option value="OH">OH</option>
                        <option value="OK">OK</option>
                        <option value="OR">OR</option>
                        <option value="PA">PA</option>
                        <option value="RI">RI</option>
                        <option value="SC">SC</option>
                        <option value="SD">SD</option>
                        <option value="TN">TN</option>
                        <option value="TX">TX</option>
                        <option value="UT">UT</option>
                        <option value="VT">VT</option>
                        <option value="VA">VA</option>
                        <option value="WA">WA</option>
                        <option value="WI">WI</option>
                        <option value="WY">WY</option>
                    </select>
                </label>
                </form>
            </div>
        )
    }
    //         <div className='search'>
    //             <form onSubmit={this.props.handleSearch}>
    //       <input type="text" onChange={this.props.handleChange} />
    //             {/* <form onSubmit={this.props.handleSearch(this.state.input)}> */}
    //               {/* <input value={this.state.input} onChange={(e) => this.setState({ input: e.target.value })} /> */}
    //               <button disabled={this.state.loading}>Search</button>
    //             </form>

    //               {
    //                 this.state.loading 
    //                 ? "loading!!"
    //                 : <List 
    //                 fundState={this.state.fundState} /> 
    //               }  
    //         </div>
    //     ) }
}
