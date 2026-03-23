import React from "react";
import download from "../images/download.jpg"

const Image = () => {
  return (
    <>
      <section className="container-fluid mt-3">
        <div className="row">
          <div className="col-3">
            {/* image from absolute url */}
            <div className="card">
              <div className="card-header">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="img1"
                />
              </div>
              <div className="card-body">
                <h2>Name: shivani</h2>
                <h3>Fav hobby: walking around beaches</h3>
                <h4>Music Instrument: piano</h4>
              </div>
            </div>
          </div>

          {/* image from relative path -public folder*/}
          <div className="col-3">
            <div className="card">
              <div className="card-header">
                <img src="../images/flower2.jpg" alt="img1" />
              </div>
              <div className="card-body">
                <h2>Name: shivani</h2>
                <h3>Fav hobby: walking around beaches</h3>
                <h4>Music Instrument: piano</h4>
              </div>
            </div>
          </div>

          {/* image from src path using import */}
          <div className="col-3">
            <div className="card">
              <div className="card-header">
                <img src={download} alt="img1" />
              </div>
              <div className="card-body">
                <h2>Name: shivani</h2>
                <h3>Fav hobby: walking around beaches</h3>
                <h4>Music Instrument: piano</h4>
              </div>
            </div>
          </div>

          {/* image from src path using require function- deprecated */}
          <div className="col-3">
            <div className="card">
              <div className="card-header">
                <img src={require('../images/flower4.jpg')} alt="img1" />
              </div>
              <div className="card-body">
                <h2>Name: shivani</h2>
                <h3>Fav hobby: walking around beaches</h3>
                <h4>Music Instrument: piano</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Image;
