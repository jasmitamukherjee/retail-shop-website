import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const OurShops = () => {
  // Sample data for three shops
  const shops = [
    {
      imageUrl: 'https://img.freepik.com/free-vector/shop-with-sign-we-are-open_23-2148553675.jpg',
      title: 'Rangoli',
      description: 'Discover Rangoli, your go-to retail destination for curated collections of unique and handcrafted items. Whether you\'re looking for exquisite home decor, stylish accessories, or thoughtful gifts, Rangoli offers a diverse selection to suit every taste and occasion. Our friendly team is here to assist you in finding the perfect pieces that inspire and delight. Visit us today and experience the charm of shopping at Rangoli.',
      mapsLink: '#'
    },
    {
      imageUrl: 'https://cdn.pixabay.com/photo/2013/07/12/15/49/shop-150362_640.png',
      title: 'Shop 2',
      description: 'Discover Rangoli, your go-to retail destination for curated collections of unique and handcrafted items. Whether you\'re looking for exquisite home decor, stylish accessories, or thoughtful gifts, Rangoli offers a diverse selection to suit every taste and occasion. Our friendly team is here to assist you in finding the perfect pieces that inspire and delight. Visit us today and experience the charm of shopping at Rangoli.',
      mapsLink: '#'
    },
    {
      imageUrl: 'https://img.freepik.com/free-vector/shop-with-sign-we-are-open_23-2148553675.jpg',
      title: 'Shop 3',
      description: 'Discover Rangoli, your go-to retail destination for curated collections of unique and handcrafted items. Whether you\'re looking for exquisite home decor, stylish accessories, or thoughtful gifts, Rangoli offers a diverse selection to suit every taste and occasion. Our friendly team is here to assist you in finding the perfect pieces that inspire and delight. Visit us today and experience the charm of shopping at Rangoli.',
      mapsLink: '#'
    }
  ];

  return (
    <div>
      <Navbar />
      <div className="container">
        {shops.map((shop, index) => (
          <div className="row justify-content-center mt-4 align-items-center" key={index}>
            {/* For mobile view */}
            <div className="col-12 mb-4 d-md-none">
              <div className="card text-center" style={{ width: "20rem", margin: "auto" }}>
                <img className="card-img-top" src={shop.imageUrl} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">{shop.title}</h5>
                  <a href={shop.mapsLink} className="btn btn-success">Go to maps</a>
                </div>
              </div>
              <p className="text-center">{shop.description}</p>
            </div>

            {/* For non-mobile view */}
            <div className={`col-md-6 mb-4 d-none d-md-block ${index % 2 === 0 ? 'order-md-1' : 'order-md-2'}`}>
              <div className="card text-center" style={{ width: "20rem", margin: "auto" }}>
                <img className="card-img-top" src={shop.imageUrl} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">{shop.title}</h5>
                  <a href={shop.mapsLink} className="btn btn-success">Go to maps</a>
                </div>
              </div>
            </div>

            {/* Description column for non-mobile view */}
            <div className={`col-md-6 mb-4 d-none d-md-block d-flex align-items-center justify-content-center ${index % 2 === 0 ? 'order-md-2' : 'order-md-1'}`}>
              <div className="text-center">
                <p>{shop.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default OurShops;
