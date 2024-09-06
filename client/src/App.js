import { useState } from 'react';
import './App.css';
// import AddressBook from './Pages/AddressBook/AddressBook';
import AllRoutes from './Pages/AllRoutes/AllRoutes';
import Navbar from './Pages/Navbar/Navbar';
import Sidebar from './Pages/Navbar/Sidebar';

function App() {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };

  return (
    <>

     <Navbar toggle={toggle}/>
     <br/>
     <br/>  <br/>  <br/>   <br/>
    <AllRoutes/>
     <Sidebar isopen={isopen} toggle={toggle} />
    </>
  );
}

export default App;
