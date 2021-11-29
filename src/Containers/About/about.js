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
        <div id="authors" class="my-5 text-center">
          <div class="row">
            <div class="col-md-6">
              <h1 className="text-primary">What We Do</h1>
              <p>
                This is the essence of the RMN; it is their main marketing
                point. A user who accesses the website at any point of time
                (logged in) has the option to add into a virtual basket all the
                ingredients they have at home. The website then scours its
                recipe database to find a recipe that could be cooked using
                those ingredients and presents it to the user. If there are
                multiple recipes matching the users’ ingredients, they have the
                option to choose what they want to cook. Not only can these
                novice users view recipes. They also can submit the recipes and
                earn points.
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
</div>

          <div id="authors" class="my-5 text-center">
          <div className="row">
            <div class="col">
              <div class="info-header mb-5">
                <h1 class="text-primary pb-3">Why Rot-Me-Not?</h1>
                <p class="lead pb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus obcaecati alias rerum dolore fugiat debitis?
                </p>
              </div>

             
              <div id="accordion">
                <div class="card">
                  <div class="card-header">
                    <h5 class="mb-0">
                      <div
                        href="#collapse1"
                        data-toggle="collapse"
                        data-parent="#accordion"
                      >
                        <i class="fas fa-arrow-circle-down"></i> Get Inspired
                      </div>
                    </h5>
                  </div>

                  <div id="collapse1" class="collapse show">
                    <div class="card-body">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Impedit odit laborum qui, debitis, sequi dolores nobis
                      mollitia labore quasi earum laboriosam nihil cupiditate
                      magnam iusto nostrum doloremque accusantium repudiandae
                      expedita autem et, repellendus suscipit consequatur!
                      Alias, maiores amet sunt ab inventore illo, deleniti
                      facilis consequatur tenetur nam pariatur fuga nisi!
                    </div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header">
                    <h5 class="mb-0">
                      <div
                        href="#collapse2"
                        data-toggle="collapse"
                        data-parent="#accordion"
                      >
                        <i class="fas fa-arrow-circle-down"></i> Gain The
                        Knowledge
                      </div>
                    </h5>
                  </div>

                  <div id="collapse2" class="collapse">
                    <div class="card-body">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Impedit odit laborum qui, debitis, sequi dolores nobis
                      mollitia labore quasi earum laboriosam nihil cupiditate
                      magnam iusto nostrum doloremque accusantium repudiandae
                      expedita autem et, repellendus suscipit consequatur!
                      Alias, maiores amet sunt ab inventore illo, deleniti
                      facilis consequatur tenetur nam pariatur fuga nisi!
                    </div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header">
                    <h5 class="mb-0">
                      <div
                        href="#collapse3"
                        data-toggle="collapse"
                        data-parent="#accordion"
                      >
                        <i class="fas fa-arrow-circle-down"></i> Open Your Mind
                      </div>
                    </h5>
                  </div>

                  <div id="collapse3" class="collapse">
                    <div class="card-body">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Impedit odit laborum qui, debitis, sequi dolores nobis
                      mollitia labore quasi earum laboriosam nihil cupiditate
                      magnam iusto nostrum doloremque accusantium repudiandae
                      expedita autem et, repellendus suscipit consequatur!
                      Alias, maiores amet sunt ab inventore illo, deleniti
                      facilis consequatur tenetur nam pariatur fuga nisi!
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

            <div class="row" style={{ marginBottom: "100px" }}>
              <div class="col-lg-3 col-md-6">
                <div class="card">
                  <div class="card-body">
                    <img
                      src="img/pooja.jpeg"
                      alt=""
                      class="img-fluid rounded-circle w-50 mb-3 authorImg"
                    />
                    <h3>Pooja</h3>
                    <h5 class="text-muted">Lead Writer</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed commodi nostrum, ab libero voluptas officia.
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
                      class="img-fluid rounded-circle w-50 mb-3 authorImg"
                    />
                    <h3>Manisha</h3>
                    <h5 class="text-muted">Co-Writer</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed commodi nostrum, ab libero voluptas officia.
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
                      class="img-fluid rounded-circle w-50 mb-3 authorImg"
                    />
                    <h3>Prashant</h3>
                    <h5 class="text-muted">Editor</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed commodi nostrum, ab libero voluptas officia.
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
                      class="img-fluid rounded-circle w-50 mb-3 authorImg"
                    />
                    <h3>Lin</h3>
                    <h5 class="text-muted">Designer</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed commodi nostrum, ab libero voluptas officia.
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

              <div class="col-lg-3 col-md-6 my-5">
                <div class="card">
                  <div class="card-body">
                    <img
                      src="img/Jithendra Mallipeddi.jpeg"
                      alt=""
                      class="img-fluid rounded-circle w-50 mb-3 authorImg"
                    />
                    <h3>Jithendra</h3>
                    <h5 class="text-muted">Designer</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed commodi nostrum, ab libero voluptas officia.
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

              <div class="col-lg-3 col-md-6 my-5">
                <div class="card">
                  <div class="card-body">
                    <img
                      src="img/Liu.jpeg"
                      alt=""
                      class="img-fluid rounded-circle w-50 mb-3 authorImg"
                    />
                    <h3>Liu</h3>
                    <h5 class="text-muted">Designer</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed commodi nostrum, ab libero voluptas officia.
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
