import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/employees')
            .then(response => {
                setEmployees(response.data.data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="App">
            <h1>Employee Data</h1>
            <table>
                <thead>
                    <tr>
                        <th>Employee Number</th>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>Extension</th>
                        <th>Email</th>
                        <th>Office Code</th>
                        <th>Job Title</th>
                        <th>City</th>
                        <th>Phone</th>
                        <th>Reports To</th>
                        <th>Report To Last Name</th>
                        <th>Report To First Name</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(emp => (
                        <tr key={emp.employeeNumber}>
                            <td>{emp.employeeNumber}</td>
                            <td>{emp.lastName}</td>
                            <td>{emp.firstName}</td>
                            <td>{emp.extension}</td>
                            <td>{emp.email}</td>
                            <td>{emp.officeCode}</td>
                            <td>{emp.jobTitle}</td>
                            <td>{emp.city}</td>
                            <td>{emp.phone}</td>
                            <td>{emp.reportsTo}</td>
                            <td>{emp.reportToLastName}</td>
                            <td>{emp.reportToFirstName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
