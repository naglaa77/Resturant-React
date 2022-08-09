import React, { Fragment } from "react";
import Header from "./Header";
import "./Home.css";
import pridimg from "./../../assets/1.png";
const Home = () => {
  return (
    <Fragment>
      <Header />
      <section className="numbers">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2>1287+</h2>
              <h6>SAVING</h6>
            </div>
            <div className="col-md-3">
              <h2>1963+</h2>
              <h6>PHOTES</h6>
            </div>
            <div className="col-md-3">
              <h2>1856+</h2>
              <h6>ROCKETS</h6>
            </div>
            <div className="col-md-3">
              <h2>3698+</h2>
              <h6>GLOBES</h6>
            </div>
          </div>
        </div>
      </section>
      <section className="pride">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={pridimg} alt="img" />
            </div>
            <div className="col-md-6">
              <h2>
                We pride ourselves on making real food from the best ingredien
              </h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
                dolorem assumenda labore ut nemo repudiandae voluptatum est
                minus itaque modi.
              </p>
              <button>
                <a href="#">learn more</a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
