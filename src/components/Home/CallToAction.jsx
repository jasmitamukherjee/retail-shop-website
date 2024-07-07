import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center lg:text-left mb-6 lg:mb-0">
          <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-4">
            Ready to Explore More?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Join Rangoli today and experience a seamless shopping experience
            with a wide range of products at your fingertips.
          </p>
          <div className="flex justify-center">
            <Link
              to="/products"
              className="inline-block bg-green-600 hover:bg-green-700 text-white py-4 px-8 rounded-full shadow font-bold font-heading transition duration-200"
              style={{ textDecoration: 'none' }} // Remove underline
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
