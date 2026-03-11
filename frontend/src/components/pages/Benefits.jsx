import React from 'react';

function Benefits() {
  return (

    <section className='benifit-sec'>
      <div className="container  col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">

          <div className="col-10 col-sm-8 col-lg-6">
            <img src="src/assets/img/images/choose6-image.png"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy" />
          </div>

          <div className='container col-lg-6 mt-5'>
            <span className='benefit-span'>
              <img src="src/assets/img/icons/span6.svg" alt="" />
              WHY CHOOSE US</span>
            <h1>Benefits of Choosing Us</h1>
            <p className="fs-5 ">
              Quickly and easily get started with Bootstrap's compiled, production-ready files with this barebones example featuring some basic HTML and helpful links. Download all our examples to get started.
            </p>

            <div className="row">

              <div className="col-md-6">

                <ul className="list-unstyled ps-0">
                  <li>


                    <span className='check'>                       <i className="bi bi-check2"></i>
                      99.99% Uptime Guarantee</span>
                  </li>
                  <li>
                    <span className='check'>                   <i className="bi bi-check2"></i>
                      24/7 Dedicated Support
                    </span>        </li>
                  <li>
                    <span className='check'>                  <i className="bi bi-check2"></i>
                      Easy Management Tools
                    </span>
                  </li>
                  <li>
                    <span className='check'>                   <i className="bi bi-check2"></i>
                      Proven Customer Satisfaction
                    </span>
                  </li>
                </ul>
              </div>


              <div className="col-md-6">

                <ul className="list-unstyled ps-0">
                  <li>
                    <span className='check'>                  <i className="bi bi-check2"></i>
                      Scalable Solutions
                    </span>
                  </li>
                  <li>
                    <span className='check'>                   <i className="bi bi-check2"></i>
                      Eco-Friendly Hosting
                    </span>
                  </li>
                  <li>
                    <span className='check'>                  <i className="bi bi-check2"></i>
                      Transparent Pricing
                    </span>        </li>
                  <li>
                    <span className='check'>                  <i className="bi bi-check2"></i>
                      Easy Management Tools
                    </span>
                  </li>

                </ul>
              </div>
            </div>

            <div>
              <button className="home-btn1 btn me-2 btn-lg mt-3  d-lg-block" type="button">Lets Started Now
              <span className="arrow1"><i className="fa-solid fa-arrow-right"></i></span>
              </button>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}

export default Benefits;
