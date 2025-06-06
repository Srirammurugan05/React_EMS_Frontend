import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import { FooterComponent } from './components/FooterComponent'
import {BrowserRouter ,Routes , Route , Link} from 'react-router-dom'
import AddEmployeeComponent from './components/AddEmployeeComponent'

function App() {
  return (
    <BrowserRouter>
    <div className="d-flex flex-column vh-100">
    <HeaderComponent/>
    <div className="flex-grow-1 overflow-auto px-4 py-3 bg-light">
        <Routes>
      <Route path='/' element = { <ListEmployeeComponent/>}></Route>
      <Route path='/employees' element = { <ListEmployeeComponent/>}></Route>
      <Route path='/add-employee' element  = { <AddEmployeeComponent/>}></Route> 
      <Route path='/edit-employee/:id' element  = { <AddEmployeeComponent/>}></Route> 
    </Routes>
    
   </div>
   <FooterComponent/>
   </div>
   </BrowserRouter>
  )
}

export default App
