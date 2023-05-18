import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import image from "../assets/images/bike-bg.jpg";
import { db } from "../firebase.config";
import { Link } from "react-router-dom";
import preloader from "../assets/css/preloader.css"
// Example items, to simulate fetching from another resources.

// const addBike = async () => {

//   try {
//       const docRef = await addDoc(collection(db, "bikes"), {
//         id:19,
//         brand:'Yamaha',
//         name:'Aerox',
//         cc:155,
//         img:'',
//         description:' Auto Transmission ',
//         passanger:2,
//         transmission:'A',
//         rate: 300
//       });
//       console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
// }
// addBike();
const Bikes = () => {
  const [bikes, setBikes] = useState([]);
  // const fetchBike = async () => {
  //   await getDocs(collection(db, "bikes")).then((querySnapshot) => {
  //     const newData = querySnapshot.docs.map((doc) => ({
  //       ...doc.data(),
  //       docid: doc.id,
  //     }));
  //     setBikes(newData);
  //     console.log(bikes, newData);
  //   });
  // };
  const fetchBike = async () => {
    try {
      const response = await fetch('http://localhost:4000/bikes');
      const json = await response.json();
      setBikes(json);
      console.log(bikes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const loader = document.querySelector('.loader');
      if (loader) {
        loader.style.display = 'none';
      }
    }, 1050);
    
    return ()=>{clearTimeout(timeoutId);
    fetchBike();}
  }, []);

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
            <div className="col-lg-4 col-md-4" key={item.id}>
              <div className="trainer-item">
                <div className="image-thumb">
                  <img src={item.img} alt="" />
                </div>
                <div className="down-content">
                  <span>
                    from <sup>₹</sup>
                    {item.rate} per weekend
                  </span>
                  <h4>
                    {item.brand} {item.name}
                  </h4>
                  <p>
                    <i className="fa fa-user" title="passegengers"></i>{" "}
                    {item.passanger} &nbsp;&nbsp;&nbsp;
                    <i className="fa fa-cog" title="transmission"></i>{" "}
                    {item.transmission}
                  </p>
                  <ul className="social-icons">
                    <li>
                      <Link to={`/bikedetails/${item.docid}`}>+ More Details</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
      </>
    );
  }

  function PaginatedItems({ itemsPerPage }) {
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = bikes.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(bikes.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % bikes.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };

    return (
      <>
        <Items currentItems={currentItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel="&raquo;"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="&laquo;"
          renderOnZeroPageCount={null}
          className="pagination pagination-lg justify-content-center"
          containerClassName="page-item"
          pageLinkClassName="page-link"
          nextLinkClassName="page-link"
          previousLinkClassName="page-link"
          activeLinkClassName="paginationactive"
        />
      </>
    );
  }

  return (
    <>
   
	<div class="loader">
		<div class="loader-inner">
		
		</div>
	</div>



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
                  Our <em>Fleet</em>
                </h2>
                <p>Choose your bike from our fleet & Enjoy the ride...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="trainers">
        <div className="container">
          <br />
          <br />
          <div className="row justify-content-center">
            <PaginatedItems itemsPerPage={6} />
          </div>
          <br />
        </div>
      </section>
    </>
  );
};

export default Bikes;
