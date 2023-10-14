import React, { Component } from 'react';
import { fetchKanbanData } from '../../utils/api';
import './Board.css';
import Card from './Card';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: [],
      users: {},
      groupingOption: props.groupingOption,
      sortingOption: props.sortingOption,
      filteredItems: {}, // Initialize filteredItems as an empty object
    };
  }

  // Add lifecycle method to fetch data when the component mounts
  async componentDidMount() {
    await this.fetchData(); // Fetch the data
    this.filterItems(); // Filter the items
  }
  // Fetch data using the API function
  async fetchData() {
    try {
      const data = await fetchKanbanData();
      const { tickets, users } = data;
      const usersDict = {};
      users.forEach((user) => {
        usersDict[user.id] = user;
      });
      this.setState({ tickets, users: usersDict }, () => {
        // Call filterItems inside the callback to ensure data is available
        this.filterItems();
      });
    } catch (error) {
      console.error(error);
    }
  }
  

  // Define a filter function based on state variables
  async filterItems() {
    const { tickets, groupingOption, sortingOption } = this.state;
    let filteredItems = {};
    if (groupingOption === 'Status'||groupingOption === 'status') {
      tickets.forEach((ticket) => {
        if (!filteredItems[ticket.status]) filteredItems[ticket.status] = [];
        filteredItems[ticket.status].push(ticket);
      });
    } else if (groupingOption === 'User'||groupingOption === 'user') {
      tickets.forEach((ticket) => {
        if (!filteredItems[ticket.userId]) filteredItems[ticket.userId] = [];
        filteredItems[ticket.userId].push(ticket);
      });
    } else if (groupingOption === 'Priority'||groupingOption === 'priority') {
      tickets.forEach((ticket) => {
        if (!filteredItems[ticket.priority]) filteredItems[ticket.priority] = [];
        filteredItems[ticket.priority].push(ticket);
      });
    }

    // Sorting logic
    if (sortingOption === 'Priority'||sortingOption === 'priority') {
      for (const group in filteredItems) {
        const groupItems = filteredItems[group];
        groupItems.sort((a, b) => a.priority - b.priority);
      }
    } else if (sortingOption === 'Title'||sortingOption === 'title') {
      for (const group in filteredItems) {
        const groupItems = filteredItems[group];
        groupItems.sort((a, b) => a.title.localeCompare(b.title));
      }
    }


   this.setState({ filteredItems }); 
  }

  async componentDidUpdate(prevProps, prevState) {
    if (
      this.props.groupingOption !== prevProps.groupingOption ||
      this.props.sortingOption !== prevProps.sortingOption
    ) {
      // Update the state with new props
      this.setState({
        groupingOption: this.props.groupingOption,
        sortingOption: this.props.sortingOption,
      }, () => {
        // Call filterItems inside the callback to ensure state is updated
        this.filterItems();
      });
    }
  }
  render() {
    const { filteredItems } = this.state; // Use the filteredItems state variable for rendering
    return (
      <div className="Board">
        {/* Render your filter component here */}
        <div className="Groups">
          {Object.keys(filteredItems).map((group) => (
            <div key={group} className="Group">
              <h3>{group}</h3>
              <div className="Columns">
                {filteredItems[group].map((item) => (
                  <Card
                    key={item.id}
                    ticket={item}
                    user={this.state.users[item.userId]}
                    groupingOption={this.state.groupingOption}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Board;
