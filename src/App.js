import Navbar from './Components/Navabar';
import AllUser from './Components/AllUser';
import Home from './Components/Home';
import AddUser  from './Components/AddUser';
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import NotFound from './Components/NotFound';
import EditUser from './Components/EditUser';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route  exact path ="/" element={ <Home/> }/>
        <Route  exact path ="/all" element={ <AllUser/> }/>
        <Route  exact path ="/add" element={ <AddUser/> }/>
        <Route  exact path ="/edit/:id" element={ <EditUser/> }/>
        <Route  path ="*" element = {<NotFound/>}/>
      </Routes>
     
    </BrowserRouter>
      
    
     
  );
}

export default App;
