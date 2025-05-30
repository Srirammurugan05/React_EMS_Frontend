import React, { useEffect, useState } from 'react'
import { listEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {
    
   const navigator = useNavigate();
   
   const [employees , setEmployees] = useState([]);
      useEffect(() => {
      listEmployees().then( (response) => {
        setEmployees(response.data)
      }
    ).catch((error) => {
       console.error(error); 
    }) 
   } , [])  

   function addEmployee(){
       navigator("/add-employee");
   }

  return (
    <div className='container mt-4'>
         
         
        <h2 className='text-center mb-4'>ListEmployeeComponent</h2>
        <button className='btn btn-primary mb-3' onClick={addEmployee}> Add Employee</button>
        <table className="table table-striped table-bordered">
         <thead className='table-dark'>
            <tr>
          <th>id</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Email</th>
          </tr>  
         </thead>
         <tbody>
            {
            employees.map(employee => <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.email}</td>
            </tr>)
            
            }
         </tbody>

        </table>

        </div>
  )
}

export default ListEmployeeComponent