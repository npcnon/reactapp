import React, { useState } from 'react';

const Something = () => {
  const [formData, setFormData] = useState({
    f_name:'asd',
    m_name:'asd',
    l_name:'asd',

  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  function myFunction(item) {
   console.log(item)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('f_name', formData.f_name);
    formDataToSend.append('m_name', formData.m_name);
    formDataToSend.append('l_name', formData.l_name);
    formDataToSend.forEach(myFunction)
  
    try {
        const response = await fetch('http://127.0.0.1:8000/api/something/', {
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
      <h2>Academic Background Form</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="f_name">First Name:</label>
          <input
            type="text"
            id="f_name"
            name="f_name"
            value={formData.f_name}
            onChange={handleChange}
            required
          />
        </div>

       

        <div className="form-group">
          <label htmlFor="m_name">Middle Name:</label>
          <input
            type="text"
            id="m_name"
            name="m_name"
            value={formData.m_name}
            onChange={handleChange}
            required
          />
        </div>


        <div className="form-group">
          <label htmlFor="l_name">Last Name:</label>
          <input
            type="text"
            id="l_name"
            name="l_name"
            value={formData.l_name}
            onChange={handleChange}
            required
          />
        </div>

        <input type="submit" value="Submit" className="btn_submit" />
      </form>
    </div>
  );
};

export default Something;
