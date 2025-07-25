import {useState,useEffect} from 'react'
import './index.css'
import formimage from '../assets/form.png'
import axios from 'axios'

const Form = () => {
    const url='http://localhost:2018/student/details'
    const [studentDatas,setStudentData]=useState([])
    const [detail,setDetail]=useState({
        name:'',
        email:'',  
        college:'',
        roll:'',
        course:''
    })

    async function details(e){
        e.preventDefault()
        console.log(detail)
        try {
            const res= await axios.post(url,detail)
            alert(`${res.data}`)
        } catch (error) {
            console.log(`${error}`)
        }
    }

     function fillValues(e){
        const {name,value}=e.target
        setDetail({...detail,[name]:value})
    }

  return (
    <div id='form-column' className='form-parent'>
        <h3 data-aos='fade-up' >Register As Student</h3>
        <div className='form-div'>
            <div className='form-image'>
                <img  data-aos='fade-up' src={formimage} alt="this is a image of formtaker" />
            </div>
            <form onSubmit={details} >
            <input type="text" data-aos='fade-up' placeholder='Name' onChange={fillValues} name='name' value={detail.name} />
            <input type="email" data-aos='fade-up' placeholder='Email' onChange={fillValues} name='email' value={detail.email} />
            <input type="text" data-aos='fade-up' placeholder='College' onChange={fillValues} name='college' value={detail.college} />
            <input type="text" data-aos='fade-up' placeholder='Roll No' onChange={fillValues} name='roll' value={detail.roll} />
            <input type="text" data-aos='fade-up' placeholder='Course Name' onChange={fillValues} name='course' value={detail.course} />
            <input type="submit" data-aos='fade-up' />
        </form>
        </div>
        
    </div>
  )
}

export default Form