import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "../assets/css/style.css";
import bikeDetail from "../assets/css/bikedetail.css";
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
// import { LocalizationProvider } from "@mui/x-date-pickers";

import "../assets/css/font-awesome.css";
import "../assets/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";
import { Component } from "react";
import { toast, Toaster } from "react-hot-toast";
// 

const BikeDetail = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("Form submitted!!!");
  };

  const handleCancel = () => {
    setShowPopup(false);
  };
  function PopupForm(props) {
    // const [selectedDate, setSelectedDate] = useState(null);
    const [date, setDate] = useState(null);
    return (
      <div className="popup">
        <div className="popup-inner">
          <h2>{props.title}</h2>
          <div class="modal-body">
            <div class="contact-us">
              <div class="contact-form"></div>
              <form onSubmit={props.handleSubmit}>
                <div class="row">
                  <div class="col-md-6">
                    <fieldset>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter email address"
                        required=""
                      />
                    </fieldset>
                  </div>

                  <div class="col-md-6">
                    <fieldset>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter phone"
                        required=""
                      />
                    </fieldset>
                  </div>
                </div>
                <br />
                <div class="row">
                  <div class="col-md-6">
                    <fieldset>
                      {/* <input
                        type="text"
                        class="form-control"
                        placeholder="Pick-up Date Time"s
                        required=""
                      /> */}

                      <Datetime selected={date} onChange={setDate}  initialValue="Select Pickup Date"/>
                    </fieldset>
                  </div>
                  <div class="col-md-6">
                    <fieldset>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Return Date Time"
                        required=""
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
                        placeholder="Full Name as per Driving License"
                        required=""
                      />
                    </fieldset>
                  </div>
                  <div class="col-md-6">
                    <fieldset>
                      <input
                        type="text"
                        class="form-control"
                        placeholder=""
                        required=""
                      />
                    </fieldset>
                  </div>
                </div>
                <br />
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                    onClick={props.handleCancel}
                  >
                    Cancel
                  </button>
                  <button type="submit" class="btn btn-primary">
                    Book Now
                  </button>
                </div>
                {/* <button type="submit">Submit</button>
                <button type="button" onClick={props.handleCancel}>
                  Cancel
                </button> */}
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
  // useEffect(() => {
  //     fetch(`http://localhost:4000/api/${+id}`)
  //       .then(response =>
  //         response.json())
  //       .then(data => setBike(data))
  //       .catch(error => console.log(error));
  //   }, [id]);

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

  // let bikesArr=[{
  //     id:1,
  //     name:'TVS Jupiter',
  //     img:jupiter,
  //     description:'Moped, Auto Transmission with Boot',
  //     passanger:2,
  //     transmission:'A',
  //     rate: 350
  // },{
  //     id:2,
  //     name:'Honda Dio',
  //     img:dio,
  //     description:'Moped, Auto Transmission with Boot',
  //     passanger:2,
  //     transmission:'A',
  //     rate: 370
  // },
  // {
  //     id:3,
  //     name:'Hero Pleasure',
  //     img:pleasure,
  //     description:'Moped, Auto Transmission with Boot',
  //     passanger:2,
  //     transmission:'A',
  //     rate: 400
  // },
  // {
  //     id:4,
  //     name:'Honda SP 125',
  //     img:sp,
  //     description:' Manual Transmission without boot',
  //     passanger:2,
  //     transmission:'M',
  //     rate: 420
  // },{
  //     id:5,
  //     name:'Hero Splendor',
  //     img:splendor,
  //     description:'Manual Transmission without boot',
  //     passanger:2,
  //     transmission:'M',
  //     rate: 410
  // },{
  //     id:6,
  //     name:'KTM Duke 200',
  //     img:duke,
  //     description:'Manual Transmission without boot',
  //     passanger:2,
  //     transmission:'M',
  //     rate: 700
  // },
  // {
  //     id:7,
  //     name:'Raider ',
  //     img:raider,
  //     description:'Manual Transmission without Boot',
  //     passanger:2,
  //     transmission:'M',
  //     rate: 400
  // },{
  //     id:8,
  //     name:'Yamaha MT15',
  //     img:mt15,
  //     description:'Manual Transmission without Boot',
  //     passanger:2,
  //     transmission:'M',
  //     rate: 450
  // },
  // {
  //     id:9,
  //     name:'Yamaha FZS',
  //     img:fzs,
  //     description:'Manual Transmission without Boot',
  //     passanger:2,
  //     transmission:'M',
  //     rate: 420
  // },
  // {
  //     id:10,
  //     name:'Ninja ZX10R',
  //     img:ninja,
  //     description:' ninja',
  //     passanger:2,
  //     transmission:'M',
  //     rate: 700
  // },{
  //     id:11,
  //     name:'Ninja H2 ',
  //     img:ninjah2,
  //     description:'Manual Transmission without boot',
  //     passanger:2,
  //     transmission:'M',
  //     rate: 1500
  // },{
  //     id:12,
  //     name:'Classic 350',
  //     img:classic350,
  //     description:'Manual Transmission without boot',
  //     passanger:2,
  //     transmission:'M',
  //     rate: 700
  // }
  // ,
  // {
  //     id:13,
  //     name:'TVS Apache',
  //     img:tvsapache,
  //     description:'Manual Transmission without boot',
  //     passanger:2,
  //     transmission:'M',
  //     rate: 400
  // },{
  //     id:14,
  //     name:'Ola S1 Pro',
  //     img:ola,
  //     description:'Moped, EV,  Auto Transmission with Boot',
  //     passanger:2,
  //     transmission:'A',
  //     rate: 370
  // },
  // {
  //     id:15,
  //     name:'Hero Pleasure',
  //     img:pleasure,
  //     description:'Moped, Auto Transmission with Boot',
  //     passanger:2,
  //     transmission:'A',
  //     rate: 400
  // },
  // {
  //     id:16,
  //     name:'Honda SP 125',
  //     img:sp,
  //     description:' Manual Transmission without boot',
  //     passanger:2,
  //     transmission:'M',
  //     rate: 420
  // },{
  //     id:17,
  //     name:'Hero Splendor',
  //     img:splendor,
  //     description:'Manual Transmission without boot',
  //     passanger:2,
  //     transmission:'M',
  //     rate: 410
  // },{
  //     id:18,
  //     name:'KTM Duke 200',
  //     img:duke,
  //     description:'Manual Transmission without boot',
  //     passanger:2,
  //     transmission:'M',
  //     rate: 700
  // }
  // ]
  // const bike=bikes.find((item)=>item.id===+id);

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
                  <button class="cart-btn" onClick={checkLogin}>
                    {" "}
                    Book Now <i class="fa-solid fa-arrow-right"></i>
                  </button>
                  {showPopup && (
                    <PopupForm
                      title="Book Now"
                      handleSubmit={handleSubmit}
                      handleCancel={handleCancel}
                    />
                  )}

                  {/* <a href="cart.html" class="cart-btn">
                        
                             Book Now <i class="fa-solid fa-arrow-right"></i></a> */}
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
