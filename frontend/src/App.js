import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Addemployee from './components/Addemployee';
import Employee from './components/Employee';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Loginuser from './components/Loginuser';
import View from './components/View';
import Viewemployee from './components/Viewemployee';
import Updateemployee from './components/Updateemployee';
import PrivateRoutes from './components/PrivateRoutes';

function App() {
  return (
    <>
     <Routes>
     <Route path={'/'} element={<Loginuser />} />
     <Route path={'/login'} element={<Login />} />
     <Route path={'/signup'} element={<Signup />} />
     <Route path={'/addemployee'} element={<Main child={<Addemployee />} />} />
     <Route path={'/employee'} element={<Main child={<Employee />} />} />
     <Route path={'/main'} element={<Main child={<Main />} />} />
     <Route path={'/navbar'} element={<Main child={<Navbar />} />} />
     <Route path={'/view/:id'} element={<Main child={<View />} />} />
     <Route path={'/viewemployee'} element={<Main child={<Viewemployee />} />} />
     <Route path={'/updateemployee/:id'} element={<Main child={<Updateemployee />} />} />
    
     


     </Routes>
    </>
  );
}

export default App;
