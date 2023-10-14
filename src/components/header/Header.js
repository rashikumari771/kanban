//src/components/header/Header.js
import React from 'react';
import DropdownMenu from './DropdownMenu';
import './Header.css';

const Header = ({
  isDropdownVisible,
  toggleDropdown,
  groupingOption,
  sortingOption,
  onGroupingChange,
  onSortingChange,
}) => {
  return (
    <div className="Header">
      <button onClick={toggleDropdown}>Options</button>
      {isDropdownVisible && (
        <DropdownMenu
          groupingOption={groupingOption}
          sortingOption={sortingOption}
          onGroupingChange={onGroupingChange}
          onSortingChange={onSortingChange}
        />
      )}
    </div>
  );
};

export default Header;

