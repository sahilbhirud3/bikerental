import React from 'react'
import image from '../assets/images/bike-bg.jpg'
import jupiter from '../assets/images/jupiter.webp'
import dio from '../assets/images/dio.webp'
import pleasure from '../assets/images/pleasure.webp'
import sp from '../assets/images/sp.webp'
import splendor from '../assets/images/splendor.webp'
import duke from '../assets/images/duke.webp'
const Bikes = () => {
  return (
    <>
    <section className="section section-bg" id="call-to-action" style={{ backgroundImage: `url(${image})` }} >
        <div className="container" >

       
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="cta-content">
                        <br/>
                        <br/>
                        <h2>Our <em>Fleet</em></h2>
                        <p>Choose your bike from our fleet & Enjoy the ride...</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section" id="trainers">
        <div class="container">
            <br/>
            <br/>
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="trainer-item">
                        <div class="image-thumb">
                            <img src={jupiter} alt=""/>
                        </div>
                        <div class="down-content">
                            <span>from <sup>₹</sup>350 per weekend</span>
                            <h4>TVS Jupiter</h4>
                            <p>
                                <i class="fa fa-user" title="passegengers"></i> 2 &nbsp;&nbsp;&nbsp;
                                
                                <i class="fa fa-cog" title="transmission"></i> A
                            </p>
                            <ul class="social-icons">
                                <li><a href="#">+ Book Now</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4">
                    <div class="trainer-item">
                        <div class="image-thumb">
                            <img src={dio} alt=""/>
                        </div>
                        <div class="down-content">
                            <span>from <sup>₹</sup>370 per weekend</span>
                            <h4>Honda Dio</h4>
                            <p>
                                <i class="fa fa-user" title="passegengers"></i> 2 &nbsp;&nbsp;&nbsp;
                              
                                <i class="fa fa-cog" title="transmission"></i> A
                            </p>
                            <ul class="social-icons">
                                <li><a href="#">+ Book Now</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4">
                    <div class="trainer-item">
                        <div class="image-thumb">
                            <img src={pleasure} alt=""/>
                        </div>
                        <div class="down-content">
                            <span>from <sup>₹</sup>400 per weekend</span>
                            <h4>Hero Pleasure</h4>
                            <p>
                                <i class="fa fa-user" title="passegengers"></i> 2 &nbsp;&nbsp;&nbsp;
                              
                                <i class="fa fa-cog" title="transmission"></i> A
                            </p>
                            <ul class="social-icons">
                                <li><a href="#">+ Book Now</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-4">
                    <div class="trainer-item">
                        <div class="image-thumb">
                            <img src={sp} alt=""/>
                        </div>
                        <div class="down-content">
                            <span>from <sup>₹</sup>420 per weekend</span>
                            <h4>Honda SP 125</h4>
                            <p>
                                <i class="fa fa-user" title="passegengers"></i> 2&nbsp;&nbsp;&nbsp;
                               
                                <i class="fa fa-cog" title="transmission"></i> M
                            </p>
                            <ul class="social-icons">
                                <li><a href="#">+ Book Now</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4">
                    <div class="trainer-item">
                        <div class="image-thumb">
                            <img src={splendor} alt=""/>
                        </div>
                        <div class="down-content">
                            <span>from <sup>₹</sup>410 per weekend</span>
                            <h4>Hero Splendor</h4>
                            <p>
                                <i class="fa fa-user" title="passegengers"></i> 2 &nbsp;&nbsp;&nbsp;
                       
                                <i class="fa fa-cog" title="transmission"></i> M
                            </p>
                            <ul class="social-icons">
                                <li><a href="#">+ Book Now</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4">
                    <div class="trainer-item">
                        <div class="image-thumb">
                            <img src={duke} alt=""/>
                        </div>
                        <div class="down-content">
                            <span>from <sup>₹</sup>700 per weekend</span>
                            <h4>KTM Duke 200cc</h4>
                            <p>
                                <i class="fa fa-user" title="passegengers"></i> 2 &nbsp;&nbsp;&nbsp;
                               
                                <i class="fa fa-cog" title="transmission"></i> M
                            </p>
                            <ul class="social-icons">
                                <li><a href="#">+ Book Now</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <br/>
                
            <nav>
              <ul className="pagination pagination-lg justify-content-center">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>

        </div>
    </section>
    </>
  )
}

const bikeStyle={
    backgroundImage: 'url({image})',
}
export default Bikes