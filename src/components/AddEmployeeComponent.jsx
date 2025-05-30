import React, { useState } from 'react'
import { createEmployee } from '../services/EmployeeService';
import  { useNavigate } from 'react-router-dom' ; 

const AddEmployeeComponent = () => {

  const[firstName , setfirstName] = useState("");
  const[lastName , setlastName] = useState("");
  const[email , setEmail] = useState(""); 
  const navigator = useNavigate()

  function handleFormInput(e){
   const {name , value} = e.target 
    
   if(name === 'firstName'){
    setfirstName(value)
   }
  else if(name === 'lastName'){
    setlastName(value)
  }
  else if (name === 'email'){
    setEmail(value) 
  } 


  }
  

  function saveEmployee (e){
    e.preventDefault()
    const employee  = {firstName , lastName ,email}
    console.log(employee);
    
    createEmployee(employee).then( (response) => {
      console.log(response.data)
      navigator("/employees")

    })

  }


  return (
    <div className='container'>
      <br/>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          <h2 className='text-center'> Add Employee</h2>
          <div className='card-body'> 
            
            <form>
             
             <div className='form-group mb-2'>
              <label className='form-label'>FirstName</label>
               <input
                 type='text'
                 placeholder='Enter your FirstName'
                 name='firstName' 
                 value={firstName}  
                 className='form-control'
                 onChange={handleFormInput}   
                  />
               
              </div>
              
              <div className='form-group mb-2'>
              <label className='form-label'>LastName</label>
               <input
                 type='text'
                 placeholder='Enter your LastName'
                 name ='lastName' 
                 value={lastName}  
                 className='form-control'
                 onChange={handleFormInput}   
                  />
               
              </div>
              
              <div className='form-group mb-2'>
              <label className='form-label'>Email</label>
               <input
                 type='text'
                 placeholder='Enter your Email'
                 name='email' 
                 value={email}  
                 className='form-control'
                 onChange={handleFormInput}   
                  />
                  
              </div>
               
               <button className='btn btn-success' onClick={saveEmployee}>Submit</button>

            </form>

          </div>

        </div>

      </div>
  
    </div>
  )
}

export default AddEmployeeComponent