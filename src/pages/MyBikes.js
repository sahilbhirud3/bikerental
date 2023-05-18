import image from "../assets/images/bike-bg.jpg";
import { toast, Toaster } from "react-hot-toast";
import React, { useState, useEffect } from "react";

const MyBikes = () => {
  const [bikes, setBikes] = useState([]);

  let userId = localStorage.getItem("userId");
  console.log(userId);
  const fetchWishlist = async () => {
    try {
      const response = await fetch(`http://localhost:4000/bookings/${userId}`);
      const data = await response.json();
      console.log(data);
      setBikes(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchWishlist();
  }, []);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp._seconds * 1000); // Convert seconds to milliseconds
    return date.toLocaleString(); // Customize the format as needed
  };

  return (
    <>
      <section
        className="section section-bg"
        id="call-to-action"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="cta-content">
                <br />
                <br />
                <h2>
                  Your <em>Bikes</em>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Toaster toastOptions={{ duration: 4000 }} />
      {bikes.length > 0 ? (
        <div style={{ paddingTop: 5 }}>
          <div className=" row-smaller" style={{ paddingBottom: "1%" }}>
            <div className="col">
              <div className="card card-2">
                <div className="card-body">
                  <div className="media">
                    <div className="sq align-self-center">
                      <h6 className="mb-0">Order Id</h6>
                    </div>

                    <div className="media-body my-auto text-right">
                      <div className="row my-auto flex-column flex-md-row">
                        <div className="col my-auto">
                          <h6 className="mb-0">Bike Name</h6>
                        </div>
                        <div className="col my-auto">
                          <h6 className="mb-0">Payment Id</h6>
                        </div>
                        <div className="col my-auto">
                          <h6 className="mb-0">Pickup Date Time</h6>
                        </div>
                        <div className="col my-auto">
                          <h6 className="mb-0">Return Date Time</h6>
                        </div>

                        <div className="col my-auto">
                          <h6 className="mb-0">Booking Amount</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" row-smaller">
            <div className="col">
              {bikes.map((bike) => {
                return (
                  <div className="card card-2" key={bike.docId}>
                    <div className="row card-body" style={{ paddingBottom: 0 }}>
                      <div className="col text-left">
                        <small>Order id : {bike.razorpayOrderId}</small>
                      </div>

                      <div className="col my-auto">
                        <div className="text-right mr-sm-2">
                          {bike.status}
                          {"  "}
                          {bike.status === "active" ? (
                            <i
                              className="fa fa-circle-check"
                              style={{ color: "green" }}
                            ></i>
                          ) : (
                            <i
                              className="fa fa-circle-xmark"
                              style={{ color: "red" }}
                            ></i>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="media">
                        <div className="sq align-self-center">
                          <img
                            className="img-fluid my-auto align-self-center mr-2 mr-md-4 pl-0 p-0 m-0"
                            src={bike.bikeData.img}
                            alt={bike.name}
                            width="135"
                            height="135"
                          />
                        </div>
                        <div className="media-body my-auto  ">
                          <div className="row my-auto flex-column flex-md-row">
                            <div className="col my-auto ">
                              <h6 className="mb-0">
                                {bike.bikeData.brand} {bike.bikeData.name}
                              </h6>
                            </div>
                            <div className="col my-auto">
                            <small>
                                {" "}{bike.paymentId}
                            </small>
                            </div>
                            <div className="col-auto my-auto" >
                              <small>
                                {" "}
                                {formatTimestamp(bike.returnDateTime)}{" "}
                              </small>
                            </div>
                            <div className="col my-auto" >
                              <small>
                                {" "}
                                {formatTimestamp(bike.pickupDateTime)}
                              </small>
                            </div>

                            <div className="col my-auto">
                              <h6 className="mb-0">&#8377; {bike.amount}.00</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col text-right">
                      <small> {formatTimestamp(bike.timestamp)}</small>
                    </div>

                    <hr className="my-3" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <>
          {" "}
          <br />
          <h2>Your Booking List is empty.</h2>
        </>
      )}
    </>
  );
};

export default MyBikes;
