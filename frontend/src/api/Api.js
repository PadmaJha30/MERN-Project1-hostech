// import axios from 'axios';

// const api = axios.create({
//     baseURL:'http://localhost:8081',
//     headers:{
//         'Content-Type':'application/json'
//     }
// });


// //Attache token automatically
// api.interceptors.request.use((req)=>{
//     const token = localStorage.getItem('token');
//     if(token){
//         req.headers.Authorization = token;
//     }
//     return req;
// });

// export const loginApi =(data)=>{
//     return api.post('auth/login',data);
// }

// export const signupApi =(data) =>{
//     return api.post('auth/signup',data);
// }

// // export const getProfileApi =()=>
// //     api.get('/auth/me',{
// //         headers:{
// //             Authorization:localStorage.getItem('token')
// //         }
// //     });

// // export const updateProfileApi = (data) =>
// //     api.put('/auth/update-profile',data,{
// //         headers:{
// //             Authorization:localStorage.getItem('token')
// //         }
// //     })


// export const getProfileApi = () => api.get("/auth/me");

// export const updateProfileApi = (data) =>
//   api.post("/auth/update-profile", data);

// export const updateProfilePicApi = (data) =>
//   api.put("/auth/update-profile-pic", data, {
//     headers: { "Content-Type": "multipart/form-data" },
//   });



import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8081",
});

api.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});


export const loginApi =(data)=>{
    return api.post('auth/login',data);
}

export const signupApi =(data) =>{
    return api.post('auth/signup',data);
}

export const getProfileApi = () => api.get("/auth/me");

export const updateProfileApi = (data) =>
  api.put("/auth/update-profile", data);

export const updateProfilePicApi = (data) =>
  api.put("/auth/update-profile-pic", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  export const changePassword = (data) =>
  api.put("/auth/change-password", data);

