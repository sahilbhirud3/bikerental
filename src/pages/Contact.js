import React,{useState} from 'react'
import image from "../assets/images/bike-bg.jpg";
import linedec from "../assets/images/line-dec.png";
import bg from "../assets/images/background.jpg";
import { toast, Toaster } from "react-hot-toast";
import { data } from 'jquery';
const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const saveContact = (data) => {
        return new Promise((resolve, reject) => {
          // Perform the saving logic here
          // You can make an API call, update the database, or perform any necessary operations to save the settings
          // You can use resolve() to indicate a successful save or reject() to indicate a failure
      
          // For example, if you are making an API call using fetch:
          fetch('http://localhost:4000/contact', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then((response) => {
              if (response.ok) {
                resolve(); // Resolve the promise if the save is successful
              } else {
                reject(); // Reject the promise if the save fails
              }
            })
            .catch((error) => {
              reject(); // Reject the promise if an error occurs during the save process
            });
        });
      };

    const handleSubmit = (event) => {
      event.preventDefault();
      // Perform any necessary form submission logic here
      // You can access the input values using the state variables (name, email, subject, message)
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Subject:', subject);
      console.log('Message:', message);
     
      const data={name:name,email:email,subject:subject,message:message}

      toast.promise(
        saveContact(data),
         {
           loading: 'Submitting...',
           success: <b> Submitted!</b>,
           error: <b>Could not Submitted.</b>,
         }
       );
       setName('');
  setEmail('');
  setSubject('');
  setMessage('');
    };



  return (
    <>
    
    <Toaster toastOptions={{ duration: 4000 }} />
    <section className="section section-bg" id="call-to-action" style={{ backgroundImage: `url(${image})` }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="cta-content">
             
              <h2>Feel free to <em>Contact Us</em></h2>
              <p>We're Available for solving your queries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section" id="features">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-heading" style={{marginTop:"20px",marginBottom:"20px"}}>
              <h2>contact <em> info</em></h2>
              <img src={linedec} alt="waves" />
            </div>
          </div>

          <div className="col-md-4">
            <div className="icon">
              <i className="fa fa-phone"></i>
            </div>
           
            <h5><a href="#">+919579213171</a></h5>
            <h5><a href="#">+918600386608</a></h5>
          
          </div>

          <div className="col-md-4">
            <div className="icon">
              <i className="fa fa-envelope"></i>
            </div>
            <h5><a href="#">chaitanyabhavar2021@gmail.com</a></h5>
            <h5><a href="#">sahilbhirud3@gmail.com</a></h5>
           
          </div>

          <div className="col-md-4">
            <div className="icon">
              <i className="fa fa-map-marker"></i>
            </div>
            <h5>Goa,India</h5>
            
          </div>
        </div>
      </div>
    </section>
   
    <section className="section" id="contact-us" style={{ marginTop: 0,marginBottom:0 }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-xs-12">
            <div id="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123094.2784473793!2d73.66943579412046!3d15.392930807386406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc7f3635e9997%3A0x5f896b7ce330450e!2sVasco%20da%20Gama%2C%20Goa!5e0!3m2!1sen!2sin!4v1684221370952!5m2!1sen!2sin" width="100%" height="600px" frameBorder="0" style={{ border: 0 }} allowFullScreen></iframe>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12">
            <div className="contact-form section-bg" style={{ backgroundImage: `url(${bg})` }}>
            <form id="contact" onSubmit={handleSubmit} method="post">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <fieldset>
            <input
              name="name"
              type="text"
              id="name"
              placeholder="Your Name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </fieldset>
        </div>
        <div className="col-md-6 col-sm-12">
          <fieldset>
            <input
              name="email"
              type="text"
              id="email"
              pattern="[^ @]*@[^ @]*"
              placeholder="Your Email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </fieldset>
        </div>
        <div className="col-md-12 col-sm-12">
          <fieldset>
            <input
              name="subject"
              type="text"
              id="subject"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </fieldset>
        </div>
        <div className="col-lg-12">
          <fieldset>
            <textarea
              name="message"
              rows="6"
              id="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </fieldset>
        </div>
        <div className="col-lg-12">
          <fieldset>
            <button type="submit" id="form-submit" className="main-button">
              Send Message
            </button>
          </fieldset>
        </div>
      </div>
    </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact