import React from "react";

const Footer = () => {
  return (
    <footer id="main-footer" className="py-3 bg-primary text-center text-white">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <p className="lead">
              Copyright &copy; Rot-Me-Not
              <span id="year"></span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
