import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
// import {
//   getProfile,
//   updateProfile,
//   updateProfilePicture,
//   changePassword,
//   clearMessage,
// } from "../../features/profile/profileSlice";
import { updateUser } from "../../features/auth/authSlice";
import Header from "../Layouts/Header";
import axios from "axios";
import { handleError, handleSuccess } from "../../utils";

function Profile() {

  const { user, token } = useSelector((state) => state.auth || {});
  console.log("TOKEN:", token);
  const dispatch = useDispatch();

  const fileRef = useRef();


  const [name, setName] = useState(user?.name || '');
  // const [email, setEmail] = useState(user?.email || '');
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  console.log(user, "dsssssssdf")


  useEffect(() => {
    if (user) {
      setName(user.name);
    }
  }, [user]);

  // const handleProfileUpdate = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const res = await axios.put(
  //       'http://localhost:8081/auth/update-profile',
  //       { name },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     handleSuccess('Password changed successfully adfdf');
  //     // if (res.data.success) {
  //     dispatch(updateUser(res.data.data));
  //     console.log("i a,m here")
  //     handleSuccess("i am working");

  //     // }


  //   } catch (error) {
  //     handleError('Faild to update profile');
  //   }

  // };


  const handleProfileUpdate = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.put(
      "http://localhost:8081/auth/update-profile",
      { name },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (res.data.success) {
      

      dispatch(updateUser(res.data.data));
       handleSuccess(res.data.message);
    }
    

  } catch (error) {
    handleError(error.response?.data?.message || "Failed to update profile");
  }
};


  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("avatar", file);

    try {
      const res = await axios.put(
        'http://localhost:8081/auth/update-profile-pic',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            // "Content-Type ": "multipart/form-data",
          },

        }
      );
      console.log("LOGIN RESPONSE:", res.data)

      dispatch(updateUser(res.data.data));
      handleSuccess('Profile Picture updated successfully');
    } catch (error) {
      handleError('Image upload faild')
    }

  };




  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (!currentPassword || !newPassword) {
      toast.error("All password fields required");
      return;
    }
    try {
      await axios.put(
        "http://localhost:8081/auth/change-password",
        { currentPassword, newPassword },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      handleSuccess('Password changed successfully adfdf');
      setCurrentPassword("");
      setNewPassword("");
    } catch (error) {
      handleError(error.response?.data?.message || "Password change failed");

    }


  };




  //   const dispatch = useDispatch();
  //   const { user, message, error, loading } = useSelector(
  //     (state) => state.profile
  //   );

  //   console.log(user,"dfghjkhgfdsdfghjkjhgfdsdfghj")
  //   const [name, setName] = useState("");
  //   const [currentPassword, setCurrentPassword] = useState("");
  //   const [newPassword, setNewPassword] = useState("");

  //   const fileRef = useRef();


  //   useEffect(() => {
  //  dispatch(getProfile()) ;
  //   }, [dispatch]);



  //   useEffect(() => {
  //     if (user?.name) setName(user.name);
  //   }, [user]);


  //   useEffect(() => {
  //     if (message) toast.success(message);
  //     if (error) toast.error(error);

  //     if (message || error) {
  //       const timer = setTimeout(() => {
  //         dispatch(clearMessage());
  //       }, 1000);
  //       return () => clearTimeout(timer);
  //     }
  //   }, [message, error, dispatch]);


  //   const handleProfileUpdate = (e) => {
  //     e.preventDefault();
  //     dispatch(updateProfile({ name }));
  //   };

  //   const handleImageUpload =  (e) => {
  //     const file = e.target.files[0];
  //     if (!file) return;

  //     const formData = new FormData();
  //     formData.append("avatar", file);

  //     dispatch(updateProfilePicture(formData));
  //   };

  //  const user1 =  axios.get(`${API_URL}/auth/me`, {
  //          headers: {
  //            Authorization: `Bearer ${token}`,
  //          },
  // });

  //   const handleChangePassword = (e) => {
  //     e.preventDefault();

  //     if (!currentPassword || !newPassword) {
  //       toast.error("All password fields required");
  //       return;
  //     }

  //     dispatch(changePassword({ currentPassword, newPassword }));

  //     setCurrentPassword("");
  //     setNewPassword("");
  //   };

  //   if (loading) return <div className="loading">Loading...</div>;
  //   if (!user) return <div>No user data found</div>;


  return (
  <>
    <Header />

    <section className="profile-page">

      {/* Page Title */}
      <div className="profile-hero text-center">
        <h1>My Profile</h1>
        <p>Manage your account information and security settings</p>
      </div>

      <div className="profile-wrapper container">

        <div className="profile-card">

          <div className="profile-left">

            <div className="avatar-wrapper">
              <img
                src={
                  user?.avatar
                    ? `http://localhost:8081${user?.avatar}`
                    : "/avatar.png"
                }
                alt="avatar"
                className="profile-avatar"
                onClick={() => fileRef.current.click()}
              />

              <input
                type="file"
                hidden
                ref={fileRef}
                onChange={handleImageUpload}
              />
            </div>

            <h3>{user?.name}</h3>
            <p className="profile-email">{user?.email}</p>

            <span className="profile-badge">Active User</span>

          </div>

        

          <div className="profile-right">

            

            <form onSubmit={handleProfileUpdate} className="profile-form">

              <h4>Update Profile</h4>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter new name"
              />

              <button type="submit" className="profile-btn">
                Update Name
              </button>

            </form>

           

            <form onSubmit={handleChangePassword} className="profile-form">

              <h4>Change Password</h4>

              <input
                type="password"
                placeholder="Current Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />

              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />

              <button type="submit" className="profile-btn danger-btn">
                Change Password
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  </>
);



}

export default Profile;