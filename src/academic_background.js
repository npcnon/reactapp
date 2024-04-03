import AnimatedPage from './AnimatedPage';

const AcademicBackground =  ({ formData, handleChange, stdnt_id }) => {


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    const formDataToSend = new FormData();
    formDataToSend.append('stdnt_id', stdnt_id);
    formDataToSend.append('course', formData.course);
    formDataToSend.append('major_in', formData.major_in);
    formDataToSend.append('student_type', formData.student_type);
    formDataToSend.append('semester_entry', formData.semester_entry);
    formDataToSend.append('year_entry', formData.year_entry);
    formDataToSend.append('year_graduate', formData.year_graduate);
    formDataToSend.append('application_type', formData.application_type);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/stdntacademicbackground/', {
        method: 'POST',
        body: formDataToSend
      });
      if (response.ok) {
        console.log(' request succeeded');
      } else {
        console.error('Failed to submit request');
        console.log('student id:', stdnt_id)
      }
    } catch(error) {
      console.error('Error submitting requests:', error);
      console.log('student id:', stdnt_id)
    }
  };

  return (
    <AnimatedPage>
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
          <input
            type="text"
            id="student_type"
            name="student_type"
            value={formData.student_type}
            onChange={handleChange}
            required
          />
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
          <label htmlFor="year_entry">Year Entry:</label>
          <input
            type="Date"
            id="year_entry"
            name="year_entry"
            value={formData.year_entry}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="year_graduate">Year Graduate:</label>
          <input
            type="Date"
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
    </AnimatedPage>
  );
};

export default AcademicBackground;
