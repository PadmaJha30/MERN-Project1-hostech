import App from '../../App.jsx';
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../../utils';
import {Link} from 'react-router-dom';
import { loginSuccess } from '../../features/auth/authSlice';
// import { ToastContainer } from 'react-toastify';
// import { loginApi } from '../../api/Api';
import Header from '../Layouts/Header';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword]= useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e)=>{
    e.preventDefault();

    try {
      const res = await axios.post(
        'http://localhost:8081/auth/login',
        {email, password}
      );


      dispatch(loginSuccess(res.data));
      handleSuccess("Login successful");

     setTimeout(() => {
  navigate('/');
}, 1200);
    } catch (error) {
    handleError(error.response?.data?.message || "Login failed");
    }
  };

  // const [loginInfo, setLoginInfo]=useState({
  //   email:'',
  //   password:''
  // })

  // const handleChange = (e)=>{
  //   const {name, value}= e.target;
  //   console.log(name,value);
  //   const copyLoginInfo={...loginInfo};
  //   copyLoginInfo[name]=value;
  //   setLoginInfo(copyLoginInfo);
  // }
  
  // const navigate = useNavigate();

  // useEffect(()=>{
  //   const token = localStorage.getItem('token');
  //   if(token){
  //     navigate('/')
  //   }
  // },[]);

  // const handleLogin=async(e)=>{
  //   e.preventDefault();
  //   const {email, password}=loginInfo;
  //   if(!email||!password){
  //     return handleError('email and password are required')

  //   }
  //   try {
  //     const response = await loginApi(loginInfo);
  //      console.log("LOGIN RESPONSE:", response.data);

  //     const {success, message, error, token, name}= response.data;
  //     if(success){
  //       handleSuccess(message);
  //       localStorage.setItem('token',response.data.token);
  //       localStorage.setItem('loggedInUser',name);
  //       setTimeout(()=>{
  //         navigate('/');
  //       },1000)
  //     }else if(error){
  //       const details = error?.detail[0].message;
  //       handleError(details);
  //     }else if(!success){
  //       handleError(message);
  //     }
  //     console.log(response);

  //   } catch (error) {
  //     handleError(error.response?.data?.message || 'Login failed')
  //   }
  // }
  // console.log('Logininfo', loginInfo);


  // return (
  //   <>
  //   <Header/>
  //   <div className='Login-sec '>
      
   
  // <div className="container Loginbox">
  //   <h1>Login</h1>
  //   <form onSubmit={handleLogin}>
  //   <div>
  //     <label htmlFor="email">Email</label>
  //     <input type="email"
  //     onChange={(e) => setEmail(e.target.value)}
  //     name='email'
  //     placeholder='name@example.com'
  //     value={email}
  //     />
  //   </div>

  //   <div>
  //     <label htmlFor="password">Password</label>
  //     <input
  //       onChange={(e)=> setPassword(e.target.value)}
  //       type='password'
  //       name='password'
  //       placeholder='**********'
      
  //       // value={loginInfo.password}
  //       value={password}
  //     />
  //   </div>

  //   <button type='submit'>Login</button>
  //   <span>Don't have an account ?</span>
  //   <Link to='/signup'>Signup</Link>
  //   </form>
  //   <ToastContainer/>
  // </div>
  //  </div>
  //  </>
  // )


  return (
  <>
    <Header />

    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          
          <div className="form-group">
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="Email"
              value={email}
              className="auth-input"
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              placeholder="Password"
              value={password}
              className="auth-input"
            />
          </div>

          <button type="submit" className="auth-btn">
            Login
          </button>

          <div className="auth-footer">
            <span>Don't have an account? </span>
            <Link to="/signup">Signup</Link>
          </div>

        </form>

      </div>
    </div>
  </>
);
}

export default Login;
