import React from "react";

const Footer = () => {
  return (
   <>
     <div className="footer-container">
     <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-title">Follow Us Instagram</h3>
        <div className="footer-images">
          <img src="https://themewagon.github.io/delicious/img/bg-img/insta1.jpg" className="footer-img" />
          <img src="https://themewagon.github.io/delicious/img/bg-img/insta2.jpg" className="footer-img" />
          <img src="https://themewagon.github.io/delicious/img/bg-img/insta3.jpg" className="footer-img" />
          <img src="https://themewagon.github.io/delicious/img/bg-img/insta4.jpg" className="footer-img" />
          <img src="https://themewagon.github.io/delicious/img/bg-img/insta5.jpg" className="footer-img" />
          <img src="https://themewagon.github.io/delicious/img/bg-img/insta6.jpg" className="footer-img" />
          <img src="https://themewagon.github.io/delicious/img/bg-img/insta7.jpg" className="footer-img" />
        </div>
        <div className="footer-bottom">
          <div className="social-icons">
            <a href="#" className="social-icon">
              <i className="fab fa-pinterest"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-behance"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <div className="footer-logo">
            <h2>Delicious</h2>
          </div>
          <p className="footer-text">
            Copyright ©2025 All rights reserved | This template is made with{" "}
            <span>♥</span> by Colorlib
          </p>
        </div>
        <a href="#" className="back-to-top">
          <i className="fas fa-arrow-up"></i>
        </a>
      </div>
    </footer>
     </div>
   </>
  );
};

export default Footer;
