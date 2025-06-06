import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployeeById, updateEmployeeById } from '../services/EmployeeService';
import  { useNavigate , useParams } from 'react-router-dom' ; 

const AddEmployeeComponent = () => {

  const[firstName , setfirstName] = useState("");
  const[lastName , setlastName] = useState("");
  const[email , setEmail] = useState(""); 
  const navigator = useNavigate()
  const [errors , Seterrors] = useState({
    firstName :'',
    lastName :'',
    email :''
  })
   
  const {id} = useParams()
  
    useEffect(() => {
       
      if(id){
       
        getEmployeeById(id).then((response) => 
           {
              
            setfirstName(response.data.firstName);
            setlastName(response.data.lastName);
            setEmail(response.data.email);

           }
      ).catch(error => {
        console.error(error)
      })

      }
      

    } , [id])

      

  function validForm() {
    
    let valid = true 
    const errorsCopy = {...errors}
    
    if(firstName.trim()){
      errorsCopy.firstName =''
    }else{
     valid = false;
     errorsCopy.firstName = "FirstName is required"
    }

     if(lastName.trim()){
      errorsCopy.lastName =''
    }else{
     valid = false;
     errorsCopy.lastName = "LastName is required"
    }

     if(email.trim()){
      errorsCopy.email =''
    }else{
     valid = false;
     errorsCopy.email = "Email is required"
    }
   
   Seterrors(errorsCopy)     
    return valid
  } 

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
  
  
  function pageTitile(){
    
  return id ?  <h2 className='text-center'>Update Employee</h2> :  <h2 className='text-center'>Add Employee</h2>
  
  }

  function saveOrUpdateEmployee (e){
    e.preventDefault()

    if(validForm()){
    const employee  = {firstName , lastName ,email}
    console.log(employee);

    if(id){
      
      updateEmployeeById(employee ,id).then(response => {
        console.log(response.data);
        navigator("/employees");
      }).catch(error => {
        console.error(error);
      })

    }else {
    createEmployee(employee).then( (response) => {
      console.log(response.data)
      navigator("/employees")

    })
  }
  }

  }

  return (
    <div className='container'>
      <br/>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          {pageTitile()}
          <div className='card-body'> 
            
            <form>
             
             <div className='form-group mb-2'>
              <label className='form-label'>FirstName</label>
               <input
                 type='text'
                 placeholder='Enter your FirstName'
                 name='firstName' 
                 value={firstName}  
                 className= {`form-control  ${errors.firstName ? 'is-invalid' :'' }`}
                 onChange={handleFormInput}   
                  />
                 {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div> } 
              </div>
              
              <div className='form-group mb-2'>
              <label className='form-label'>LastName</label>
               <input
                 type='text'
                 placeholder='Enter your LastName'
                 name ='lastName' 
                 value={lastName}  
                 className={`form-control  ${errors.lastName ? 'is-invalid' :'' }`}
                 onChange={handleFormInput}   
                  />
               {errors.lastName && <div className="invalid-feedback"> {errors.lastName} </div> } 
              </div>
              
              <div className='form-group mb-2'>
              <label className='form-label'>Email</label>
               <input
                 type='text'
                 placeholder='Enter your Email'
                 name='email' 
                 value={email}  
                 className={`form-control  ${errors.email ? 'is-invalid' : '' }`}
                 onChange={handleFormInput}   
                  />
                 {errors.email && <div className="invalid-feedback"> {errors.email}</div> }  
              </div>
               
               <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</button>

            </form>

          </div>

        </div>

      </div>
  
    </div>
  )
}

export default AddEmployeeComponent