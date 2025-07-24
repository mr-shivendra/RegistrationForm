import {useEffect} from 'react'
import './index.css'
const Navbar = () => {
  return (
    <div className='nav-parent'>
        <div className="nav-logo">
            <h2>Student Form</h2>
        </div>
        <div className="nav-buttons">
          <a href="#intro"><h4>Home</h4></a>
            <a href="#form-column"><h4>Form</h4></a>
            <a href="#about"><h4>About</h4></a>
            <a href=""><h4>Blog</h4></a>
        </div>
    </div>
  )
}

export default Navbar