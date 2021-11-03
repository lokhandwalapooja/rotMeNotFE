import React from "react";

const About = (props) => {
  return (
    <>
      <header id="page-header">
        <div class="container">
          <div class="row">
            <div class="col-md-6 m-auto text-center">
              <h1>About Us</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas,
                temporibus?
              </p>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
                fuga eaque. Amet, assumenda aliquid tempore dolorum error
                eveniet doloribus sed repellat quod, dolores fuga ipsam soluta.
                Aliquam accusantium pariatur aut sint deleniti laborum ducimus
                voluptatem? Architecto cumque quod suscipit officiis soluta,
                voluptate dicta blanditiis similique praesentium temporibus
                adipisci debitis labore!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
                fuga eaque. Amet, assumenda aliquid tempore dolorum error
                eveniet doloribus sed repellat quod, dolores fuga ipsam soluta.
                Aliquam accusantium pariatur aut sint deleniti laborum ducimus
                voluptatem? Architecto cumque quod suscipit officiis soluta,
                voluptate dicta blanditiis similique praesentium temporibus
                adipisci debitis labore!
              </p>
            </div>
            <div class="col-md-6">
              <img
                src="https://source.unsplash.com/random/700x700/?technology"
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
                <p class="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  laborum numquam aperiam dolores a porro!
                </p>
              </div>
            </div>
          </div>

          <div class="row" style={{marginBottom: '100px'}}>
            <div class="col-lg-3 col-md-6">
              <div class="card">
                <div class="card-body">
                  <img
                    src="img/person1.jpg"
                    alt=""
                    class="img-fluid rounded-circle w-50 mb-3"
                  />
                  <h3>Susan Williams</h3>
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
                    src="img/person2.jpg"
                    alt=""
                    class="img-fluid rounded-circle w-50 mb-3"
                  />
                  <h3>Grace Smith</h3>
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
                    src="img/person3.jpg"
                    alt=""
                    class="img-fluid rounded-circle w-50 mb-3"
                  />
                  <h3>John Doe</h3>
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
                    src="img/person4.jpg"
                    alt=""
                    class="img-fluid rounded-circle w-50 mb-3"
                  />
                  <h3>Kevin Swanson</h3>
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
