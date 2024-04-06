import AnimatedPage from "./AnimatedPage";

const FamilyBackground = ({ formData, handleChange,stdnt_id }) => {
  console.log("student id: ",stdnt_id)
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
   
    const formDataToSend = new FormData();
    formDataToSend.append('stdnt_id', stdnt_id);
    formDataToSend.append('father_fname', formData.father_fname);
    formDataToSend.append('father_mname', formData.father_mname);
    formDataToSend.append('father_lname', formData.father_lname);
    formDataToSend.append('father_contact_number', formData.father_contact_number);
    formDataToSend.append('father_email', formData.father_email);
    formDataToSend.append('father_occupation', formData.father_occupation);
    formDataToSend.append('father_income', formData.father_income);
    formDataToSend.append('father_company', formData.father_company);
    formDataToSend.append('mother_fname', formData.mother_fname);
    formDataToSend.append('mother_mname', formData.mother_mname);
    formDataToSend.append('mother_lname', formData.mother_lname);
    formDataToSend.append('mother_contact_number', formData.mother_contact_number);
    formDataToSend.append('mother_email', formData.mother_email);
    formDataToSend.append('mother_occupation', formData.mother_occupation);
    formDataToSend.append('mother_income', formData.mother_income);
    formDataToSend.append('mother_company', formData.mother_company);
    formDataToSend.append('guardian_fname', formData.guardian_fname);
    formDataToSend.append('guardian_mname', formData.guardian_mname);
    formDataToSend.append('guardian_lname', formData.guardian_lname);
    formDataToSend.append('guardian_relation', formData.guardian_relation);
    formDataToSend.append('guardian_contact_number', formData.guardian_contact_number);
    formDataToSend.append('guardian_email', formData.guardian_email);
  
    try {
      const response = await fetch('http://127.0.0.1:8000/api/stdntfamily/', {
        method: 'POST',
        body: formDataToSend
      });
      if (response.ok) {
        console.log(' request succeeded');
      } else {
        console.error('Failed to submit request');
      }
        }
    catch(error) {
      console.error('Error submitting requests:', error);
    }
  };

  
  return (
    <AnimatedPage>

    
    <div className="container">
      <h2>Family Background Form</h2>
      <form onSubmit={handleSubmit}>
        <br />
        <br />
        <h3>Father's Information</h3>
        <div className="form-group-container">
          <div className="form-group">
            <label htmlFor="father_fname">First Name:</label>
            <input
              type="text"
              id="father_fname"
              name="father_fname"
              value={formData.father_fname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="father_mname">Middle Name:</label>
            <input
              type="text"
              id="father_mname"
              name="father_mname"
              value={formData.father_mname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="father_lname">Last Name:</label>
            <input
              type="text"
              id="father_lname"
              name="father_lname"
              value={formData.father_lname}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group-container">
          <div className="form-group">
            <label htmlFor="father_email">Email:</label>
            <input
              type="email"
              id="father_email"
              name="father_email"
              value={formData.father_email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="father_contact_number">Contact Number:</label>
            <input
              type="text"
              id="father_contact_number"
              name="father_contact_number"
              value={formData.father_contact_number}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group-container">
          <div className="form-group">
            <label htmlFor="father_occupation">Occupation:</label>
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
            <label htmlFor="father_income">Income:</label>
            <input
              type="text"
              id="father_income"
              name="father_income"
              value={formData.father_income}
              onChange={handleChange}
              pattern="\d+"
              title="Please enter a valid integer" 
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="father_company">Name & Address of the Company:</label>
          <input
            type="text"
            id="father_company"
            name="father_company"
            value={formData.father_company}
            onChange={handleChange}
            required
          />
        </div>
        {/* Mother's Information */}
        <h3>Mother's Information</h3>
        <div className="form-group-container">
          <div className="form-group">
            <label htmlFor="mother_fname">First Name:</label>
            <input
              type="text"
              id="mother_fname"
              name="mother_fname"
              value={formData.mother_fname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mother_mname">Middle Name:</label>
            <input
              type="text"
              id="mother_mname"
              name="mother_mname"
              value={formData.mother_mname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mother_lname">Last Name:</label>
            <input
              type="text"
              id="mother_lname"
              name="mother_lname"
              value={formData.mother_lname}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group-container">
          <div className="form-group">
            <label htmlFor="mother_email">Email:</label>
            <input
              type="email"
              id="mother_email"
              name="mother_email"
              value={formData.mother_email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mother_contact_number">Contact Number:</label>
            <input
              type="text"
              id="mother_contact_number"
              name="mother_contact_number"
              value={formData.mother_contact_number}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group-container">
          <div className="form-group">
            <label htmlFor="mother_occupation">Occupation:</label>
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
          <label htmlFor="mother_income">Income:</label>
              <input
                type="text"
                id="mother_income"
                name="mother_income"
                value={formData.mother_income}
                onChange={handleChange}
                pattern="\d+"
                title="Please enter a valid integer" 
              />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="mother_company">Name & Address of the Company:</label>
          <input
            type="text"
            id="mother_company"
            name="mother_company"
            value={formData.mother_company}
            onChange={handleChange}
            required
          />
        </div>
        {/* Guardian's Information */}
        <h3>Guardian's Information</h3>
        <div className="form-group-container">
          <div className="form-group">
            <label htmlFor="guardian_fname">First Name:</label>
            <input
              type="text"
              id="guardian_fname"
              name="guardian_fname"
              value={formData.guardian_fname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="guardian_mname">Middle Name:</label>
            <input
              type="text"
              id="guardian_mname"
              name="guardian_mname"
              value={formData.guardian_mname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="guardian_lname">Last Name:</label>
            <input
              type="text"
              id="guardian_lname"
              name="guardian_lname"
              value={formData.guardian_lname}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="guardian_relation">Guardian's relation to student:</label>
          <input
            type="text"
            id="guardian_relation"
            name="guardian_relation"
            value={formData.guardian_relation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-container">
          <div className="form-group">
            <label htmlFor="guardian_email">Email:</label>
            <input
              type="email"
              id="guardian_email"
              name="guardian_email"
              value={formData.guardian_email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="guardian_contact_number">Contact Number:</label>
            <input
              type="text"
              id="guardian_contact_number"
              name="guardian_contact_number"
              value={formData.guardian_contact_number}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <input type="submit" value="Submit" className="btn_submit" />
      </form>
    </div>
    </AnimatedPage>
  );
};

export default FamilyBackground;
