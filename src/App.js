import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';
import Register from './pages/Auth/Register';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Auth/Login';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Routes/Private';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}  />
      <Route path='/dashboard' element={<PrivateRoute/>} />
      <Route path='/registro' element={<Register/>}  />
      <Route path='' element={<Dashboard/>}  />
      <Route path='/login' element={<Login/>}  />
      <Route path='/sobre' element={<About/>}  />
      <Route path='/contacto' element={<Contact/>}  />
      <Route path='/privacidad' element={<Policy/>}  />
      <Route path='*' element={<Pagenotfound/>}  />
    </Routes>
    </>
  );
}

export default App;
