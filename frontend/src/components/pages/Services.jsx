import React from 'react';
import ServiceIcon from "../../assets/img/icons/service6-icon1.svg";
import ServiceIcon2 from "../../assets/img/icons/service6-icon2.svg";
import ServiceIcon3 from "../../assets/img/icons/service6-icon3.svg";
import ServiceIcon4 from "../../assets/img/icons/service6-icon4.svg";
import ServiceIcon5 from "../../assets/img/icons/service6-icon5.svg";
import ServiceIcon6 from "../../assets/img/icons/span6.svg";

function Services() {
  return (
    <section className='service-sec'>
<div className='container'>
    <div className="row">
               <div className="col-lg-6 m-auto text-center">
                            <span className='benefit-span '>
              <img src="src/assets/img/icons/span6.svg" alt="" />
              OUR CLOUD SERVICES</span>
                  <div className="heading6 mt-4">
                     <h2 className="text-anime-style-3" > Cloud Hosting Services
                         Tailored for Your Success</h2>
                  </div>
               </div>
            </div>
    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center service-row1">


  <div className="col">
    <div className="card mb-4 rounded-3 shadow-sm p-3">
     
      <div className="card-body"> 
        <img src={ServiceIcon} alt="" className='mb-3' />
       <h4>High Speed Performance</h4>
       <p>Experience blazing-fast load times with our SSD-powered servers and optimized infrastructure.</p>
       
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card mb-4 rounded-3 shadow-sm p-3">
     
      <div className="card-body"> 
        <img src={ServiceIcon2} alt="" className='mb-3' />
       <h4>Seamless Scalability
</h4>
       <p>Easily adjust your resources as your business grows. With our flexible plans, down is just a few clicks away.</p>
       
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card mb-4 rounded-3 shadow-sm p-3">  
      <div className="card-body"> 
        <img src={ServiceIcon3} alt="" className='mb-3' />
       <h4>Unparalleled Uptime</h4>
       <p>Say goodbye to downtime with our 99.99% uptime guarantee, supported reliable multi-server infrastructure.</p>
       
      </div>
    </div>
  </div>

</div>

<div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
<div className="col">
  <div className='card mb-4 rounded-3 shadow-sm p-3'>
  <div className="card-body">
    <img src={ServiceIcon4} alt="" className='mb-3' />
    <h4>Robust Security</h4>
       <p> Protect your data with cutting-edge security features, including firewalls, encryption, vulnerability assessments.

</p>
  </div>
</div>
</div>
<div className="col">
  <div className='card mb-4 rounded-3 shadow-sm p-3'>
  <div className="card-body">
    <img src={ServiceIcon5} alt="" className='mb-3' />
    <h4>Easy-to-Use Control Panel
</h4>
       <p>Manage your hosting effortlessly with an intuitive dashboard designed for all skill levels from domain management.</p>
  </div>
</div>
</div>
<div className="col">
  <div className='card mb-4 rounded-3 shadow-sm p-3'>
  <div className="card-body">
    <img src={ServiceIcon} alt="" className='mb-3' />
    <h4>24/7 Expert Support</h4>
       <p>Our dedicated support team is always available to assist you, ensuring your hosting experience remains.</p>
  </div>
</div>
</div>

</div>

</div>
</section>
  )
}

export default Services;
