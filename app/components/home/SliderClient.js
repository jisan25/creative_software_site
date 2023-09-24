// use client is for client side components
"use client";
import React, { Component } from "react";
// slider component for react-slick slider
import Slider from "react-slick";

export default class SliderClient extends Component {
  render() {
    // slider configuration
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          {/* client */}
          <div className="">
            <img
              width="75%"
              src="/img/clients/client-1.png"
              className="img-fluid"
              alt=""
            />
          </div>
          {/* client */}
          <div className="">
            <img
              width="75%"
              src="/img/clients/client-2.png"
              className="img-fluid"
              alt=""
            />
          </div>
          {/* client */}
          <div className="">
            <img
              width="75%"
              src="/img/clients/client-3.png"
              className="img-fluid"
              alt=""
            />
          </div>
          {/* client */}
          <div className="">
            <img
              width="75%"
              src="/img/clients/client-4.png"
              className="img-fluid"
              alt=""
            />
          </div>
          {/* client */}
          <div className="">
            <img
              width="75%"
              src="/img/clients/client-5.png"
              className="img-fluid"
              alt=""
            />
          </div>
          {/* client */}
          <div className="">
            <img
              width="75%"
              src="/img/clients/client-6.png"
              className="img-fluid"
              alt=""
            />
          </div>
          {/* client */}
          <div className="">
            <img
              width="75%"
              src="/img/clients/client-7.png"
              className="img-fluid"
              alt=""
            />
          </div>
          {/* client */}
          <div className="">
            <img
              width="75%"
              src="/img/clients/client-8.png"
              className="img-fluid"
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}
