import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
const initialCardsData = require("../initialCards.json");

const Products = () => {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Set initial cards data on component mount
  useEffect(() => {
    setCards(initialCardsData);
  }, []);

  // Filter cards based on search term and selected category
  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === '' || card.category === selectedCategory)
  );

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle category filter change
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Get unique categories for filter dropdown
  const categories = [...new Set(cards.map(card => card.category))];

  // Category button styles (if needed)
  const categoryStyles = {
    'Engineering Stationary': 'bg-blue-500 text-white',
    'Computer and Mobile Accessories': 'bg-green-500 text-white',
    'Engineering Electronics': 'bg-yellow-500 text-white',
    'Papers and Plastic Items': 'bg-red-500 text-white',
    'Cosmetics and Deos': 'bg-pink-500 text-white',
    'Food Items': 'bg-orange-500 text-white',
    'Sports Items': 'bg-purple-500 text-white',
  };

  return (
    <div>
      <Navbar />

      <div className="container mt-4">
        <input
          type="text"
          className="form-control mb-4"
          placeholder="Search by product title..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select className="form-control mb-4" onChange={handleCategoryChange} value={selectedCategory}>
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="container mt-4">
        <div className="row">
          {filteredCards.map((card) => (
            <div key={card.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="card h-100">
                <img className="card-img-top" src={card.image} alt="Card image cap" style={{ height:300,objectFit: "fill" }} /> {/* Fixed size and object-fit cover */}
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className={`inline-block px-2 py-1 rounded text-xs ${categoryStyles[card.category]}`}>{card.category}</p>
                  <p className="card-text">{card.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
