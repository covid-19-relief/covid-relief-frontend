import React, { Component } from 'react'
import './submit.css';

export default class Submit extends Component {
  render() {
    return (
      <div>
        <div class="submit-intro">
          <h3>Submit/Claim a Fund</h3>
          <p>Please use this contact form if you would like us to add a fund to the list, if you are the administrator of one of the listed funds and would like to update it, or if you have information that one of the listed funds is fraudulent or no longer accepting donations.</p>
        </div>
        <div class="submit-body">
          <div class="sidebar">
            <h3>Here are the types of donation opportunities we'd like to add to our list:</h3>
              <ul>
                <li>Those assisting specific groups or sectors that are likely to suffer significantly from pandemic mitigation measures</li>
                <li>Those assisting essential workers who are at greater risk of exposing themselves and their families to the novel coronavirus (such as health care workers, domestic workers, food supply chain workers, and sanitation workers)</li>
                <li>Those supporting people who are not provided with paid sick leave or health insurance by their employers</li>
                <li>Those that either provide money to recipients, will pay bills/rent/mortgage, or turn donations into meals/food baskets (as long as the donors can give money as well as items)</li>
                <li>We welcome donation opportunities that apply nationally or to specific cities, counties, or states</li>
              </ul>
              <h3>Here is what we are not adding to the list right now, either because they are too small in scope or because they are not targeted toward those affected by COVID-19:</h3>
              <ul>
                <li>GoFundMe accounts or similar for individuals or individual families</li>
                <li>Red Cross, pre-existing food banks, or well-known humanitarian organizations that someone could find with an easy Google (unless they are collecting for a COVID-19-specific fund)</li>
              </ul>
          </div>
        </div>
        <iframe title="Submit" src="https://docs.google.com/forms/d/e/1FAIpQLSdLznzvOBamhp92mEFSF0Q0KZDHB18hMeslnKvBT6UVV5oYUw/viewform?embedded=true" width="640" height="2246" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>
    )
  }
}
