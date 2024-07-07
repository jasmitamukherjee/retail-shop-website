import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import { Link } from 'react-router-dom';
import Features from './Home/Features';
import CallToAction from './Home/CallToAction';

const HomePage = () => {
  return (
    <>
    <div className="overflow-hidden pb-24">
      <Navbar />

      <section className="relative z-20">
        <div className="container px-4 mx-auto">
          <h1 className="text-center text-5xl lg:text-7xl font-bold font-heading mb-6 mt-14 max-w-2xl mx-auto">
            <span>Welcome to the official website of Rangoli-Symbiosis.
            </span>
          </h1>
         
          <div className="flex justify-center lg:pb-56">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaH45lGxuFnmEQivkUlVVaUJN36f6S8-r88w&s" alt="" />
          </div>
        </div>
      </section>

      <Features />

      <CallToAction/>

      
    </div>
    <Footer/>
</>
  );
};

export default HomePage;
