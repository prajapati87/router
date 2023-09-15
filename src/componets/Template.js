import React from "react";
import thumb1 from "./images/thumb1.jpg"
import thumb2 from "./images/thumb2.jpg"
import thumb3 from "./images/thumb3.jpg"

const Template = () => {
  return (
    <div className="container my-4">
      <div className="row mb-2">
        <div className="col-md-6">
          <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary">
                World
              </strong>
              <h3 className="mb-0">Global Conferences</h3>
              <div className="mb-1 text-muted">Nov 12</div>
              <p className="card-text mb-auto">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <a href="/" className="stretched-link">
                Continue reading
              </a>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img
                className="bd-placeholder-img"
                width={200}
                height={250}
                src={thumb1}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-success">
                Design
              </strong>
              <h3 className="mb-0">Learn Designing</h3>
              <div className="mb-1 text-muted">Nov 11</div>
              <p className="mb-auto">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <a href="/" className="stretched-link">
                Continue reading
              </a>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img
                className="bd-placeholder-img"
                width={200}
                height={250}
                src="https://source.unsplash.com/500x700/?tech,code,laptop"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-md-6">
          <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-danger">
                FrontEnd
              </strong>
              <h3 className="mb-0">Bootstrap Templates</h3>
              <div className="mb-1 text-muted">Nov 12</div>
              <p className="card-text mb-auto">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <a href="/" className="stretched-link">
                Continue reading
              </a>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img
                className="bd-placeholder-img"
                width={200}
                height={250}
                src={thumb2}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-warning">
                Python
              </strong>
              <h3 className="mb-0">Learn Python</h3>
              <div className="mb-1 text-muted">Nov 11</div>
              <p className="mb-auto">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <a href="/" className="stretched-link">
                Continue reading
              </a>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img
                className="bd-placeholder-img"
                width={200}
                height={250}
                src={thumb3}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
