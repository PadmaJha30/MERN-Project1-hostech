import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Layouts/Header';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Benefits from './components/pages/Benefits';
import Footer from './components/Layouts/Footer';
import Intro from './components/pages/Intro';
import CTA from './components/pages/CTA';
import Signup from './components/pages/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import AboutUs from './components/pages/AboutUs';
import Profile from './components/pages/Profile';
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import axios from 'axios';
function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);
 
  useEffect(()=>{
    axios.interceptors.request.use((config)=>{
      const token = localStorage.getItem('token');

      if(token){
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => Promise.reject(error)

  );
  },[]);


  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
    return children;
  };



  //   useEffect(() => {
  //   AOS.init({
  //     duration: 1200,
  //     easing: "ease-in-out",
  //     once: true
  //   });
  // }, []);

  return (
    <>
      {/* <ToastContainer  /> */}

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover={false}
      />

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<>

            <Header />
            <Home />
            <Intro />
            <Services />
            <Benefits />
            <CTA />
            <Footer />
          </>
          }
          />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path="/profile"
            element={
              <ProtectedRoute>

                <Profile />
              </ProtectedRoute>

            } />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/services' element={
            <>
              <Header />
              <Services />
              <Footer />
            </>
          } />
          <Route path='/benefits' element={
            <>
              <Header />
              <Benefits />
              <Footer />
            </>
          } />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
