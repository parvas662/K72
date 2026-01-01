
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import Projects from './pages/Projects' 
import Agency from './pages/Agency';

function App() { 

  return (
    <div>   
      <Routes>
        <Route path='/' element= {<Home/>}> </Route>
        <Route path='/projects' element= {<Projects/>}> </Route>
        <Route path='/agency' element= {<Agency/>}> </Route>

      </Routes> 
    </div>
  )
}

export default App