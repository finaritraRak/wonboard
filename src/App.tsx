import Header from './Components/Header';
import Navbar from './Components/Navbar';
import './assets/css/oneui.min.css';
import './assets/css/themes/amethyst.min.css';
import './assets/css/themes/city.min.css';
import './assets/css/themes/flat.min.css';
import './assets/css/themes/modern.min.css';
import './assets/css/themes/smooth.min.css';




import Home from './Pages/Home';
import Login from './Auth/Login';
import Aregister from './Auth/aregister';
import Register from './Auth/Register';
import AdminLogin from './Admin/Components/AdminLogin';
import AdminRegister from './Admin/Components/AdminRegister';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound404 from './Components/NotFound404';
import Footer from './Components/Footer';




function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header/>
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />}></Route> 
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/aregister' element={<Aregister />}></Route>
            <Route path='/admin_login' element={<AdminLogin />}></Route>
            <Route path='/admin_register' element={<AdminRegister />}></Route>



            <Route path='*' element={<NotFound404 />}></Route>
          </Routes>
        </div>
        <Footer />
      </div >
    </BrowserRouter>
  );
}

export default App;
