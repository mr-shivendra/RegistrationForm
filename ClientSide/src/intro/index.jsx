import {useEffect} from 'react'
import './index.css'
import developer from '../assets/developer.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Intro = () => {

    useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div id='intro' className='intro-parent'>
        <div className="intro-division">
            <h3>Welecome to the <span>Form</span> House</h3>
            <p>The main goal is to provide a smooth, secure, and efficient way for new users to join a system, while ensuring their details are correctly captured and safely managed</p>
            <button> <a href="#form-column">Registration</a></button>
        </div>
        <div className="intro-division">
            <img  src={developer}  data-aos='fade-up'  alt="it is a main hero foto" />
        </div>
    </div>
  )
}

export default Intro