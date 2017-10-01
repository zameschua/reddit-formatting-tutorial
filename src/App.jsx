import React, { Component } from 'react';
import './styles/bootstrap.min.css';

import { TUTORIAL_MESSAGES, NUMBER_OF_TUTORIAL_MESSAGES } from './tutorialMessages'
import Navbar from './components/Navbar';
import MainMarkdownArea from './components/MainMarkdownArea';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 0,
      displayText: TUTORIAL_MESSAGES[0],
      leftButtonDisabled: true,
      rightButtonDisabled: false,
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
      displayText: TUTORIAL_MESSAGES[pageNumber],
    });
    // TODO: Animate in
  }

  handlePreviousClick() {
    if (this.state.pageNumber === 0) {
      return;
    }

    const previousPage = this.state.pageNumber - 1;
    this.setState({
      pageNumber: previousPage,
      displayText: TUTORIAL_MESSAGES[previousPage],
    })

    if (this.state.pageNumber === 1) {
      this.setState({
        leftButtonDisabled: true,
      })
    } else {
      this.setState({
        rightButtonDisabled: false,
        leftButtonDisabled: false,
      })
    }
  }

  handleNextClick() {
    if (this.state.pageNumber === NUMBER_OF_TUTORIAL_MESSAGES) {
      return;
    }
    const nextPage = this.state.pageNumber + 1;
    this.setState({
      pageNumber: nextPage,
      displayText: TUTORIAL_MESSAGES[nextPage],
    })

    if (this.state.pageNumber === NUMBER_OF_TUTORIAL_MESSAGES - 1) {
      this.setState({
        rightButtonDisabled: true,
      })
    } else {
      this.setState({
        rightButtonDisabled: false,
        leftButtonDisabled: false,
      })
    }
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
                disabled={this.state.leftButtonDisabled}
              >
                Previous
              </button>
            </div>
            <div className="ml-auto">
              <button type="button"
                className="btn btn-success"
                onClick={this.handleNextClick}
                disabled={this.state.rightButtonDisabled}
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
