import React from "react";

const About = (props) => {
  return (
    <>
      <header id="page-header">
        <div class="container">
          <div class="row">
            <div class="col-md-6 m-auto text-center">
              <h1>TEAM 5</h1>
              <h3>Story behind our website</h3>
              {/* <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas,
                temporibus?
              </p> */}
            </div>
          </div>
        </div>
      </header>
      <section id="about" class="py-3">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1 className="text-primary">What We Do</h1>
              <p>
                This is the essence of the RMN; it is their main marketing point. 
                A user who accesses the website at any point of time (logged in) has the option to
                 add into a virtual basket all the ingredients they have at home.
                  The website then scours its recipe database to find a recipe that could be cooked 
                  using those ingredients and presents it to the user. If there are multiple recipes matching the
                   users’ ingredients, they have the option to choose what they want to cook.
                Not only can these novice users view recipes. They also can submit the recipes and earn points.
              </p>
            </div>
            <div class="col-md-6">
              <img
                src="img/johnathan-macedo-4NQEvxW2_4w-unsplash.jpeg"
                alt=""
                class="img-fluid rounded-circle d-none d-md-block about-img"
              />
            </div>
          </div>

          <div id="authors" class="my-5 text-center">

          <div class="row">
            <div class="col">
              <div class="info-header mb-5">
                <h1 class="text-primary pb-3">Meet The Authors</h1>
                {/* <p class="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  laborum numquam aperiam dolores a porro!
                </p> */}
              </div>
            </div>
          </div>

          <div class="row" style={{marginBottom: '100px'}}>
            <div class="col-lg-3 col-md-6">
              <div class="card">
                <div class="card-body">
                  <img
                    src="img/pooja.jpeg"
                    alt=""
                    class="img-fluid rounded-circle w-50 mb-3"
                  />
                  <h3>Pooja</h3>
                  <h5 class="text-muted">Lead Writer</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    commodi nostrum, ab libero voluptas officia.
                  </p>
                  {/* <div class="d-flex justify-content-center">
                    <div class="p-4">
                      <a href="http://facebook.com">
                        <i class="fab fa-facebook"></i>
                      </a>
                    </div>
                    <div class="p-4">
                      <a href="http://twitter.com">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </div>
                    <div class="p-4">
                      <a href="http://instagram.com">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="card">
                <div class="card-body">
                  <img
                    src="img/manisha.jpeg"
                    alt=""
                    class="img-fluid rounded-circle w-50 mb-3"
                  />
                  <h3>Manisha</h3>
                  <h5 class="text-muted">Co-Writer</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    commodi nostrum, ab libero voluptas officia.
                  </p>
                  {/* <div class="d-flex justify-content-center">
                    <div class="p-4">
                      <a href="http://facebook.com">
                        <i class="fab fa-facebook"></i>
                      </a>
                    </div>
                    <div class="p-4">
                      <a href="http://twitter.com">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </div>
                    <div class="p-4">
                      <a href="http://instagram.com">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="card">
                <div class="card-body">
                  <img
                    src="img/prashanth.jpeg"
                    alt=""
                    class="img-fluid rounded-circle w-50 mb-3"
                  />
                  <h3>Prashant</h3>
                  <h5 class="text-muted">Editor</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    commodi nostrum, ab libero voluptas officia.
                  </p>
                  {/* <div class="d-flex justify-content-center">
                    <div class="p-4">
                      <a href="http://facebook.com">
                        <i class="fab fa-facebook"></i>
                      </a>
                    </div>
                    <div class="p-4">
                      <a href="http://twitter.com">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </div>
                    <div class="p-4">
                      <a href="http://instagram.com">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="card">
                <div class="card-body">
                  <img
                    src="img/lin.jpeg"
                    alt=""
                    class="img-fluid rounded-circle w-50 mb-3"
                  />
                  <h3>Lin</h3>
                  <h5 class="text-muted">Designer</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    commodi nostrum, ab libero voluptas officia.
                  </p>
                  {/* <div class="d-flex justify-content-center">
                    <div class="p-4">
                      <a href="http://facebook.com">
                        <i class="fab fa-facebook"></i>
                      </a>
                    </div>
                    <div class="p-4">
                      <a href="http://twitter.com">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </div>
                    <div class="p-4">
                      <a href="http://instagram.com">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
