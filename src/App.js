  import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
  import React, { useState, useEffect} from 'react';
  import PersonalForm from './personal_form';
  import FamilyBackground from './family_background';
  import AcademicBackground from './academic_background';
  import AcademicHistory from './academic_history';
  import Navbar from './navbar';
  import { AnimatePresence } from 'framer-motion';

    //year4/department2/0001
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
      stdnt_id: '',
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

    const [AcademicBackgroundformData, setAcademicBackgroundFormData] = useState({
      stdnt_id: '',
      course:'',
      major_in:'',
      student_type:'',
      semester_entry:'',
      year_entry:'',
      year_graduate:'',
      application_type:'',
    });

    const [AcademicHistoryformData, setHistoryFormData] = useState({
      stdnt_id:'',
      elementary_school: '',
      elementary_address: '',
      elementary_honors: '',
      elementary_graduate: '',
      secondary_school: '',
      secondary_address: '',
      secondary_honors: '',
      secondary_graduate: '',
      ncar: '',
      latest_college: '',
      college_address: '',
      college_honors: '',
      course: '',
    });
    const handleAcademicHistoryDataChange = (e) => {
      setHistoryFormData({
        ...AcademicHistoryformData,
        [e.target.name]: e.target.value
      });
    };
    const handleAcademicBackgroundDataChange = (e) => {
      setAcademicBackgroundFormData({
        ...AcademicBackgroundformData,
        [e.target.name]: e.target.value
      });
    };

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


    const handleSendStudentId = (student_id) => {
      setPersonalFormData({
        ...PersonalFormData,
        student_id: student_id
      });
    };


    const handleSubmit = async (e) => {
      e.preventDefault();

      const formDataToSend = new FormData();
      formDataToSend.append('student_id', PersonalFormData.student_id);
      
      formDataToSend.append('f_name', PersonalFormData.f_name);
      formDataToSend.append('m_name', PersonalFormData.m_name);
      formDataToSend.append('l_name', PersonalFormData.l_name);
      formDataToSend.append('birth_date', PersonalFormData.birth_date);
      formDataToSend.append('birth_place', PersonalFormData.birth_place);
      formDataToSend.append('gender', PersonalFormData.gender);
      formDataToSend.append('marital_status', PersonalFormData.marital_status);
      formDataToSend.append('religion', PersonalFormData.religion);
      formDataToSend.append('country', PersonalFormData.country);
      formDataToSend.append('acr', PersonalFormData.acr);
      
      const formDataToSendAdd = new FormData();
      formDataToSendAdd.append('stdnt_id', PersonalFormData.f_name);
      formDataToSendAdd.append('email', PersonalFormData.email);
      formDataToSendAdd.append('contact_number', PersonalFormData.contact_number);
      formDataToSendAdd.append('citizenship', PersonalFormData.citizenship);
      formDataToSendAdd.append('city_address', PersonalFormData.city_address);
      formDataToSendAdd.append('city_contact_number', PersonalFormData.city_contact_number);
      formDataToSendAdd.append('province_address', PersonalFormData.province_address);
      formDataToSendAdd.append('province_contact_number', PersonalFormData.province_contact_number);
      try {
        const response1 = await fetch('http://127.0.0.1:8000/api/stdntpersonal/', {
          method: 'POST',
          body: formDataToSend
        });
    
        if (response1.ok) {
          console.log('First request succeeded');
          // Append additional formData to formDataToSendAdd
    
          const response2 = await fetch('http://127.0.0.1:8000/api/addstdntinfo/', {
            method: 'POST',
            body: formDataToSendAdd
          });
    
          if (response2.ok) {
            console.log('Second request succeeded');
          } else {
            console.error('Failed to submit second request');
          }
        } else {
          console.error('Failed to submit first request');
        }
      } catch (error) {
        console.error('Error submitting requests:', error);
      }
    };


    const [availableStudentIds, setAvailableStudentIds] = useState([]);
    const location = useLocation();

      //i want to run this when the url is changed, or routes are click or something like that
      const fetchAvailableStudentIds = async () => {
      try {
        console.log('try Fetched data(app):');
        const response = await fetch('http://127.0.0.1:8000/api/stdntpersonal/');
        if (response.ok) {
          const data = await response.json();
          const studentIds = data.map((item) => item.student_id);
          console.log('Fetched data(app):', data); // Log the fetched data
          setAvailableStudentIds(studentIds);
        } else {
          console.error('Failed to fetch available student IDs');
        }
      } catch (error) {
        console.error('Error fetching available student IDs:', error);
      }
    };

    useEffect(() => {
      fetchAvailableStudentIds();
    }, [location.pathname]);


      

    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className='Content'>
            <AnimatePresence>
              <Routes>
              <Route exact path="/" element={<PersonalForm formData={PersonalFormData} handleChange={handlePersonalDataChange} stdnt_id={PersonalFormData.student_id} />} />
              <Route
                path="/family-background"
                element={<FamilyBackground formData={familyFormData} handleChange={handleFamilyBackgroundChange} stdnt_id={PersonalFormData.student_id} onClick={() => fetchAvailableStudentIds()}/>}
              />
              <Route
                path="/academic-background"
                element={<AcademicBackground formData={AcademicBackgroundformData} handleChange={handleAcademicBackgroundDataChange} stdnt_id={PersonalFormData.f_name} sendStudentId={handleSendStudentId} available_student_id={availableStudentIds} fetch_id={fetchAvailableStudentIds} set_id={setAvailableStudentIds} onClick={() => fetchAvailableStudentIds()}/>}
              />

              <Route path="/academic-history" 
              element={<AcademicHistory formData={AcademicHistoryformData} handleChange={handleAcademicHistoryDataChange} stdnt_id={PersonalFormData.student_id} handle_submit={handleSubmit}/>} 
              />
            </Routes>
            </AnimatePresence>
          
          </div>
        </div>
      </Router>
    );
  }

  export default App;
