import React from 'react';
import './DropdownMenu.css';

const DropdownMenu = ({
  groupingOption,
  sortingOption,
  onGroupingChange,
  onSortingChange,
}) => {
  const handleGroupingChange = (event) => {
    onGroupingChange(event);
  };

  const handleSortingChange = (event) => {
    onSortingChange(event);
  };

  return (
    <div className="DropdownMenu">
      <div className="grouping-options">
        <label>Group By:</label>
        <select value={groupingOption} onChange={handleGroupingChange}>
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div className="sorting-options">
        <label>Sort By:</label>
        <select value={sortingOption} onChange={handleSortingChange}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
};

export default DropdownMenu;
