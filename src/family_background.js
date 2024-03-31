import React, { useState } from 'react';

const FamilyBackground = () => {
  const [formData, setFormData] = useState({
    father_name: '',
    mother_name: '',
    father_occupation: '',
    mother_occupation: '',
    number_of_siblings: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="container">
      <h2>Family Background Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="father_name">Father's Name:</label>
          <input
            type="text"
            id="father_name"
            name="father_name"
            value={formData.father_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mother_name">Mother's Name:</label>
          <input
            type="text"
            id="mother_name"
            name="mother_name"
            value={formData.mother_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="father_occupation">Father's Occupation:</label>
          <input
            type="text"
            id="father_occupation"
            name="father_occupation"
            value={formData.father_occupation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mother_occupation">Mother's Occupation:</label>
          <input
            type="text"
            id="mother_occupation"
            name="mother_occupation"
            value={formData.mother_occupation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="number_of_siblings">Number of Siblings:</label>
          <input
            type="text"
            id="number_of_siblings"
            name="number_of_siblings"
            value={formData.number_of_siblings}
            onChange={handleChange}
            required
          />
        </div>

        <input type="submit" value="Submit" className="btn_submit" />
      </form>
    </div>
  );
};

export default FamilyBackground;
