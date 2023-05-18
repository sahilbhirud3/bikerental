import React from 'react'
import '../assets/css/style.css'
import '../assets/css/font-awesome.css'
import '../assets/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagramSquare} from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  return (
    <>
    <div className="footer-area">
		<div className="container">
			<div className="row">
				<div className="col-lg-3 col-md-6">
					<div className="footer-box about-widget">
						<h2 className="widget-title">About us</h2>
						<p>
						Bike Rental System

						</p>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="footer-box get-in-touch">
						<h2 className="widget-title">Get in Touch</h2>
						<ul>
							<li>
								Goa
								India. 422222
							</li>
							
							<li>
								<a href="mailto:support@gmail.com?cc=support@gmail.com&subject=Bike Rental System Support"
									target="_blank">support@gmail.com</a>
							</li>
							<li>Mob: <a href="tel:999999999">+91 999999999</a></li>
							<li>Mob: <a href="tel:999999999">+91 999999999</a></li>
							
							
						</ul>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="footer-box pages">
						<h2 className="widget-title">Pages</h2>
						<ul>
							<li><a href="index.html">Home</a></li>
							<li><a href="#about">About</a></li>
							
							<li><a href="#contact">Contact</a></li>
						</ul>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="footer-box subscribe">
						<h2 className="widget-title">Follow Our Instagram Handle</h2>
						<p style={{'color':'white'}}>
							<a href="https://www.instagram.com/" target="_blank"
								><i className="fab fa-instagram"/>
								Bike Rental</a>
						</p>

						
						
					</div>
				</div>
				
			</div>
		</div>
	</div>
	
	<div className="copyright">
		<div className="container">
			<div className="row">
				<div className="col-lg-4 col-md-12">
					<p>Copyrights &copy; 2023 - <a href="#">Bike Rental</a></p>
				</div>
				<div className="col-lg-6 text-right col-md-12">
					<p>
						{/* <span>Developed By: 
						</span> */}
					</p>
				</div>
				
			</div>
		</div>
	</div>

</>
  )
}

export default Footer