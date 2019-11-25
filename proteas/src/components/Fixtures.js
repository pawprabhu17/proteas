import React from "react";
import "../css/fixtures.css";
import Footer from "G:/webproject/proteas/src/components/Footers.js";
import { ListGroup, ListGroupItem } from "reactstrap";
class Fixtures extends React.Component {
  state = {
    fixtures1: [
      {
        date: "26 Dec 2019 10:00",
        stadium: "SuperSport Park, Centurion"
      },
      {
        date: "03 Jan 2020 10:00",
        stadium: "Newlands, Cape Town"
      },
      {
        date: "16 Jan 2020 10:00",
        stadium: "St George's Park, Port Elizabeth"
      }
    ],
    fixtures2: [
      {
        date: "21 Feb 2020 18:00",
        stadium: "Wanderers Stadium, Johannesburg"
      },
      {
        date: "23 Feb 2020 14:30",
        stadium: "St George's Park, Port Elizabeth"
      },
      {
        date: "26 Feb 2020 18:00",
        stadium: "Newlands, Cape Town"
      },
      {
        date: "29 Feb 2020 13:00",
        stadium: "Boland Park, Paarl"
      }
    ],
    fixtures3: [
      {
        date: "14 Mar 2020 14:00",
        stadium: "SuperSport Park, Centurion"
      },
      {
        date: "18 Mar 2020 10:00",
        stadium: "Mangaung Oval, Bloemfontein"
      },
      {
        date: "14 Mar 2020 14:00",
        stadium: "Senwes Park, Potchefstroom"
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
                      <b>WE'RE SOUTH AFRICAN. WE NEVER GIVE UP ~ #PROTEAFIRE</b>
                    </em>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="container">
            <h2 className="d-none d-sm-block">
              <strong>ALL FIXTURES</strong>
            </h2>
            <div className="row">
              <div className="col-12 p-3">
                <h4 style={{ color: "#007e45" }}>
                  England Tour of South Africa 2019/20
                </h4>
                <ListGroup flush>
                  {this.state.fixtures1.map(fixture1 => {
                    return (
                      <ListGroupItem className="p-3">
                        <div className="row">
                          <div className="col-lg-3 text-muted">
                            <h6>{fixture1.date}</h6>
                            <p className="text-muted">(Test Match)</p>
                          </div>
                          <div className="col-lg-6 offset-2 offset-lg-1">
                            <h4 style={{ color: "#007e45" }}>
                              South Africa&nbsp;
                              <img
                                src="https://cricket.co.za/bp_images/flags/South_Africa.png"
                                alt="PROTEAS"
                                height="25px"
                                width="40px"
                              />
                              &nbsp;&nbsp;
                              <font style={{ color: "black" }}>
                                vs&nbsp;
                              </font>{" "}
                              England&nbsp;
                              <img
                                src="https://cricket.co.za/bp_images/flags/England.png"
                                alt="ENGLAND"
                                height="25px"
                                width="40px"
                              />
                            </h4>

                            <p className="text-muted mb-0 d-none d-lg-block">
                              <b>{fixture1.stadium}</b>
                            </p>
                          </div>
                          <div className="col-12 col-lg-2 offset-5  offset-lg-0">
                            <a href="https://www.ticketpros.co.za/portal/web/index.php/category/cricket">
                              <button className="btn mt-lg-0 mt-2">
                                TICKETS
                              </button>
                            </a>
                          </div>
                        </div>
                      </ListGroupItem>
                    );
                  })}
                </ListGroup>
              </div>
            </div>

            <div className="row">
              <div className="col-12 p-3">
                <h4 style={{ color: "#007e45" }}>
                  Australia Tour of South Africa 2020
                </h4>
                <ListGroup flush>
                  {this.state.fixtures2.map(fixture2 => {
                    return (
                      <ListGroupItem className="p-4">
                        <div className="row">
                          <div className="col-lg-3 text-muted">
                            <h6>{fixture2.date}</h6>
                            <p className="text-muted">(T20I Match)</p>
                          </div>
                          <div className="col-lg-6 offset-2 offset-lg-1">
                            <h4 style={{ color: "#007e45" }}>
                              South Africa&nbsp;
                              <img
                                src="https://cricket.co.za/bp_images/flags/South_Africa.png"
                                alt="PROTEAS"
                                height="25px"
                                width="40px"
                              />
                              &nbsp;&nbsp;
                              <font style={{ color: "black" }}>
                                vs&nbsp;
                              </font>{" "}
                              Australia&nbsp;
                              <img
                                src="https://cricket.co.za/bp_images/flags/Australia.png"
                                alt="AUSTRALIA"
                                height="25px"
                                width="40px"
                              />
                            </h4>

                            <p className="text-muted mb-0 d-none d-lg-block">
                              <b>{fixture2.stadium}</b>
                            </p>
                          </div>
                          <div className="col-12 col-lg-2 offset-5  offset-lg-0">
                            <a href="https://www.ticketpros.co.za/portal/web/index.php/category/cricket">
                              <button className="btn mt-2 mt-lg-0">
                                TICKETS
                              </button>
                            </a>
                          </div>
                        </div>
                      </ListGroupItem>
                    );
                  })}
                </ListGroup>
              </div>
            </div>

            <div className="row">
              <div className="col-12 p-3">
                <h4 style={{ color: "#007e45" }}>
                  Pakistan Tour of South Africa 2020
                </h4>
                <ListGroup flush>
                  {this.state.fixtures3.map(fixture3 => {
                    return (
                      <ListGroupItem className="p-4">
                        <div className="row">
                          <div className="col-lg-3 text-muted">
                            <h6>{fixture3.date}</h6>
                            <p className="text-muted">(ODI Match)</p>
                          </div>
                          <div className="col-lg-6 offset-2 offset-lg-1">
                            <h4 style={{ color: "#007e45" }}>
                              South Africa&nbsp;
                              <img
                                src="https://cricket.co.za/bp_images/flags/South_Africa.png"
                                alt="PROTEAS"
                                height="25px"
                                width="40px"
                              />
                              &nbsp;&nbsp;
                              <font style={{ color: "black" }}>
                                vs&nbsp;
                              </font>{" "}
                              Pakistan&nbsp;
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/2000px-Flag_of_Pakistan.svg.png"
                                alt="PAKISTAN"
                                height="30px"
                                width="45px"
                              />
                            </h4>

                            <p className="text-muted mb-0 d-none d-lg-block">
                              <b>{fixture3.stadium}</b>
                            </p>
                          </div>
                          <div className="col-12 col-lg-2 offset-5  offset-lg-0">
                            <a href="https://www.ticketpros.co.za/portal/web/index.php/category/cricket">
                              <button className="btn mt-2 mt-lg-0">
                                TICKETS
                              </button>
                            </a>
                          </div>
                        </div>
                      </ListGroupItem>
                    );
                  })}
                </ListGroup>
              </div>
            </div>
            <center>
              <a href="https://cricket.co.za/fixtures-and-results">
                <button className="btn my-3 load">LOAD MORE</button>
              </a>
            </center>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Fixtures;
