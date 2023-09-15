import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container my-4">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Select your Query</label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>Web</option>
              <option>Tech Stack</option>
              <option>Technology</option>
              <option>Others</option>
            </select>
          </div>
          <div className="form-group row">
            <div className="col-sm-2">Are you a Member?</div>
            <div className="col-sm-10">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck1"
                />
                <label className="form-check-label" htmlFor="gridCheck1">
                  Yes
                </label>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-2">Are you a Professor?</div>
            <div className="col-sm-10">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck2"
                />
                <label className="form-check-label" htmlFor="gridCheck2">
                  Yes
                </label>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-2">Are you a Coder?</div>
            <div className="col-sm-10">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck3"
                />
                <label className="form-check-label" htmlFor="gridCheck3">
                  Yes
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">
              Tell us about yourself
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              defaultValue={""}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea2">
              Elaborate Your Concern
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea2"
              rows={3}
              defaultValue={""}
            />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
