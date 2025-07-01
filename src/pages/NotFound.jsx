import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NotFound.css'

const NotFound404 = () => {
  const navigate = useNavigate();

  // Handle navigation for "Back" and "Home" buttons
  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleHome = () => {
    navigate('/'); // Go to the home page
  };

  return (
    <div id="background">
      <div className="top">
        <h1>404</h1>
        <h3>page not found</h3>
      </div>
      <div className="container">
        <div className="ghost-copy">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
          <div className="four"></div>
        </div>
        <div className="ghost">
          <div className="face">
            <div className="eye"></div>
            <div className="eye-right"></div>
            <div className="mouth"></div>
          </div>
        </div>
        <div className="shadow"></div>
      </div>
      <div className="bottom">
        <p>Boo, looks like a ghost stole this page!</p>
        <form className="search">
          <input type="text" className="search-bar" placeholder="Search" />
          <button type="submit" className="search-btn">
            <i className="fa fa-search"></i>
          </button>
        </form>
        <div className="buttons">
          <button className="btn" onClick={handleBack}>Back</button>
          <button className="btn" onClick={handleHome}>Home</button>
        </div>
      </div>
    </div>
  );
};

export default NotFound404;
