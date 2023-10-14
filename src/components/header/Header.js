import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import './Header.css';

const Header = ({
  groupingOption,
  sortingOption,
  onGroupingChange,
  onSortingChange,
}) => {
  const [isModalVisible, setModalVisibility] = useState(false);

  const toggleModal = () => {
    setModalVisibility(!isModalVisible);
  };

  return (
    <div className="Header">
      <button onClick={toggleModal}>Options</button>
      {isModalVisible && (
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
