import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
// import {signupApi} from '../../api/Api.js';
import { handleError, handleSuccess} from '../../utils.js'; 
import Header from '../Layouts/Header.jsx';
import axios from 'axios';
import { useDispatch } from 'react-redux';

function Signup() {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword]= useState('');

const dispatch = useDispatch();
const navigate = useNavigate();

const handleSignup = async(e)=>{
    e.preventDefault();

    try {
        const res = await axios.post(
            'http://localhost:8081/auth/signup',
            {name, email, password}
        );

          handleSuccess("Signup successful");
        navigate('/login');
    } catch (error) {
          handleError(error.response?.data?.message || 'signup failed');
    }
}

    // const [signupInfo, setSignupInfo]=useState({
    //     name:'',
    //     email:'',
    //     password:''
    // })
    
    // // handlechange logic
    // const handleChange =(e)=>{
    //     const {name, value}=e.target;
    //     console.log(name, value);
    //     const copySignupInfo={...signupInfo};
    //     copySignupInfo[name]=value;
    //     setSignupInfo(copySignupInfo);
    // }
    // const navigate = useNavigate();

    // // handle Signup logic
    // const handleSignup = async(e)=>{
    //     e.preventDefault();
    //     const {name, email, password}= signupInfo;
    //     if(!name  || !email || !password){
    //         return handleError('name, email, and password are required')
    //     }
    //         try {
    //             const response = await signupApi(signupInfo);
    //             console.log('Response:', response);
    //             const {success,message,error}= response.data;
    //             if(success){
    //                 handleSuccess(message);
    //                 setTimeout(()=>{
    //                     navigate('/login')
    //                 },1000);

    //             }else if(error){
    //                 const details = error?.details[0].message;
    //                 handleError(details);
    //             }
    //             else if(!success){
    //                  handleError(message);
    //             }
    //             console.log(response);
    //         } catch (error) {
    //             handleError(error.response.data?.message || 'signup failed');
    //         }  
    //    };
    //    console.log('SignupInfo', signupInfo)
  // return (
  //   <>
  //    <Header/>
  //   <div className='container signup-con Loginbox'>
       
  //      <h1>Signup</h1>
  //      <form onSubmit={handleSignup}>
  //       <div>
  //           <label htmlFor="name">Name</label>
  //           <input
  //            onChange={(e) => setName(e.target.value)}
  //            type="text" name='name' 
  //            autoFocus placeholder='Enter your name' 
  //            value={name}/>
  //            {/* value={signupInfo.name}/> */}
  //       </div>
  //       <div>
  //           <label htmlFor="email">Email</label>
  //           <input type="email"
  //           onChange={(e)=> setEmail(e.target.value)}
  //           name='email'
  //           placeholder='name@example.com'
  //           value={email}

  //           />
  //       </div>
  //       <div>
  //         <label htmlFor="password">password</label>
  //         <input type="password"
  //         onChange={(e)=> setPassword(e.target.value)}
  //          name='password'
  //          placeholder='*********'
  //          value={password}
  //         />
  //       </div>
  //       <button type='submit'>Signup</button>
  //       <span>Already have an account ?</span>
  //       <Link to='/login'>Login</Link>
  //      </form>
  //      <ToastContainer/>
  //   </div>
  //   </>
  // )




  return (
  <>
    <Header />

    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>Signup</h2>

        <form onSubmit={handleSignup}>

          <div className="form-group">
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              name="name"
              placeholder="Full Name"
              value={name}
              className="auth-input"
            />
          </div>

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
            Signup
          </button>

          <div className="auth-footer">
            <span>Already have an account? </span>
            <Link to="/login">Login</Link>
          </div>

        </form>

      </div>
    </div>
  </>
);
}

export default Signup;

