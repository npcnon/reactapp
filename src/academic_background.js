import AnimatedPage from './AnimatedPage';
import React, {useEffect, useRef} from 'react';

const AcademicBackground = ({ formData, handleChange, sendStudentId,available_student_id,set_id }) => {
  let student_id;
  const department_id = useRef(null)

  useEffect(() => {
    switch (formData.course) {
      case "Bachelor of Arts in Mass Communication":
        department_id.current = "01";
        break;
      case "Bachelor of Science in Accountancy (BSA)":
      case "Bachelor of Science in Business Administration (BSBA)":
      case "Bachelor of Science in Industrial Technology (BSIT)":
        department_id.current = "02";
        break;
      case "Bachelor of Science in Information Technology (BSIT)":
      case "Associate in Computer Technology (ACT)":
        department_id.current = "03";
        break;
      case "Bachelor of Science in Elementary Education":
      case "Bachelor of Science in Secondary Education":
        department_id.current = "04";
        break;
      case "Bachelor of Science in Industrial Engineering (BSIE)":
      case "Bachelor of Science in Electronics and Communications Engineering (BSECE)":
      case "Bachelor of Science in Electrical Engineering (BSEE)":
      case "Bachelor of Science in Mechanical Engineering (BSME)":
      case "Bachelor of Science in Civil Engineering (BSCE)":
        department_id.current = "06";
        break;
      default:
        department_id.current = ""; // Set default value or handle error case
    }
    // Use department_id here as needed
  }, [formData.course, formData.year_entry, sendStudentId]);


  const data = useRef(null);
  const studentIds = useRef(null);
  useEffect(() => {
    if (available_student_id.length === 0) {
      const fetch_id = async () => {
        try {
          const response = await fetch('http://127.0.0.1:8000/api/stdntpersonal/');
          if (response.ok) {
            data.current = await response.json();
            studentIds.current = data.current.map((item) => item.student_id);
            console.log('(running fetch data)Fetched data:', data);
            set_id(studentIds);
          } else {
            console.error('Failed to fetch available student IDs');
          }
        } catch (error) {
          console.error('Error fetching available student IDs:', error);
        }
      };
  
      fetch_id();
    }
  }, [available_student_id,set_id]); // Add available_student_id as a dependency
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    const formDataToSend = new FormData();
    formDataToSend.append('stdnt_id', student_id);
    formDataToSend.append('course', formData.course);
    formDataToSend.append('department', department_id); // Use department_id here
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
      }
    } catch (error) {
      console.error('Error submitting requests:', error);
    }
  };

    return (
      <AnimatedPage>
      <div className="container">
        <h2>Academic Background Form</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
                <label htmlFor="course">Course:</label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                >
                    <option value="">Select Course</option>
                    <option value="Bachelor of Arts in Mass Communication">Bachelor of Arts in Mass Communication</option>
                    <option value="Graduate">Bachelor of Science in Accountancy (BSA)</option>
                    <option value="UnderGraduate">Bachelor of Science in Business Administration (BSBA)</option>
                    <option value="Bachelor of Science in Information Technology (BSIT)">Bachelor of Science in Information Technology (BSIT)</option>
                    <option value="Associate in Computer Technology (ACT)">Associate in Computer Technology (ACT)</option>
                    <option value="Bachelor of Science in Elementary Education">Bachelor of Science in Elementary Education</option>
                    <option value="Bachelor of Science in Secondary Education">Bachelor of Science in Secondary Education</option>
                    <option value="Bachelor of Science in Industrial Engineering (BSIE)">Bachelor of Science in Industrial Engineering (BSIE)</option>
                    <option value="Bachelor of Science in Electronics and Communications Engineering (BSECE)">Bachelor of Science in Electronics and Communications Engineering (BSECE)</option>
                    <option value="Bachelor of Science in Electrical Engineering (BSEE)">Bachelor of Science in Electrical Engineering (BSEE)</option>
                    <option value="Bachelor of Science in Mechanical Engineering (BSME)">Bachelor of Science in Mechanical Engineering (BSME)</option>
                    <option value="Bachelor of Science in Civil Engineering (BSCE)">Bachelor of Science in Civil Engineering (BSCE)</option>
                    <option value="Bachelor of Science in Industrial Technology (BSIT)">Bachelor of Science in Industrial Technology (BSIT)</option>  
                </select>
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
                    <option value="Graduate">Graduate</option>
                    <option value="UnderGraduate">UnderGraduate</option>
                </select>
              </div>
          <div className="form-group">
            <label htmlFor="semester_entry">Semester Entry:</label>
            <select
              id="semester_entry"
              name="semester_entry"
              value={formData.semester_entry}
              onChange={handleChange}
              required
            >
            <option value="">Select Semester/entry</option>
                    <option value="Graduate">First</option>
                    <option value="UnderGraduate">Second</option>
                    <option value="UnderGraduate">Summer</option>
              </select>
          </div>
          <div className="form-group">
              <label htmlFor="year_entry">Year Entry:</label>
              <input
                type="number"
                id="year_entry"
                name="year_entry"
                value={formData.year_entry}
                onChange={handleChange}
                min="1900" // Adjust the min value as needed
                max={new Date().getFullYear()} // Set max value to the current year
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="year_graduate">Year Graduate:</label>
              <input
                type="number"
                id="year_graduate"
                name="year_graduate"
                value={formData.year_graduate}
                onChange={handleChange}
                min="1900" // Adjust the min value as needed
                max={(new Date().getFullYear() + 10).toString()} // Set max value to current year + 10
                required
              />
            </div>

          <div className="form-group">
            <label htmlFor="application_type">Application Type:</label>
            <select
              type="text"
              id="application_type"
              name="application_type"
              value={formData.application_type}
              onChange={handleChange}
              required
            >
                <option value="">Select Type of Application</option>
                    <option value="Graduate">Freshmen</option>
                    <option value="UnderGraduate">Transferee</option>
                    <option value="UnderGraduate">Cross Enrollee</option>
              </select>
          </div>
          <input type="submit" value="Submit" className="btn_submit" />
        </form>
      </div>
      </AnimatedPage>
    );
  };

  export default AcademicBackground;
