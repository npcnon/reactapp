import React, { useState, useEffect } from 'react';

const StudentInfo = ({ students, stdntcrs }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (students) {
      const filteredStudents = students.filter(student => {
        const fullName = `${student.f_name} ${student.m_name} ${student.l_name}`;
        return (
          [student.f_name, student.m_name, student.l_name, student.student_id, fullName]
            .some(field => field && field.toLowerCase().includes(searchTerm.toLowerCase()))
        );
      });
      setSearchResults(filteredStudents);
    }
  }, [searchTerm, students]);
  
  
  return (
    <div className="container">
      <h2>Student Information</h2>
      <div className="form-group">
        <input 
          type="text" 
          placeholder="Search by name or ID" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Name</th>
                <th>Course</th>
              </tr>
            </thead>
            <tbody>
              {searchResults.map((student, index) => (
                <tr key={index}>
                  <td>{student.student_id}</td>
                  <td>{`${student.f_name} ${student.m_name} ${student.l_name}`}</td>
                  <td>{stdntcrs && stdntcrs.find(item => item.stdnt_id === student.student_id)?.course}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default StudentInfo;
