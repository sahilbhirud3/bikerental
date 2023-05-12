import React from 'react'
import '../assets/css/style.css'
import '../assets/css/font-awesome.css'
import '../assets/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <><header className="header-area header-sticky">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <nav className="main-nav">
                    
                    <a href="index.html" className="logo">Bike Rental<em> Website</em></a>
                   
                    <ul className="nav">
                        
                        <li><Link to='/' className="active">Home</Link></li>
                        <li><Link to='/bikes'>Fleet</Link></li>
                        {/* <li><a href="offers.html">Offers</a></li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">About</a>
                          
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="about.html">About Us</a>
                                <a className="dropdown-item" href="blog.html">Blog</a>
                                <a className="dropdown-item" href="team.html">Team</a>
                                <a className="dropdown-item" href="testimonials.html">Testimonials</a>
                                <a className="dropdown-item" href="faq.html">FAQ</a>
                                <a className="dropdown-item" href="terms.html">Terms</a>
                            </div>
                        </li>
                        <li><a href="contact.html">Contact</a></li>  */}
                    </ul>        
                    <a className='menu-trigger'>
                        <span>Menu</span>
                    </a>
                    
                </nav>
            </div>
        </div>
    </div>
</header>
</>
  )
}

export default Header