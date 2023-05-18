import React, { useState, useEffect, useRef } from "react";
import style from "../assets/css/style.css";
import bikeDetail from "../assets/css/bikedetail.css";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

import "../assets/css/font-awesome.css";
import "../assets/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";
import { Component } from "react";
import { toast, Toaster } from "react-hot-toast";
import motocross from '../assets/images/Motocross.gif'
import useRazorpay from "react-razorpay";
// import DateTimePicker from "react-datetime-picker";
// import 'react-datetime-picker/dist/DateTimePicker.css';
// import 'react-calendar/dist/Calendar.css';
// import 'react-clock/dist/Clock.css';

const BikeDetail = () => {

  const [showPopup, setShowPopup] = useState(false);

  var refEmail;
  var refName;
  var refDlNo;
  var refPickupDate;
  var refReturnDate;
  

  const [inputEmail, setInputEmail] = useState('');
  const [inputDlNo, setInputDlNo] = useState('');
  const [inputName, setInputName] = useState('');

  const [returnDate, setReturnDate] = useState();
  const [pickupDate, setPickupDate] = useState();
  const [verificationResult, setVerificationResult] = useState('');
  const uid = localStorage.getItem("userId");
  


  const Razorpay = useRazorpay();

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();


    setInputEmail(refEmail.current.value);
    setInputDlNo(refDlNo.current.value);
    setInputName(refName.current.value);
    setPickupDate((refPickupDate.current.value)+':00');

    setReturnDate((refReturnDate.current.value)+':00');
    console.log("Data from ref")
    console.log(inputDlNo,inputEmail,inputName,pickupDate,returnDate)
    const amount = bike.rate;
    
    const scriptLoaded = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (scriptLoaded) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      };
      const response = await fetch(
        "http://localhost:4000/razorpay",
        requestOptions
      );
      const data = await response.json();
      console.log(data);
      const options = {
        key: "rzp_test_bTDnw950m7Mzb4",
        currency: data.currency,
        amount: data.amount,
        name: "Bike Rental",
        description: "Book Bike Transaction",
        image: motocross,
        order_id: data.id,
        theme: {
          "color": "#ed563b"
      },
        handler: async function (response) {
          const paymentId = response.razorpay_payment_id;
          const razorpayOrderId = response.razorpay_order_id;
          const razorpaySignature = response.razorpay_signature;
              
              
          try {
            const response1 = await fetch(`http://localhost:4000/verify-payment`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ paymentId,razorpayOrderId,razorpaySignature,inputDlNo,inputEmail,inputName,pickupDate,returnDate,uid,id,amount}),
              });
            const data = await response1.json();
            
            if (data.success) {
              setVerificationResult('Payment is successful');
              toast.success("Payment Success");
            } else {
              setVerificationResult('Payment is not successful');
              toast.error("Payment Failed");
            }
          } catch (error) {
            console.error('Payment Verification Error:', error);
            setVerificationResult('Payment verification failed');
          }


        },
 
          // Handle success and payment verification
        
       
      };

     
      
      var rzp1=new Razorpay(options);
      rzp1.open();
      setShowPopup(false);
    } else {
      console.log("Failed to load Razorpay script.");
    }
  };
  const handleCancel = () => {
    setShowPopup(false);
  };

  function PopupForm(props) {
    // const [selectedDate, setSelectedDate] = useState(null);
   // Access the refs from props
  //const { refEmail, refName, refDlNo, refPickupDate, refReturnDate } = props;

  refEmail=useRef(null);
 refName=useRef(null);
 refDlNo=useRef(null);
 refPickupDate=useRef(null);
 refReturnDate=useRef(null);

    return (
      <div className="popup">
        <div className="popup-inner">
          <h2>Book Now</h2>
          <div class="modal-body">
            <div class="contact-us">
              <div class="contact-form"></div>
              <form onSubmit={props.handleSubmit}>
                <div class="row">
                  <div class="col-md-6">
                    <fieldset>
                   
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Enter email address"
                        required
                        ref={refEmail}
                      />
                    </fieldset>
                  </div>
                  <div class="col-md-6">
                    <fieldset>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Full Name as per DL"
                        required
                        ref={refName}
                      />
                    </fieldset>
                  </div>
                </div>
                <br />
                <div class="row">
                  <div class="col-md-6">
                    <fieldset>
                      <input
                       className="form-control"
                       type="datetime-local"
                       
                       placeholder="Pickup Date & Time"
                         ref={refPickupDate}
                      />
                    </fieldset>
                  </div>
                  <div class="col-md-6">
                    <fieldset>
                      <input
                     className="form-control"
                      type="datetime-local"
                      
                      placeholder="Return Date & Time"
                      
                        ref={refReturnDate}
                       
                      />
                    </fieldset>
                  </div>
                </div>
                <br />
                <div class="row">
                  <div class="col-md-6">
                    <fieldset>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Driving Lic No"
                        required
                        ref={refDlNo}
                      />
                    </fieldset>
                  </div>
                 
                </div>
                <br/>
                <div class="row">
                  <div class="col-md-6">
                    <label htmlFor="inputField">
                      You have to pay atleast: ₹{bike.rate}
                    </label>
                  </div>
                  
                </div>
                <br />
                <div class="modal-footer">
                  <button
                    type="button"
                    class="cancelBtn"
                    data-dismiss="modal"
                    onClick={props.handleCancel}
                  >
                    Cancel
                  </button>
                  <button type="submit" class="loginBtn">
                   Pay Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const navigate = useNavigate();
  const checkLogin = async (e) => {
    e.preventDefault();
    if (localStorage.getItem("user")) {
      setShowPopup(true);
    } else {
      await toast.loading("Login First");
      navigate("/login");
    }
  };

  const [bike, setBike] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0); //for go to starting 'of the
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:4000/bikedetails/${id}`);
      const json = await response.json();
      setBike(json);
      console.log(bike);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToWishlist = async () => {
    if (localStorage.getItem("user")) {
     

      // Assume userId and bikeId are already defined
      fetch(`http://localhost:4000/wishlistAdd/${uid}/${id}`, {
        method: "POST",
      })
        .then((response) => {
          if (response.ok) {
            return response.text();
            // toast.success(response.statusText);
            //   console.log("Bike added to wishlist");
          } else {
            console.error("Failed to add bike to wishlist");
            throw new Error("failed");
          }
        })
        .then((data) => {
          toast.success(data);
        })
        .catch((error) => {
          console.error("Error adding bike to wishlist:", error);
        });
    } else {
      await toast.loading("Login First");
      navigate("/login");
    }
  };

 

  return (
    <div>
      <Toaster toastOptions={{ duration: 4000 }} />
      <div class="single-product mt-150 mb-150">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="single-product-img mt-30">
                <img src={bike.img} width="100%" alt="" />
              </div>
            </div>
            <div class="col-md-7">
              <div class="single-product-content">
                <h3 style={{ display: "inline" }}>
                  {bike.brand} {bike.name}{" "}
                </h3>
                {bike.cc && <h4 style={{ display: "inline" }}>{bike.cc} cc</h4>}
                <p class="single-product-pricing">
                  {" "}
                  ₹{bike.rate}
                  <span style={{ display: "inline" }}> Per Day</span>
                </p>
                * The rider needs to present a valid driving license & Original
                Id Proof(Aadhar Card/Pan Card/VoterID/Passport) at the time of
                picking up the vehicle.
                <br />
                * Only one complimentary helmet will be provided.
                <br />
                * Sufficient fuel will be provided with the vehicle to reach the
                nearest petrol station.
                <br />
                * Customer is liable to pay service charges as per authorized
                service center,in case of damage to the vehicle.
                <br />
                <div class="single-product-form">
                  {/* <form action="index.html">
                            <input type="number" placeholder="0"/>
                        </form> */}
                  <br />
                  <button class="cart-btn" onClick={handleAddToWishlist}>
                    {" "}
                    Add To Wishlist{" "}
                    <i class="fa-solid fa-heart" color="red"></i>
                  </button>{" "}
                  <button class="cart-btn" onClick={checkLogin}>
                    {" "}
                    Book Now <i class="fa-solid fa-arrow-right"></i>
                  </button>
                  
                  <br />
                  {showPopup && (
                    <PopupForm
                    handleSubmit={handleSubmit}
                    handleCancel={handleCancel}
                    />
                  )}
                  
                  <p>
                    <strong>Categories: </strong>
                    {bike.description}
                  </p>
                </div>
                <h4>Share:</h4>
                <ul class="product-share">
                  <li>
                    <a href="">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="fab fa-google-plus-g"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeDetail;
