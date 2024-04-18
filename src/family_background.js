import AnimatedPage from "./AnimatedPage";
import { Link, useNavigate } from 'react-router-dom';

const FamilyBackground = ({ formData, handleChange, validateForm}) => {
  const nav = useNavigate(); 

  const handleSubmit = async(event) => {
    event.preventDefault(); // Prevent default form submission
    
    try{
      // eslint-disable-next-line
      const response = await fetch('http://127.0.0.1:8000/api/something/');
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
        <div className="form-group-container">
          <div className="button-container">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <button style={{ textDecoration: 'none' }}>Back</button>
            </Link>
            
                <button type="submit" style={{ textDecoration: 'none' }}>Next</button>
            
          </div>
          </div>
      </form>
    </div>
    </AnimatedPage>
  );
};

export default FamilyBackground;
