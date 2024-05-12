  import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
  import React, { useState, useEffect,useRef} from 'react';
  import PersonalForm from './personal_form';
  import FamilyBackground from './family_background';
  import AcademicBackground from './academic_background';
  import AcademicHistory from './academic_history';
  import Navbar from './navbar';
  import { AnimatePresence } from 'framer-motion';
  import DropdownNav from './dropnav';
  import StudentInfo from './studentview';


  //year4/department2/0001
  function App() {


    const base_link = `https://afknon.pythonanywhere.com/`
    //const base_link = `http://127.0.0.1:8000/`
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


    const validatePersonalForm = () => {
      // Check if all required fields are filled out correctly
      // Return true if the form is valid, otherwise false
      
      // For example, you can check if all required fields are filled out:
      if (
          PersonalFormData.f_name.trim() === '' ||
          PersonalFormData.m_name.trim() === '' ||
          PersonalFormData.l_name.trim() === '' ||
          PersonalFormData.birth_date.trim() === '' ||
          PersonalFormData.birth_place.trim() === '' ||
          PersonalFormData.gender.trim() === '' ||
          PersonalFormData.marital_status.trim() === '' ||
          PersonalFormData.religion.trim() === '' ||
          PersonalFormData.country.trim() === '' ||
          PersonalFormData.acr.trim() === '' ||
          PersonalFormData.email.trim() === '' ||
          PersonalFormData.contact_number.trim() === '' ||
          PersonalFormData.citizenship.trim() === '' ||
          PersonalFormData.city_address.trim() === '' ||
          PersonalFormData.city_contact_number.trim() === '' ||
          PersonalFormData.province_address.trim() === '' ||
          PersonalFormData.province_contact_number.trim() === ''
      ) {
          // If any required field is empty, return false
          console.log("form is not valid")
          return false;
      }
      
      // Additional validation checks can be added here if needed
      
      // If all checks pass, return true
      console.log("form is valid")
      return true;
  };  
    
    
    const handleSubmitpersonal = async (e) => {
      e.preventDefault();

      const formDataToSend = new FormData();
      console.log("Personal Data id:", PersonalFormData.student_id)
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
      formDataToSendAdd.append('stdnt_id', PersonalFormData.student_id  );
      formDataToSendAdd.append('email', PersonalFormData.email);
      formDataToSendAdd.append('contact_number', PersonalFormData.contact_number);
      formDataToSendAdd.append('citizenship', PersonalFormData.citizenship);
      formDataToSendAdd.append('city_address', PersonalFormData.city_address);
      formDataToSendAdd.append('city_contact_number', PersonalFormData.city_contact_number);
      formDataToSendAdd.append('province_address', PersonalFormData.province_address);
      formDataToSendAdd.append('province_contact_number', PersonalFormData.province_contact_number);
      try {
        const response1 = await fetch(`${base_link}api/stdntpersonal/`, {
          method: 'POST',
          body: formDataToSend
        });
    
        if (response1.ok) {
          console.log('First request succeeded');
          // Append additional formData to formDataToSendAdd
    
          const response2 = await fetch(`${base_link}api/addstdntinfo/`, {
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

    const familyvalidateForm = () => {
      // Perform validation logic here
      // Check if all required fields are filled out correctly
      // Return true if the form is valid, otherwise false
      // You can use familyFormData object to access form data
    
      // For example, you can check if all required fields are filled out:
      if (
        familyFormData.father_fname.trim() === '' ||
        familyFormData.father_mname.trim() === '' ||
        familyFormData.father_lname.trim() === '' ||
        familyFormData.father_email.trim() === '' ||
        familyFormData.father_contact_number.trim() === '' ||
        familyFormData.father_occupation.trim() === '' ||
        familyFormData.father_income.trim() === '' ||
        familyFormData.father_company.trim() === '' ||
        familyFormData.mother_fname.trim() === '' ||
        familyFormData.mother_mname.trim() === '' ||
        familyFormData.mother_lname.trim() === '' ||
        familyFormData.mother_email.trim() === '' ||
        familyFormData.mother_contact_number.trim() === '' ||
        familyFormData.mother_occupation.trim() === '' ||
        familyFormData.mother_company.trim() === '' ||
        familyFormData.guardian_fname.trim() === '' ||
        familyFormData.guardian_mname.trim() === '' ||
        familyFormData.guardian_lname.trim() === '' ||
        familyFormData.guardian_relation.trim() === '' ||
        familyFormData.guardian_contact_number.trim() === '' ||
        familyFormData.guardian_email.trim() === ''
      ) {
        // If any required field is empty, return false
        console.log("form is not valid")
        return false;
      }
    
      // Additional validation checks can be added here if needed
    
      // If all checks pass, return true
      console.log("form is valid")
      return true;
    };
    

    const handleSubmitfamily = async (e) => {
      e.preventDefault();
      // Handle form submission
      
      const formDataToSend = new FormData();
    formDataToSend.append('stdnt_id', PersonalFormData.student_id);
    formDataToSend.append('father_fname', familyFormData.father_fname);
    formDataToSend.append('father_mname', familyFormData.father_mname);
    formDataToSend.append('father_lname', familyFormData.father_lname);
    formDataToSend.append('father_contact_number', familyFormData.father_contact_number);
    formDataToSend.append('father_email', familyFormData.father_email);
    formDataToSend.append('father_occupation', familyFormData.father_occupation);
    formDataToSend.append('father_income', familyFormData.father_income);
    formDataToSend.append('father_company', familyFormData.father_company);
    formDataToSend.append('mother_fname', familyFormData.mother_fname);
    formDataToSend.append('mother_mname', familyFormData.mother_mname);
    formDataToSend.append('mother_lname', familyFormData.mother_lname);
    formDataToSend.append('mother_contact_number', familyFormData.mother_contact_number);
    formDataToSend.append('mother_email', familyFormData.mother_email);
    formDataToSend.append('mother_occupation', familyFormData.mother_occupation);
    formDataToSend.append('mother_income', familyFormData.mother_income);
    formDataToSend.append('mother_company', familyFormData.mother_company);
    formDataToSend.append('guardian_fname', familyFormData.guardian_fname);
    formDataToSend.append('guardian_mname', familyFormData.guardian_mname);
    formDataToSend.append('guardian_lname', familyFormData.guardian_lname);
    formDataToSend.append('guardian_relation', familyFormData.guardian_relation);
    formDataToSend.append('guardian_contact_number', familyFormData.guardian_contact_number);
    formDataToSend.append('guardian_email', familyFormData.guardian_email);

    try {
      const response = await fetch(`${base_link}api/stdntfamily/`, {
        method: 'POST',
        body: formDataToSend
      });
      if (response.ok) {
        console.log(' request succeeded(family)');
      } else {
        console.error('Failed to submit request(family)');
      }
        }
    catch(error) {
      console.error('Error submitting requests(family):', error);
    }
    };
    

    const academicbackgroundvalidateForm = () => {
      // Perform validation logic here
      // Check if all required fields are filled out correctly
      // Return true if the form is valid, otherwise false
      // You can use AcademicBackgroundformData object to access form data
      
      // For example, you can check if all required fields are filled out:
      if (
        PersonalFormData.student_id.trim() === '' ||
        AcademicBackgroundformData.course.trim() === '' ||
        AcademicBackgroundformData.major_in.trim() === '' ||
        AcademicBackgroundformData.student_type.trim() === '' ||
        AcademicBackgroundformData.semester_entry.trim() === '' ||
        AcademicBackgroundformData.year_entry.trim() === '' ||
        AcademicBackgroundformData.year_graduate.trim() === '' ||
        AcademicBackgroundformData.application_type.trim() === '' ||
        !department_id.current // Check if department_id is not set
      ) {
        // If any required field is empty, return false
        console.log("form is not valid")
        return false;
      }
      
      // Additional validation checks can be added here if needed
      
      // If all checks pass, return true
      console.log("form is valid")
      return true;
    };

    
    const department_id = useRef(null)
    const handleSubmitacademicbackground = async (e) => {
      e.preventDefault();
      console.log("Academic background student id:",PersonalFormData.student_id)
      console.log("Academic background department id: ", department_id.current)
      // Handle form submission
      const formDataToSend = new FormData();
      formDataToSend.append('stdnt_id', PersonalFormData.student_id);
      formDataToSend.append('course', AcademicBackgroundformData.course);
      formDataToSend.append('department', department_id.current); // Use department_id here
      formDataToSend.append('major_in', AcademicBackgroundformData.major_in);
      formDataToSend.append('student_type', AcademicBackgroundformData.student_type);
      formDataToSend.append('semester_entry', AcademicBackgroundformData.semester_entry);
      formDataToSend.append('year_entry', AcademicBackgroundformData.year_entry);
      formDataToSend.append('year_graduate', AcademicBackgroundformData.year_graduate);
      formDataToSend.append('application_type', AcademicBackgroundformData.application_type);
    
      try {
        const response = await fetch(`${base_link}api/stdntacademicbackground/`, {
          method: 'POST',
          body: formDataToSend
        });
        if (response.ok) {
          console.log(' request succeeded(academic background)');
        } else {
          console.error('Failed to submit request(academic background)');
        }
      } catch (error) {
        console.error('Error submitting requests:(academic background)', error);
      }
    };
    
    const handleSubmitacademichistory = async (e) => {
      e.preventDefault();
      // Handle form submission
      const formDataToSend = new FormData();
      formDataToSend.append('stdnt_id', PersonalFormData.student_id);
      formDataToSend.append('elementary_school', AcademicHistoryformData.elementary_school);
      formDataToSend.append('elementary_address', AcademicHistoryformData.elementary_address);
      formDataToSend.append('elementary_honors', AcademicHistoryformData.elementary_honors);
      formDataToSend.append('elementary_graduate', AcademicHistoryformData.elementary_graduate);
      formDataToSend.append('secondary_school', AcademicHistoryformData.secondary_school);
      formDataToSend.append('secondary_address', AcademicHistoryformData.secondary_address);
      formDataToSend.append('secondary_honors', AcademicHistoryformData.secondary_honors);
      formDataToSend.append('secondary_graduate', AcademicHistoryformData.secondary_graduate);
      formDataToSend.append('ncar', AcademicHistoryformData.ncar);
      formDataToSend.append('latest_college', AcademicHistoryformData.latest_college);
      formDataToSend.append('college_address', AcademicHistoryformData.college_address);
      formDataToSend.append('college_honors', AcademicHistoryformData.college_honors);
      formDataToSend.append('course', AcademicHistoryformData.course);
    
      try {
        const response = await fetch(`${base_link}api/stdntacademichistory/`, {
          method: 'POST',
          body: formDataToSend
        });
        if (response.ok) {
          console.log('Request succeeded(academic history)');
        } else {
          console.error('Failed to submit request(academic history)');
        }
      } catch (error) {
        console.error('Error submitting requests(academic history):', error);
      }
    };
    

    const [availableStudentIds, setAvailableStudentIds] = useState([]);
    

      
      const fetchAvailableStudentIds = async () => {
      try {
        setIsUndergraduate(false)
        console.log("is udergraduate: ", is_undergraduate)
        console.log('try Fetched data(app):');
        const response = await fetch(`${base_link}api/stdntpersonal/`);
        if (response.ok) {
          const data = await response.json();
          const studentIds = data.map((item) => item.student_id);
          console.log('Fetched data(app):', data); // Log the fetched data
          console.log("app.js StudentIds: ", studentIds)
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
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const [students, setStudents] = useState([]);

    const fetchStudents = async () => {
      try {
        const response = await fetch(`${base_link}api/stdntpersonal`);
        if (response.ok) {
          console.log("successfully fetched the students data. ");
          const data = await response.json();
          setStudents(data); // Set the fetched students to state
        } else {
          console.error('Failed to fetch students');
        }
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    useEffect(() => {
      fetchStudents();
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const [students_course, setStudentscourse] = useState([]);

    const fetchStudentscourse = async () => {
      try {
        const response = await fetch(`${base_link}api/stdntacademicbackground`);
        if (response.ok) {
          console.log("successfully fetched the students backgrounddata. ");
          const data = await response.json();
          setStudentscourse(data); // Set the fetched students to state
        } else {
          console.error('Failed to fetch students');
        }
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    useEffect(() => {
      fetchStudentscourse();
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const [is_undergraduate, setIsUndergraduate] = useState(false);
    const runSubmit = async (e) => {
      e.preventDefault();
      try {
        await handleSubmitpersonal(e);
        await handleSubmitacademicbackground(e);
        await handleSubmitfamily(e); // Uncomment if needed
        if (is_undergraduate === true) {
          await handleSubmitacademichistory(e); // Uncomment if needed
        }
      } catch (error) {
        console.error('Error submitting forms:', error);
      }
    }
      

      return (
        <Router>
          <div className="App">
            <DropdownNav/>
              {/*if View/Edit Students are selected in dropnav
            <SimpleTable/>
            else if enroll Students are selected in dropnav*/}
            <Navbar fetchid={fetchAvailableStudentIds} get_students={fetchStudents} stdntcrs={fetchStudentscourse} is_undergraduate_true={is_undergraduate}/>
            <div className='Content'>
              <AnimatePresence>
                <Routes>
                <Route 
                exact path="/" 
                element={<PersonalForm 
                formData={PersonalFormData} 
                handleChange={handlePersonalDataChange} 
                stdnt_id={PersonalFormData.student_id} 
                validateForm={validatePersonalForm}
                base_link={base_link}
                />} />
                <Route
                  path="/family-background"
                  element={
                  <FamilyBackground 
                  formData={familyFormData} 
                  handleChange={handleFamilyBackgroundChange} 
                  stdnt_id={PersonalFormData.student_id} 
                  onClick={() => fetchAvailableStudentIds()}
                  validateForm={familyvalidateForm}
                  base_link={base_link}
                  />}
                />
                <Route
                  path="/academic-background"
                  element={
                  <AcademicBackground 
                  formData={AcademicBackgroundformData} 
                  handleChange={handleAcademicBackgroundDataChange} 
                  stdnt_id={PersonalFormData.student_id} 
                  sendStudentId={handleSendStudentId} 
                  available_student_id={availableStudentIds} 
                  fetch_id={fetchAvailableStudentIds} 
                  set_id={setAvailableStudentIds} 
                  onClick={() => fetchAvailableStudentIds()} 
                  handle_submit={runSubmit} 
                  department_id ={department_id} 
                  is_undergraduate={setIsUndergraduate}/>}
                  validateForm={academicbackgroundvalidateForm}
                  base_link={base_link}
                />

                <Route path="/academic-history" 
                element={<AcademicHistory 
                formData={AcademicHistoryformData} handleChange={handleAcademicHistoryDataChange} stdnt_id={PersonalFormData.student_id} handle_submit={runSubmit}/>} 
                />
                <Route path="/student-info" element={<StudentInfo students={students} stdntcrs={students_course}/>} />
              </Routes>
              </AnimatePresence>
            
            </div>
          </div>
        </Router>
      );
    }

    export default App;
