import React, { useState ,useEffect} from 'react';
import '../../App.css';
import { Link, useNavigate,useLocation } from 'react-router-dom';

function Header() {

  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const location = useLocation();

  const hideButton =
  location.pathname === "/login" ||
  location.pathname === "/signup";

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  }

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

        window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <header className={`header ${sticky ? "header-sticky" : "header-transperent"}`}>

    <nav className="navbar navbar-expand-lg   ">
      <div className="container ">
        <Link className="navbar-brand" to="/"><img src="src/assets/img/logo/header-logo6.png" alt="" /> </Link>

        <button className="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end bg-primary fw-bold text-white"  id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <div className="offcanvas-title text-white" id="offcanvasNavbarLabel">
              <img src="src/assets/img/logo/header-logo1.png" alt="" />
            </div>
            <button type="button" className="btn-close btn-close-header  " data-bs-dismiss="offcanvas" aria-label="Close"> </button>
          </div>

          <div className="offcanvas-body  ">
            <ul className="me-2 navbar-nav justify-content-end flex-grow-1 pe-3 ms-4">
              <li className="nav-item ">
                <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about-us">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/benefits">Benefits</Link>
              </li>

              <div>
                {token &&
                  <img className="user-prof1" src="src/assets/img/icons/user-profile-icon1.png" alt="" onClick={(e) => { e.preventDefault(); navigate('/profile') }} />
                  
                }
              </div>

              <div>

                {!token && !hideButton && <button className=" home-btn1 btn me-2 d-sm-none d-none d-lg-block btn-lg mt-3  d-lg-block" type="button" onClick={(e) => { e.preventDefault(); navigate('/login') }} >Get Started Now
                  <span className="arrow1"><i className="fa-solid fa-arrow-right"></i></span>
                </button>
                }

                {token &&
                  <button className="home-btn1 btn me-2 d-sm-block  d-lg-block btn-lg mt-3  d-lg-block" onClick={(e) => logout()}>Logout
                                    <span className="arrow1"><i className="fa-solid fa-arrow-right"></i></span>

                  </button>}
              </div>
            </ul>

            <div className='d-lg-none d-md-block d-sm-block mt-4 ms-4'>
              <h4>Contact Us</h4>
              <ul className="me-2 navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item ">
                  <a className="nav-link text-white" href="#">+1123 456 4233</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#"></a>421 Allen, Mexico 4233
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">Hosticconsult@com</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">+1123 456 4233</a>
                </li>

              </ul>

              <h4 className='mt-4'>Follow us</h4>
              <div className=' header-social-icon text-start mt-3'>
                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </header>
</>
  );
}

export default Header;
