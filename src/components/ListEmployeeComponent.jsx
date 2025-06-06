import React, { useEffect, useState } from 'react'
import { deleteEmployeeById, listEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {
    
   const navigator = useNavigate();
   
   const [employees , setEmployees] = useState([]);
      
   useEffect(() => {
       getAllEmployees();
   } , [])  


   function getAllEmployees(){
    listEmployees().then( (response) => {
        setEmployees(response.data)
      }
    ).catch((error) => {
       console.error(error); 
    })
   }

   function addEmployee(){
       navigator("/add-employee");
   }

   function updateEmployee(id){
       navigator(`/edit-employee/${id}`);
   }

   function removeEmployee(id){
    console.log(id);

     deleteEmployeeById(id).then(response=>{
        getAllEmployees();
    } ).catch(error=> {
      console.error(error);
    })
     
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
          <th>Actions</th>
          </tr>  
         </thead>
         <tbody>
            {
            employees.map(employee => <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.email}</td>
                  <td>
                    <button className='btn btn-info ' onClick={() =>updateEmployee(employee.id)}  >Update</button>
                    <button className='btn btn-danger' onClick={() =>removeEmployee(employee.id)}  >Delete</button> 
                  </td>
            </tr>)
            
            }
         </tbody>

        </table>

        </div>
  )
}

export default ListEmployeeComponent