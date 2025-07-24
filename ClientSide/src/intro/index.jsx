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
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, consequatur assumenda. Voluptates dolor blanditiis excepturi exercitationem quo ad nesciunt quidem, laudantium voluptatibus porro praesentium?</p>
            <button> <a href="#form-column">Registration</a></button>
        </div>
        <div className="intro-division">
            <img  src={developer}  data-aos='fade-up'  alt="it is a main hero foto" />
        </div>
    </div>
  )
}

export default Intro