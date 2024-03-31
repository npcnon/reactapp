import React, { useState } from 'react';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    f_name:'',
    m_name:'',
    l_name:'',
    birth_date:'',
    birth_place:'',
    marital_status:'',
    religion:'',
    country:'',
  });

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({
        ...formData,
        image: e.target.files[0]
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('f_name', formData.fname);
    formDataToSend.append('m_name', formData.mname);
    formDataToSend.append('l_name', formData.lname);
    formDataToSend.append('birth_date', formData.birthdate);
    formDataToSend.append('gender', formData.gender);
    formDataToSend.append('civil_stat', formData.civil);
    formDataToSend.append('ImageData', formData.image);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/student/', {
        method: 'POST',
        body: formDataToSend
      });
      if (response.ok) {
        console.log('Student information submitted successfully');
      } else {
        console.error('Failed to submit student information');
      }
    } catch (error) {
      console.error('Error submitting student information:', error);
    }
  };
  
  return (
    <div className="container">
      <h2>Personal Data</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fname">First Name:</label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            required
          />
        </div>

       


        <div className="form-group">
          <label htmlFor="mname">Middle Name:</label>
          <input
            type="text"
            id="mname"
            name="mname"
            value={formData.mname}
            onChange={handleChange}
            required
          />
        </div>


        <div className="form-group">
          <label htmlFor="lname">Last Name:</label>
          <input
            type="text"
            id="lname"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
            required
          />
        </div>




        <div className="form-group-container">
          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="birthdate">Birth Date:</label>
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
          <label htmlFor="placeofbirth">Place of Birth:</label>
          <input
            type="text"
            id="placeofbirth"
            name="placeofbirth"
            value={formData.birth_place}
            onChange={handleChange}
            required
          />
        </div>

        </div>
        

        <div className="form-group-container">

          
        <div className="form-group">
            <label htmlFor="birthdate">Country:</label>
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Citizenship:</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="birthdate">ACR (foreign students):</label>
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              required
            />
          </div>

        </div>
        
       

        <div className="form-group-container">

          <div className="form-group">
            <label htmlFor="contactnum">Marital Status:</label>
            <input
              type="text"
              id="contactnum"
              name="contactnum"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
          <label htmlFor="contactnum">Religion:</label>
          <input
            type="text"
            id="contactnum"
            name="contactnum"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        </div>
        
       

       <div className="form-group-container">
       <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactnum">Contact Number:</label>
          <input
            type="text"
            id="contactnum"
            name="contactnum"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      
       </div>
        
       
       <div className="form-group-container">
       <div className="form-group">
          <label htmlFor="contactnum">City Address:</label>
          <input
            type="text"
            id="contactnum"
            name="contactnum"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactnum">City Contact Number:</label>
          <input
            type="text"
            id="contactnum"
            name="contactnum"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
       

       <div className="form-group-container">
       <div className="form-group">
          <label htmlFor="contactnum">Province Address:</label>
          <input
            type="text"
            id="contactnum"
            name="contactnum"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactnum">Province Contact Number:</label>
          <input
            type="text"
            id="contactnum"
            name="contactnum"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

       </div>
        
        
        <input type="submit" value="Submit" className='btn_submit'/>
      </form>
    </div>
  );
};

export default StudentForm;
