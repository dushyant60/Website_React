import React from 'react';
import './Partners.css'; // Assuming you save the CSS in App.css

const Partners = () => {
  return (
    <div className="container">
      <h1>Latest posts</h1>
      <div className="row">
        <div className="col">
          <img src="https://picsum.photos/200/200" alt="" />
          <h2>Aquila Iure Reprehenderit Tempor Lorem Occaecat Volup</h2>
          <p>Veniam adipisicing nulla amet...</p>
          <button>Do consectetur</button>
        </div>
        <div className="col">
          <img src="https://picsum.photos/200/200" alt="" />
          <h2>Aliqua Irure Tempor Lorem Occaecat Volup</h2>
          <p>Ex nisi in minim dolore ad nostrud nullum. Fugiat veniam adipisicing nulla amet...</p>
          <button>5 min read</button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <img src="https://picsum.photos/200/200" alt="" />
          <h2>Do consectetur</h2>
          <p>Ex nisi in minim dolore ad nostrud nullum. Fugiat veniam adipisicing nulla amet...</p>
          <button>Dec 22, 2022</button>
        </div>
        <div className="col">
          <img src="https://picsum.photos/200/200" alt="" />
          <h2>Aliqua Irure Tempor Lorem Occaecat Volup</h2>
          <p>Ex nisi in minim dolore ad nostrud nullum. Fugiat veniam adipisicing nulla amet...</p>
          <button>Dec 22, 2022</button>
        </div>
      </div>
    </div>
  );
}

export default Partners;
