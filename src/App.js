  import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
  import PersonalForm from './personal_form';
  import FamilyBackground from './family_background';
  import AcademicBackground from './academic_background';
  import AcademicHistory from './academic_history';
  import Navbar from './navbar';

  function App() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className='Content'>
            <Routes>
              <Route exact path="/" element={<PersonalForm/>} />
              <Route path="/family-background" element={<FamilyBackground/>} />
              <Route path="/academic-background" element={<AcademicBackground/>}/>
              <Route path="/academic-history" element={<AcademicHistory/>}/>
            </Routes>
          </div>
        </div>
      </Router>
    );
  }

  export default App;
