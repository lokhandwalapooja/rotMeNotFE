import React from "react";

const Video = (props) => {
  return (
    <section id="video-play">
      <div className="dark-overlay">
        <div className="row">
          <div className="col">
            <div className="container p-5">
              <a
                href="#"
                className="video"
                dataVideo="https://www.youtube.com/embed/HnwsG9a5riA"
                dataToggle="modal"
                dataTarget="#videoModal"
              >
                <i className="fas fa-play fa-3x"></i>
              </a>
              <h1>See What We Do</h1>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- VIDEO MODAL --> */}
      <div className="modal fade" id="videoModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <button className="close" dataDismiss="modal">
                <span>&times;</span>
              </button>
              <iframe
                src=""
                frameborder="0"
                height="350"
                width="100%"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
