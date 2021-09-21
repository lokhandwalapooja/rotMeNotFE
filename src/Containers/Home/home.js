import React from "react";
import Video from "../../Components/VideoComponent/videoComponent";

const Home = () => {
  return (
    <>
      <section id="showcase">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item carousel-image-1 active">
              <div className="container carousel-image-1">
                <div className="carousel-caption d-none d-sm-block text-right mb-5">
                  <h1 className="display-3">Submit a recipe</h1>
                  <p className="lead">
                  Are you an amateur cook looking to share your recipes with the world?
                                ROT-ME-NOT is looking for you!
                  </p>
                  <a href="#" className="btn btn-danger btn-lg">
                    Sign Up Now
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item carousel-image-2">
              <div className="container">
                <div className="carousel-caption d-none d-sm-block mb-5">
                  <h1 className="display-3">Click to look for recipes</h1>
                  <p className="lead">
                    Browse through our virtual cookbook to explore a plethora of cuisines all over the planet.
                  </p>
                  <a href="#" className="btn btn-primary btn-lg">
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            <div className="carousel-item carousel-image-3">
              <div className="container">
                <div className="carousel-caption d-none d-sm-block text-right mb-5">
                  <h1 className="display-3">ROT-ME-NOT</h1>
                  <p className="lead">
                    Fridge full of food but don't know what to cook?
                  </p>
                  <a href="#" className="btn btn-success btn-lg">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <a
            href="#myCarousel"
            data-slide="prev"
            className="carousel-control-prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </a>

          <a
            href="#myCarousel"
            data-slide="next"
            className="carousel-control-next"
          >
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </section>
      {/* <Video /> */}
    </>
  );
};

export default Home;
