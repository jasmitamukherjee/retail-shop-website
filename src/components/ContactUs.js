import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h2>Contact Us</h2>
        <div className="row mt-4">
          <div className="col-md-6">
            <h4>Contact Information</h4>
            <p>
              <strong>Owner Name:</strong> John Doe <br />
              <strong>Phone:</strong> +1234567890 <br />
              <strong>Email:</strong> john.doe@example.com
            </p>
          </div>
          <div className="col-md-6">
            <h4>Contact Form</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" rows="5"></textarea>
              </div>
              <button type="submit" className="btn btn-success my-2">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ContactUs;
