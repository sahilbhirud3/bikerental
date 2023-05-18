import React from 'react'
import parking from '../assets/images/parking.jpg';
import evparking from '../assets/images/evparking.jpg';
import banner from '../assets/images/banner_img1.jpg';
const About = () => {

  return (
    <>
    <section className="section section-bg" id="call-to-action" style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="cta-content">
              <br />
              <br />
              <h2>Learn more <em>About Us</em></h2>
              <p>This Bike Rental Company is headquartered in Goa, India . We have gain faith by serving the best services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section" id="our-classes">
        <div class="container">
            <br/>
            <br/>
            <br/>
            <div class="row" id="tabs">
              <div class="col-lg-4">
                <ul>
                  <li><a href='#tabs-1'><i class="fa fa-soccer-ball-o"></i> Our Goals</a></li>
                  <li><a href='#tabs-2'><i class="fa fa-briefcase"></i> Our Work</a></li>
                 
                </ul>
              </div>
              <div class="col-lg-8">
                <section class='tabs-content'>
                  <article id='tabs-1'>
                    <img src={evparking} alt=""/>
                    <h4>Our Goals</h4>

                    <p>Establish additional rental locations in high-demand areas to increase accessibility and convenience for customers.</p>

                    <p>Collaborate with strategic partners to offer rental services in popular tourist destinations or motorcycle events.</p>

                    <p>Maintain a diverse fleet of motorcycles, including various models, sizes, and styles, to cater to the needs and preferences of a wide range of riders.</p>
                   
                    <p>Continuously update the fleet with the latest models, incorporating technological advancements and customer demands.</p>
                  </article>
                  <article id='tabs-2'>
                    <img src={parking} alt="" />
                    <h4>Our Work</h4>
                    <p>Performing routine maintenance tasks, such as checking tire pressure, fluid levels, lights, brakes, and overall mechanical integrity.</p>
                    <p>Coordinating pickup and drop-off logistics, ensuring motorcycles are ready for customers as per scheduled appointments</p>

                    <p>Ensuring compliance with local laws, regulations, and licensing requirements for motorcycle rentals.</p>
                  </article>
                
                </section>
              </div>
            </div>
        </div>
    </section>
    

    </>
  )
}

export default About