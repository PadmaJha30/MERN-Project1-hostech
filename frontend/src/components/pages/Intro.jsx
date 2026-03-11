import React from 'react'

function Intro() {
  return (
    <section className=''>


      <div className="container  col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">


          <div className="col-lg-7">
                        <span className='benefit-span'>
              <img src="src/assets/img/icons/span6.svg" alt="" />
              INTRODUCTION TO CLOUD HOSTING</span>
            <h1 className="intro-h1 mt-3">
              What Makes Cloud Hosting <br />
              the Best Choice For You?
            </h1>
            <p className="intro-p">
              Cloud hosting offers unmatched flexibility scalability, reliability for businesses of all sizes. With resources distributed across multiple servers, downtime becomes of the past. Empower your business with high-performance hosting integration, and robust security features, ensuring uninterrupted growth.      </p>
            <p className="lead intro-p">Cloud hosting is the cornerstone modern digital infrastructure, offering unparalleled reliability, flexibility, and performance. Unlike traditional hosting, it utilizes a network servers ensure your website remains online and fast.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="home-btn1 btn btn-lg px-4 me-md-2">
                Get Started Now
                 <span className="arrow1"><i className="fa-solid fa-arrow-right"></i></span>
              </button>

            </div>
          </div>

          <div className="col-10 col-sm-8 col-lg-5">
            <img src="src/assets/img/images/about6-image.png"
              className="d-block mx-lg-auto img-fluid hero-float"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy" />
          </div>


        </div>
      </div>
    </section>

  )
}

export default Intro
