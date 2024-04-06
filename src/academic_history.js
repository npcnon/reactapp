const AcademicHistory = ({ formData, handleChange, stdnt_id, handle_submit}) => {
  console.log(stdnt_id)
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    const formDataToSend = new FormData();
    formDataToSend.append('stdnt_id', stdnt_id);
    formDataToSend.append('elementary_school', formData.elementary_school);
    formDataToSend.append('elementary_address', formData.elementary_address);
    formDataToSend.append('elementary_honors', formData.elementary_honors);
    formDataToSend.append('elementary_graduate', formData.elementary_graduate);
    formDataToSend.append('secondary_school', formData.secondary_school);
    formDataToSend.append('secondary_address', formData.secondary_address);
    formDataToSend.append('secondary_honors', formData.secondary_honors);
    formDataToSend.append('secondary_graduate', formData.secondary_graduate);
    formDataToSend.append('ncar', formData.ncar);
    formDataToSend.append('latest_college', formData.latest_college);
    formDataToSend.append('college_address', formData.college_address);
    formDataToSend.append('college_honors', formData.college_honors);
    formDataToSend.append('course', formData.course);
  
    try {
      const response = await fetch('http://127.0.0.1:8000/api/stdntacademichistory/', {
        method: 'POST',
        body: formDataToSend
      });
      if (response.ok) {
        console.log('Request succeeded');
      } else {
        console.error('Failed to submit request');
      }
    } catch (error) {
      console.error('Error submitting requests:', error);
    }
  };

  return (
    <div className="container">
      <h2>Academic History Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="elementary_school">Elementary School:</label>
          <input
            type="text"
            id="elementary_school"
            name="elementary_school"
            value={formData.elementary_school}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="elementary_address">Elementary Address:</label>
          <input
            type="text"
            id="elementary_address"
            name="elementary_address"
            value={formData.elementary_address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="elementary_honors">Elementary Honors:</label>
          <input
            type="text"
            id="elementary_honors"
            name="elementary_honors"
            value={formData.elementary_honors}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="elementary_graduate">Elementary Graduation Date:</label>
          <input
            type="date"
            id="elementary_graduate"
            name="elementary_graduate"
            value={formData.elementary_graduate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="secondary_school">Secondary School:</label>
          <input
            type="text"
            id="secondary_school"
            name="secondary_school"
            value={formData.secondary_school}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="secondary_address">Secondary Address:</label>
          <input
            type="text"
            id="secondary_address"
            name="secondary_address"
            value={formData.secondary_address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="secondary_honors">Secondary Honors:</label>
          <input
            type="text"
            id="secondary_honors"
            name="secondary_honors"
            value={formData.secondary_honors}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="secondary_graduate">Secondary Graduation Date:</label>
          <input
            type="date"
            id="secondary_graduate"
            name="secondary_graduate"
            value={formData.secondary_graduate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="ncar">National Career Assessment Result:</label>
          <input
            type="text"
            id="ncar"
            name="ncar"
            value={formData.ncar}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="latest_college">Latest College Attended:</label>
          <input
            type="text"
            id="latest_college"
            name="latest_college"
            value={formData.latest_college}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="college_address">College Address:</label>
          <input
            type="text"
            id="college_address"
            name="college_address"
            value={formData.college_address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="college_honors">College Honors:</label>
          <input
            type="text"
            id="college_honors"
            name="college_honors"
            value={formData.college_honors}
            onChange={handleChange}
            required
          />
        </div>

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

        
        <button onClick={handle_submit}>
      Submit
    </button>
      </form>
    </div>
  );
};

//<input type="submit" value="Submit" className="btn_submit" />
export default AcademicHistory;
