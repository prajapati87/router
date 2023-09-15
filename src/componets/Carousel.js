import React from 'react'
import Img1 from './images/1.jpg'
import Img2 from './images/2.jpg'
import Img3 from './images/3.jpg'

const Carousel = () => {
  return (
    <div
  id="carouselExampleCaptions"
  className="carousel slide carousel-fade"
  data-ride="carousel"
>
  <ol className="carousel-indicators">
    <li
      data-target="#carouselExampleCaptions"
      data-slide-to={0}
      className="active"
    />
    <li data-target="#carouselExampleCaptions" data-slide-to={1} />
    <li data-target="#carouselExampleCaptions" data-slide-to={2} />
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Img1} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h2>Welcome to iCoder</h2>
        <p>Technology News, Development and Trends</p>
        <button className="btn btn-danger">Technology</button>
        <button className="btn btn-primary">Web Development</button>
        <button className="btn btn-success">Tech Fun</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Img2} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h2>The Best Coding Blog</h2>
        <p>Technology News, Development and Trends</p>
        <button className="btn btn-danger">Technology</button>
        <button className="btn btn-primary">Web Development</button>
        <button className="btn btn-success">Tech Fun</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Img3} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h2>Award winning Blog</h2>
        <p>Technology News, Development and Trends</p>
        <button className="btn btn-danger">Technology</button>
        <button className="btn btn-primary">Web Development</button>
        <button className="btn btn-success">Tech Fun</button>
      </div>
    </div>
  </div>
  <a
    className="carousel-control-prev"
    href="#carouselExampleCaptions"
    role="button"
    data-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a
    className="carousel-control-next"
    href="#carouselExampleCaptions"
    role="button"
    data-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>

  )
}

export default Carousel
