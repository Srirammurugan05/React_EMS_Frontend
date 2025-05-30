import React from 'react'
import { Link } from 'react-router-dom'
function HeaderComponent() {
  return (
    <div>
     <header>
       <nav className="navbar navbar-dark bg-dark">
        <div className='d-flex'>
        <a className="navbar-brand " href='/'>home</a>
        <a className="navbar-brand" href="http://localhost:8080/api/employees">Employee Management System</a> 
        <Link className="navbar-brand" to="http://ww.google.com">Logout</Link>
        </div>
        </nav>
     </header>
    </div>
  )
}

export default HeaderComponent