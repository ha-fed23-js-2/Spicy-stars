import { useState } from 'react'

import './App.css'
import Menu from './data/lista'
import Form from './components/Form'
import MyPicture from './components/imageFront'


function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
	<div> 
	<MyPicture/>
	 <Menu /> 
	</div>
   <div className='foodMenu'> 
  
   </div>
   <div className='form-div'> 
   <Form/>
   </div>
    </>
  )
}

export default App
