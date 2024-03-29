import React, { Component } from "react";
import abbadi from "../images/abbadi.jpg";
import abed from "../images/abed.jpg";
import ayyoub from "../images/ayyoub.jpg";
import sanabel from "../images/sanabel.jpg";
import ibrahim from "../images/ibrahim.jpg";
import latifa from "../images/latifa.png";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

export class Test extends Component {
  render() {
    return (
      <div className="icons-position1">
        <div>
          <h1 class="animate__animated animate__slideInUp">OUR TEAM</h1>
        </div>
        <head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
        </head>
        <div id="cards_landscape_wrap-2">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <div class="card-flyer">
                  <div class="text-box">
                    <div class="image-box">
                      <img src={abbadi} alt="" />
                    </div>
                    <div class="text-container">
                      <h6>Abdullah Alabbadi</h6>

                      <br></br>
                      <div>
                        <a href="https://github.com/Abdullah-Alabbadi">
                          <AiFillGithub size="1.7em" color="#3d84b8" />
                        </a>
                        <a href="https://github.com/Abdullah-Alabbadi">
                          <AiFillLinkedin size="1.7em" color="#3d84b8" />
                        </a>
                        <a href="https://github.com/Abdullah-Alabbadi">
                          <FaFacebookF size="1.46em" color="#3d84b8" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <div class="card-flyer">
                  <div class="text-box">
                    <div class="image-box">
                      <img src={abed} alt="" />
                    </div>
                    <div class="text-container">
                      <h6>Abdallah Alabed</h6>

                      <br></br>
                      <div>
                        <a href="https://github.com/abdallahAlabed">
                          <AiFillGithub size="1.7em" color="#3d84b8" />
                        </a>
                        <a href="https://github.com/abdallahAlabed">
                          <AiFillLinkedin size="1.7em" color="#3d84b8" />
                        </a>
                        <a href="https://github.com/abdallahAlabed">
                          <FaFacebookF size="1.46em" color="#3d84b8" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <div class="card-flyer">
                  <div class="text-box">
                    <div class="image-box">
                      <img src={ayyoub} alt="" />
                    </div>

                    <div class="text-container">
                      <h6>Ayyoub Al Keyyam</h6>

                      <br></br>
                      <div className="icons-position1">
                        <a href="https://github.com/ayyoubk">
                          <AiFillGithub size="1.7em" color="#3d84b8" />
                        </a>
                        <a href="https://github.com/ayyoubk">
                          <AiFillLinkedin size="1.7em" color="#3d84b8" />
                        </a>
                        <a href="https://github.com/ayyoubk">
                          <FaFacebookF size="1.46em" color="#3d84b8" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row justify-content-center">
              <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <div class="card-flyer">
                  <div class="text-box">
                    <div class="image-box">
                      <img src={sanabel} alt="" />
                    </div>
                    <div class="text-container">
                      <h6>Sanabel Abu Ezbead</h6>

                      <br></br>
                      <div>
                        <a href="https://github.com/Sanabel8">
                          <AiFillGithub size="1.7em" color="#3d84b8" />
                        </a>
                        <a href="https://github.com/Sanabel8">
                          <AiFillLinkedin size="1.7em" color="#3d84b8" />
                        </a>
                        <a href="https://github.com/Sanabel8">
                          <FaFacebookF size="1.46em" color="#3d84b8" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <div class="card-flyer">
                  <div class="text-box">
                    <div class="image-box">
                      <img src={ibrahim} alt="" />
                    </div>
                    <div class="text-container">
                      <h6>Ibrahim Alhamshari</h6>

                      <br></br>
                      <div>
                        <a href="https://github.com/ibrahim-alhamshari">
                          <AiFillGithub size="1.7em" color="#3d84b8" />
                        </a>
                        <a href="https://github.com/ibrahim-alhamshari">
                          <AiFillLinkedin size="1.7em" color="#3d84b8" />
                        </a>
                        <a href="https://github.com/ibrahim-alhamshari">
                          <FaFacebookF size="1.46em" color="#3d84b8" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <div class="card-flyer">
                  <div class="text-box">
                    <div class="image-box">
                      <img src={latifa} alt="" />
                    </div>

                    <div class="text-container">
                      <h6>Latifa Amaireh</h6>

                      <br></br>
                      <div>
                        <a href="https://github.com/latifaghassan">
                          <AiFillGithub size="1.7em" color="#3d84b8" />
                        </a>
                        <a href="https://github.com/latifaghassan">
                          <AiFillLinkedin size="1.7em" color="#3d84b8" />
                        </a>
                        <a href="https://github.com/latifaghassan">
                          <FaFacebookF size="1.46em" color="#3d84b8" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Test;
