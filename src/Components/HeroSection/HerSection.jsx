import React, { useState } from "react";
import "./HeroSection.css";

const mockProperties = [
  { id: 1, name: "Luxury Villa" },
  { id: 2, name: "Modern Apartment" },
  { id: 3, name: "Cozy Cottage" },
  // Add more properties as needed
];

export default function HeroSection() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchClick = () => {
    const filteredProperties = mockProperties.filter((property) =>
      property.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchResults(filteredProperties);
  };

  return (
    <>
      <div className="hero-container">
        <div className="video-content-container">
          <video className="hero-video" autoPlay muted loop>
            <source src="/video/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="content-wrapper">
            <h1 className="hero-title">
              Consider owning rather <br /> than renting
            </h1>
            <p className="hero-text hero-text1">
              Owning a home is not just about four walls, <br /> it's about
              building memories.
            </p>
            <div className="search-bar">
              <input
                type="text"
                placeholder="You are one search away..."
                value={searchInput}
                onChange={handleSearchChange}
              />
              <button className="search-button" onClick={handleSearchClick}>
                SEARCH
              </button>
            </div>
            {searchResults.length > 0 && (
              <div className="search-results">
                <h2>Search Results:</h2>
                <ul>
                  {searchResults.map((property) => (
                    <li key={property.id}>{property.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}



//  <div className="hero-container">
//    <div className="content-wrapper">
//      <h1 className="hero-title">
//        Consider owning rather <br /> than renting
//      </h1>
//      <p className="hero-text">
//        Owning a home is not just about four walls, <br /> it's about building
//        memories.
//      </p>
//      <div className="search-bar">
//        <input
//          type="text"
//          placeholder="You are one search away..."
//          value={searchInput}
//          onChange={handleSearchChange}
//        />
//        <button className="search-button" onClick={handleSearchClick}>
//          SEARCH
//        </button>
//      </div>
//      {searchResults.length > 0 && (
//        <div className="search-results">
//          <h2>Search Results:</h2>
//          <ul>
//            {searchResults.map((property) => (
//              <li key={property.id}>{property.name}</li>
//            ))}
//          </ul>
//        </div>
//      )}
//    </div>
//  </div>;
