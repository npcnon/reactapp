import React, { useState } from 'react';

function DropdownNav() {
  // State to manage the selected option
  const [selectedOption, setSelectedOption] = useState('');

  // Function to handle option selection
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    // Check if the selected option is "c"
    if (event.target.value === 'c') {
      // Redirect to the desired website
      window.open('https://afknon.pythonanywhere.com','_blank'); // Replace 'https://example.com' with the desired URL
    }
  };

  return (
    <div className="navbar-wrapper">
      <h1 id="titlename">Benedicto College</h1>
      <div className="dropnav">
        <h2>Welcome! Username</h2>
        {/* Dropdown select element */}
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="">Options</option>
          <option value="a">Home</option>
          <option value="b">Enroll Students</option>
          <option value="c">View/Edit Students</option>
        </select>
      </div>
    </div>
  );
}

export default DropdownNav;
