import React from "react";
import "../css/about.css";
import { Card, CardGroup } from "react-bootstrap";
import Footer from "G:/webproject/proteas/src/components/Footers.js";
class About extends React.Component {
  state = {
    sponsors: [
      {
        hrefTo: "http://www.standardbank.co.za/standardbank/",
        source: "https://cricket.co.za/bp_images/sponsors/1.png",
        alt: "Standard Bank"
      },
      {
        hrefTo: "https://www.momentum.co.za/for",
        source: "https://cricket.co.za/bp_images/sponsors/2.png",
        alt: "Momentum"
      },
      {
        hrefTo: "http://sunfoil.co.za",
        source: "https://cricket.co.za/bp_images/sponsors/3.png",
        alt: "Sunfoil"
      },
      {
        hrefTo: "https://kfc.co.za/",
        source: "https://cricket.co.za/bp_images/sponsors/4.png",
        alt: "KFC"
      },
      {
        hrefTo: "https://www.newbalance.co.za/cricket-south-africa",
        source: "https://cricket.co.za/bp_images/sponsors/5.png",
        alt: "New Balance"
      },
      {
        hrefTo: "http://www.castlelager.co.za/agegate?destination=",
        source: "https://cricket.co.za/bp_images/sponsors/6.png",
        alt: "Castle Lager"
      },
      {
        hrefTo:
          "https://www.ticketpros.co.za/portal/web/index.php/category/cricket",
        source: "https://cricket.co.za/bp_images/sponsors/11.png",
        alt: "Ticket Pro"
      },
      {
        hrefTo: "https://www.supersport.com/",
        source: "https://cricket.co.za/bp_images/sponsors/12.png",
        alt: "SuperSport"
      },
      {
        hrefTo: "https://www.coca-colaafrica.com/",
        source: "https://cricket.co.za/bp_images/sponsors/14.png",
        alt: "CocaCola"
      }
    ]
  };
  render() {
    return (
      <div>
        <div className="sectionLight mb-2">
          <div className="row">
            <div className="col-sm-12">
              <div className="jumbotron jumbotron-fluid">
                <div className="container">
                  <h1 className="display-4">WELCOME TO PROTEAS CRICKET!</h1>
                  <p className="lead">
                    <em>
                      <b>FOR TEAM. FOR COUNTRY. FOR ALL ~ #PROTEAFIRE</b>
                    </em>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <CardGroup>
              <h2 className="d-none d-sm-block">
                <strong>VISION & MISSION</strong>
              </h2>
              <div className="row">
                <div className="col-lg-6 d-flex align-items-stretch">
                  <Card
                    className="mt-5 mt-lg-2 p-3"
                    style={{ background: "#F0C704", color: "#007E45" }}
                  >
                    <Card.Title>
                      <center>
                        <h1>VISION</h1>
                      </center>
                    </Card.Title>
                    <Card.Body>
                      <Card.Text style={{ fontSize: "20px" }}>
                        <p>
                          Cricket South Africa's vision is to make cricket a
                          truly national sport of winners.
                          <br />
                          <br />
                          This has two elements to it:
                          <ul>
                            <li>
                              To ensure that cricket is supported by the
                              majority of South Africans, and available to all
                              who want to play it.
                            </li>
                            <li>
                              To pursue excellence at all levels of the game.
                            </li>
                            <li>
                              Optimising commercials rights and properties on
                              behalf of its Affiliates and Associates.
                            </li>
                            <li>
                              Implementing good governance based on King 3, and
                              matching diligence, honesty and transparency to
                              all our activities.
                            </li>
                          </ul>
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-lg-6 d-flex align-items-stretch">
                  <Card
                    className="mt-5 mt-lg-2 p-3"
                    style={{ background: "#007E45", color: "#F0C704" }}
                  >
                    <Card.Title>
                      <center>
                        <h1>MISSION</h1>
                      </center>
                    </Card.Title>
                    <Card.Body>
                      <Card.Text style={{ fontSize: "20px" }}>
                        <p>
                          As the governing body of cricket in South Africa,
                          Cricket South Africa will be led by:
                        </p>
                        <br />
                        <br />
                        <ul>
                          <li>
                            Promoting and protecting the game and its unique
                            spirit in the context of a democratic South Africa.
                          </li>
                          <li>
                            Basing our activities on fairness, which includes
                            inclusivity and non-discrimination.
                          </li>
                          <li>
                            Accepting South Africa's diversity as a strength.
                          </li>
                          <li>Delivering outstanding, memorable events.</li>
                          <li>
                            Providing excellent service to Affiliates,
                            Associates and Stakeholders.
                          </li>
                        </ul>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </CardGroup>
            <br />
            <h2 className="d-none d-sm-block">
              <strong>SPONSORS</strong>
            </h2>
            <div className="row my-2 p-4 bg-light">
              {this.state.sponsors.map(sponsor => {
                return (
                  <div className="col-lg-3 col-sm-5 d-none d-sm-inline offset-sm-1 offset-lg-1 my-3">
                    <a
                      href={sponsor.hrefTo}
                      target="blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={sponsor.source}
                        alt={sponsor.alt}
                        className="trans"
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
export default About;
