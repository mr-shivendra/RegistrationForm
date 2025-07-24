
import Navbar from './navbar'
import Intro from './intro'
import About from './about'
import Form from './form'
import './app.css'



const App = () => {

  return (
    <div className='app-parent'>
      <Navbar/>
      <Intro/>
      <About/>
      <Form/>
    </div>
  )
}

export default App