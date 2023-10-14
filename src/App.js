// src/App.js
import React, { Component } from 'react';
import Header from './components/header/Header';
import Board from './components/board/Board';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isDropdownVisible: false,
      groupingOption: 'Status',
      sortingOption: 'Priority',
    };
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({
      isDropdownVisible: !prevState.isDropdownVisible,
    }));
  };
  
  handleGroupingChange = (event) => {
    this.setState({ groupingOption: event.target.value });
  };
  
  handleSortingChange = (event) => {
    this.setState({ sortingOption: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <Header
          isDropdownVisible={this.state.isDropdownVisible}
          toggleDropdown={this.toggleDropdown}
          groupingOption={this.state.groupingOption}
          sortingOption={this.state.sortingOption}
          onGroupingChange={this.handleGroupingChange}
          onSortingChange={this.handleSortingChange}
        />
        <main>
          <Board
            groupingOption={this.state.groupingOption}
            sortingOption={this.state.sortingOption}
          />
        </main>
      </div>
    );
  }
}

export default App;

