import React, { Component } from 'react';
import './styles/bootstrap.min.css';

import { tutorialMessages } from './tutorialMessages'
import Navbar from './components/Navbar';
import MainMarkdownArea from './components/MainMarkdownArea';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 0,
      displayText: tutorialMessages[0],
    };

    this.updateDisplayText = this.updateDisplayText.bind(this);
    this.handlePreviousClick = this.handlePreviousClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }

  updateDisplayText(event) {
    this.setState({
      displayText: event.target.value,
    })
  }

  nextPageHandler(pageNumber) {
    // TODO: Animate out
    this.setState({
      displayText: tutorialMessages[pageNumber],
    });
    // TODO: Animate in
  }

  handlePreviousClick() {
    const previousPage = this.state.pageNumber - 1;
    this.setState({
      pageNumber: previousPage,
      displayText: tutorialMessages[previousPage],
    })
  }

  handleNextClick() {
    const nextPage = this.state.pageNumber + 1;
    this.setState({
      pageNumber: nextPage,
      displayText: tutorialMessages[nextPage],
    })
  }

  render() {
    return (
      <div>
        <Navbar />

        <div 
          className="container"
          style={{
            marginTop: "5%",
            marginBottom: "5%",
          }}>

          <MainMarkdownArea
            displayText={this.state.displayText}
            updateDisplayText={this.updateDisplayText}
          />

          <div className="row" style={{padding: "15px"}}>
            <div className="mr-auto">
              <button type="button"
                className="btn btn-success"
                onClick={this.handlePreviousClick}
              >
                Previous
              </button>
            </div>
            <div className="ml-auto">
              <button type="button"
                className="btn btn-success"
                onClick={this.handleNextClick}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
