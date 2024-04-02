import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import PersonalForm from './personal_form';
import FamilyBackground from './family_background';
import AcademicBackground from './academic_background';
import AcademicHistory from './academic_history';
import Something from './something';
import Navbar from './navbar';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [PersonalFormData, setPersonalFormData] = useState({
    student_id:'',
    f_name:'',
    m_name:'',
    l_name:'',
    gender:'',
    birth_date:'',
    birth_place:'',
    marital_status:'',
    religion:'',
    country:'',
    acr: '',
    city_address:'',
    city_contact_number:'',
    province_address:'',
    province_contact_number:'',
    email:'',
    contact_number:'',
    citizenship:'',
  });
  
  const [familyFormData, setFamilyFormData] = useState({
    stdnt_id:PersonalFormData.student_id,
    father_fname:'',
    father_mname:'',
    father_lname:'',
    father_contact_number:'',
    father_email:'',
    father_occupation:'',
    father_income:'',
    father_company:'',
    mother_fname:'',
    mother_mname:'',
    mother_lname:'',
    mother_contact_number:'',
    mother_email:'',
    mother_occupation:'',
    mother_income:'',
    mother_company:'',
    guardian_fname:'',
    guardian_mname:'',
    guardian_lname:'',
    guardian_relation:'',
    guardian_contact_number:'',
    guardian_email:'',
  });




  const handlePersonalDataChange = (e) => {
    setPersonalFormData({
      ...PersonalFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleFamilyBackgroundChange = (e) => {
    setFamilyFormData({
      ...familyFormData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='Content'>
          <AnimatePresence>
             <Routes>
            <Route exact path="/" element={<PersonalForm formData={PersonalFormData} handleChange={handlePersonalDataChange} />} />
            <Route
              path="/family-background"
              element={<FamilyBackground formData={familyFormData} handleChange={handleFamilyBackgroundChange} />}
            />
            <Route path="/academic-background" element={<AcademicBackground />} />
            <Route path="/academic-history" element={<AcademicHistory />} />
            <Route path="/something" element={<Something />} />
          </Routes>
          </AnimatePresence>
         
        </div>
      </div>
    </Router>
  );
}


export default App;
