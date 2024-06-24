import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const GroomerLayout = () => {
  return (
    <div className="container">
      <h1 className="text-center my-4">Get The Best Groomer In The City</h1>
      <div className="row">
        {/* Repeat this block for each groomer */}
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="https://i.ibb.co/GR0RH5x/20240227-203542-1.jpg" className="card-img-top" alt="Groomer" />
            <div className="card-body">
              <h5 className="card-title">Groomer Name & Spa</h5>
              <p className="card-text">$price/person</p>
              <a href="#" className="btn btn-primary">Book Now</a>
            </div>
          </div>
        </div>
        {/* ... other groomers */}
      </div>
      <div className="text-center">
        <button className="btn btn-primary">MORE GROOMERS</button>
      </div>
    </div>
  );
};

export default GroomerLayout;