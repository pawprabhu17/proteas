import React from "react";
import "../css/home.css";
import Footer from "G:/webproject/proteas/src/components/Footers.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
class Home extends React.Component {
  state = {
    images: [
      {
        source: "https://pbs.twimg.com/media/D4bo0JuX4AAOQQA.jpg:large",
        alt: "PROTEAS"
      },
      {
        source:
          "https://www.cricket.com.au/~/-/media/News/2018/04/24SouthAfricafixture.ashx?w=1600",
        alt: "PROTEAS"
      },
      {
        source:
          "http://saca.org.za/wp-content/uploads/2016/02/Proteas-WorldT20-squad.jpg",
        alt: "PROTEAS"
      },
      {
        source:
          "https://www.kayafm.co.za/wp-content/uploads/2017/08/PROTEAS-WOMEN-3.jpg",
        alt: "PROTEAS"
      },
      {
        source: "https://pbs.twimg.com/media/Cc7JQCaWIAEUm3v.jpg:large",
        alt: "PROTEAS"
      }
    ]
  };
  render() {
    return (
      <div>
        <div className="sectionLight">
          <div className="row">
            <div className="col-sm-12">
              <div className="jumbotron jumbotron-fluid">
                <div className="container">
                  <h1 className="display-4">WELCOME TO PROTEAS CRICKET!</h1>
                  <p className="lead">
                    <em>
                      <b>WE DO WHAT NEEDS TO BE DONE ~ #PROTEAFIRE</b>
                    </em>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row my-0">
            <div className="col" />
            <div className="col-sm-12 col-md-8 col-xl-6">
              <Carousel
                autoPlay="true"
                infiniteLoop="true"
                useKeyboardArrows="true"
              >
                {this.state.images.map(image => {
                  return (
                    <div>
                      <img
                        src={image.source}
                        alt={image.alt}
                        className="w-100 img-fluid"
                      />
                    </div>
                  );
                })}
              </Carousel>
            </div>
            <div className="col" />
          </div>

          <div className="container profile-card mb-2">
            <div className="row p-2 p-md-4">
              <div className="col-4">
                <img
                  src="https://cricket.co.za/bp_images/CSAproteaslogo2016v2_1.png"
                  alt="PROTEAS"
                  className="my-3 d-none d-lg-block"
                ></img>
              </div>
              <div className="col-12 col-lg-4 text-light">
                <h1 className="mt-2 mt-md-4">
                  <strong>THE PROTEAS</strong>
                </h1>
                <div className="team-profile">
                  <p>
                    <b>Coach</b>: <em>Ottis Gibson</em>
                  </p>
                  <p>
                    <b>Test Captain</b>: <em>Faf Du Plesis</em>
                  </p>
                  <p>
                    <b>ODI Captain</b>: <em>Faf Du Plesis</em>
                  </p>
                  <p>
                    <b>T20 Captain</b>: <em>Quinton De Kock</em>
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="mt-md-4 d-none d-lg-block">
                  <div className="rank">
                    <p className="bg-dark text-light">Test Rank</p>
                    <span>
                      <big>
                        <b>3</b>
                      </big>
                    </span>
                  </div>
                  <div className="rank">
                    <p className="bg-dark text-light">ODI Rank</p>
                    <span>
                      <big>
                        <b>4</b>
                      </big>
                    </span>
                  </div>
                  <div className="rank">
                    <p className="bg-dark text-light">T20 Rank</p>
                    <span>
                      <big>
                        <b>2</b>
                      </big>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Home;
