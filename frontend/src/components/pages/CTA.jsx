import React from 'react'

function CTA() {
  return (
   <section className='cta-section'>


      <div className="container  col-xxl-8 ">
        <div className="row align-items-center ">

            <div className="col-lg-7">
            <h2 className="display-5 text-body-emphasis lh-1 mb-3 intro-h1 mt-4">
              Elevate Your Online Presence with Scalable Cloud Hosting
            </h2>
            <p className="lead intro-p">
        Don’t let outdated hosting hold you back. Join the countless businesses that trust us to deliver exceptional hosting solutions. </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="home-btn1 btn btn-lg px-4 me-md-2">
                Get Started Now

<span className="arrow1"><i className="fa-solid fa-arrow-right"></i></span>
              </button>

            </div>
          </div>


             <div className=" cta-image col-10 col-sm-8 col-lg-5 justify-content-end">
            <img src="src/assets/img/images/cta6-image.png"
              className="d-block mx-lg-auto img-fluid"
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

export default CTA;
