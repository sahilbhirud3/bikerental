import React, { useState, useEffect } from "react";
// import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import "../assets/css/style.css";
import cross from "../assets/images/cross.svg";
import bikeDetail from "../assets/css/bikedetail.css";
import { Link } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import image from "../assets/images/bike-bg.jpg";


const WishList = () => {
  const [bikes, setBikes] = useState([]);
  let userId = localStorage.getItem("userId");
  const  fetchWishlist=async () =>{
    try {
      const response = await fetch(
        `http://localhost:4000/wishlist/${userId}`
      );
      const data = await response.json();
      setBikes(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
   
    fetchWishlist();
  }, []);

  const handleDelWishlist = async (docId) => {
    console.log("deleted called");
    fetch(`http://localhost:4000/wishlistDel/${userId}/${docId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Failed to delete bike");
        } else {
         await toast.success("Bike deleted from wishlist successfully!");
          fetchWishlist();
        }
      })
      .catch((error) => {
        console.error(error);
      });
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
                  Your  <em>WishList</em>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>




      <Toaster toastOptions={{ duration: 4000 }} />
      <Meta title={"WishList"} />
      {/* <BreadCrumb title="Wishlist" /> */}
      {bikes.length > 0 ? (
  <div>
    <Container class1="wishlist-wrapper home-wrapper-2 py-5">
      <div className="row">
        {bikes.map((bike) => (
          <div className="col-3" key={bike.docId}>
            <div className="wishlist-card position-relative">
              <img
                onClick={() => handleDelWishlist(bike.docId)}
                src={cross}
                alt="cross"
                className="position-absolute cross img-fluid"
              />

              <Link to={`/bikedetails/${bike.bikeId}`}>
                <div className="wishlist-card-image ">
                  <img
                    src={bike.img}
                    alt={bike.name}
                    className="img-fluid w-100"
                  />
                </div>

                <div className="py-3 px-3">
                  <div className="down-content">
                    <span>
                      from <sup>₹</sup>
                      {bike.rate} per weekend
                    </span>
                    <h4>
                      {bike.brand} {bike.name}
                    </h4>
                    <p>
                      <i className="fa fa-user" title="passegengers"></i>{" "}
                      {bike.passanger} &nbsp;&nbsp;&nbsp;
                      <i className="fa fa-cog" title="transmission"></i>{" "}
                      {bike.transmission}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </div>
) : (
 <> <br/><h2>Your wishlist is empty.</h2></>
)}

    </>
  );
};

export default WishList;
