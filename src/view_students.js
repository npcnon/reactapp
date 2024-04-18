import React from 'react';

function SimpleTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Doe</td>
          <td>30</td>
          <td>USA</td>
        </tr>
        <tr>
          <td>Jane Smith</td>
          <td>25</td>
          <td>Canada</td>
        </tr>
        <tr>
          <td>Michael Johnson</td>
          <td>35</td>
          <td>UK</td>
        </tr>
      </tbody>
    </table>
  );
}

export default SimpleTable;
