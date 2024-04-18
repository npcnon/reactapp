import AnimatedPage from './AnimatedPage';
import React, {useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AcademicBackground = ({ formData, handleChange, sendStudentId,available_student_id,handle_submit,department_id, is_undergraduate,validateForm, base_link }) => {


  useEffect(() => {

    if (formData.student_type === "Graduate") {
      is_undergraduate(false);
    }
    else if(formData.student_type === "")
    {
      is_undergraduate(false);
    }
    else {
      is_undergraduate(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.student_type]);


  useEffect(() => {
    switch (formData.course) {
      case "Bachelor of Arts in Mass Communication":
        department_id.current = "01";
        break;
      case "Bachelor of Science in Accountancy (BSA)":
      case "Bachelor of Science in Business Administration (BSBA)":
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
      case "Bachelor of Science in Industrial Technology (BSIT)":
        department_id.current = "06";
        break;
      default:
        console.log("default activated")
        department_id.current = ""; // Set default value or handle error case
    }
   
    if (available_student_id.length === 0) {
      console.log('No data available');
      const temp_id = (available_student_id.length + 1).toString().padStart(4, '0');
      const generatedStudentId = formData.year_entry.toString() + department_id.current + temp_id;
      console.log("real id:", generatedStudentId);
      sendStudentId(generatedStudentId); // Call sendStudentId here
    }
    else {
      // Find the maximum student ID from available_student_id and calculate the next one
      const maxStudentId = Math.max(...available_student_id.map(id => parseInt(id.substring(8))));
      console.log("max Student ID: ", maxStudentId)
      const nextStudentId = (maxStudentId + 1).toString().padStart(4, '0');
      const generatedStudentId = formData.year_entry.toString() + department_id.current + nextStudentId;
      console.log("real id:", generatedStudentId);
      sendStudentId(generatedStudentId); // Call sendStudentId here
    }
   

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.course, formData.year_entry, available_student_id]);


   
  

  

  const nav = useNavigate(); 
  const handleSubmit2 = async(event) => {
    event.preventDefault(); // Prevent default form submission
    
    try{
      // eslint-disable-next-line
      const response = await fetch(`${base_link}api/something/`);
    }
    catch (error) {
      // Handle fetch error (optional)
      console.error('Error fetching data:', error);
    }
    // Validate the form
    const isValid = validateForm();
    if (isValid) {
      // Navigate to the next route if the form is valid
      nav("/academic-background");
    } else {
      // Handle invalid form submission (optional)
      console.log('Form is invalid');
    }
  };

    return (
      <AnimatedPage>
      <div className="container">
        <h2>Academic Background Form</h2>
        <form
  onSubmit={
    formData.student_type === "Graduate" || formData.student_type === "" ? handle_submit : handleSubmit2
  }
>

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
                    <option value="Bachelor of Science in Accountancy (BSA)">Bachelor of Science in Accountancy (BSA)</option>
                    <option value="Bachelor of Science in Business Administration (BSBA)">Bachelor of Science in Business Administration (BSBA)</option>
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
                    <option value="First">First</option>
                    <option value="Second">Second</option>
                    <option value="Summer">Summer</option>
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
                    <option value="Transferee">Transferee</option>
                    <option value="Cross Enrollee">Cross Enrollee</option>
              </select>
          </div>
          <div className="form-group-container">
          <div className="button-container">
            <Link to="/family-background" style={{ textDecoration: 'none' }}>
              <button style={{ textDecoration: 'none' }}>Back</button>
            </Link>
            {formData.student_type === "Graduate" ? (
              <button onClick={handle_submit}>Submit</button>
            ) : formData.student_type === "" ? (
              <button disabled>Submit</button>
            ) : (
              <Link to="/academic-history" style={{ textDecoration: 'none' }}>
                <button style={{ textDecoration: 'none' }}>Next</button>
              </Link>
            )}
          </div>
          </div>
        </form>
      </div>
      </AnimatedPage>
    );
  };

  export default AcademicBackground;
