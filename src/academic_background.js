import React, { useState } from 'react';

const AcademicBackground = () => {
  const [formData, setFormData] = useState({
    course: '',
    major_in: '',
    student_type: '',
    semester_entry: '',
    year_entry: '',
    year_graduate: '',
    application_type: '',
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
      <h2>Academic Background Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="course">Course:</label>
          <input
            type="text"
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="major_in">Major:</label>
          <input
            type="text"
            id="major_in"
            name="major_in"
            value={formData.major_in}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="student_type">Student Type:</label>
          <select
            id="student_type"
            name="student_type"
            value={formData.student_type}
            onChange={handleChange}
            required
          >
            <option value="">Select Student Type</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="online">Online</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="semester_entry">Semester Entry:</label>
          <input
            type="text"
            id="semester_entry"
            name="semester_entry"
            value={formData.semester_entry}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="year_entry">Year of Entry:</label>
          <input
            type="text"
            id="year_entry"
            name="year_entry"
            value={formData.year_entry}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="year_graduate">Year of Graduation:</label>
          <input
            type="text"
            id="year_graduate"
            name="year_graduate"
            value={formData.year_graduate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="application_type">Application Type:</label>
          <input
            type="text"
            id="application_type"
            name="application_type"
            value={formData.application_type}
            onChange={handleChange}
            required
          />
        </div>

        <input type="submit" value="Submit" className="btn_submit" />
      </form>
    </div>
  );
};

export default AcademicBackground;
