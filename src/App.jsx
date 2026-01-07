
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import Projects from './pages/Projects' 
import Agency from './pages/Agency';
import { useEffect } from 'react';

function App() { 
  const loc = useLocation();  //scroll starts from top.
 
  useEffect(() => {
    window.scrollTo(0,0);
  }, [loc.pathname]);

    
  return (
    <div >    
      <Routes>
        <Route path='/' element= {<Home/>}> </Route>
        <Route path='/projects' element= {<Projects/>}> </Route>
        <Route path='/agency' element= {<Agency/>}> </Route>

      </Routes> 
    </div>
  )
}

export default App