
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import Projects from './pages/Projects' 
import Agence from './pages/Agence';

function App() { 

  return (
    <div>  

      <Routes>
        <Route path='/home' element= {<Home/>}> </Route>
        <Route path='/projects' element= {<Projects/>}> </Route>
        <Route path='/agance' element= {<Agence/>}> </Route>

      </Routes>


    </div>
  )
}

export default App