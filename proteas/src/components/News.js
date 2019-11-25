import React from "react";
import "../css/news.css";
import Footer from "G:/webproject/proteas/src/components/Footers.js";

class News extends React.Component {
  state = {
    news: [
      {
        header: "Lee and Luus bat Proteas to record-breaking win",
        hrefTo:
          "https://cricket.co.za/news/31985/Lee-and-Luus-bat-Proteas-to-record-breaking-win",
        source:
          "https://cricket.co.za/bp_images/2019/10/Lizelle_Lee640_600x400.jpg",
        date: "05 OCT 2019",
        body:
          "An outstanding 144-run partnership between Lizelle Lee and Sune Luus paved the way for the Proteas Women to secure a record 105-run victory over India in their final Twenty20 International at the Lalabhai Contractor Stadium in Surat.",
        alt: "News1"
      },
      {
        header:
          "Paarl Gymnasium edge Paarl RPC in exciting Momentum Friendship Games opener",
        hrefTo:
          "https://cricket.co.za/news/31974/Paarl-Gymnasium-edge-Paarl-RPC-in-exciting-Momentum-Friendship-Games-opener",
        source:
          "https://cricket.co.za/bp_images/2019/10/rpc_paarl_captains640_600x400.jpg",
        date: "05 OCT 2019",
        body:
          "The Standard Bank Paarl Regional Performance Centre (RPC) went down by four wickets in a low-scoring thriller in the Momentum Friendship Games season-opening clash against Paarl Gymnasium at the Parys Sports Grounds in Paarl on Friday.",
        alt: "News2"
      },
      {
        header: "Newlands Test match and WP cricket operations on track",
        hrefTo:
          "https://cricket.co.za/news/31972/Newlands-Test-match-and-WP-cricket-operations-on-track",
        source:
          "https://cricket.co.za/bp_images/2019/10/thabang_moroe640_1_600x400.jpg",
        date: "04 OCT 2019",
        body:
          "CRICKET SOUTH AFRICA (CSA) and the Western Province Cricket Association (WPCA) had a successful meeting this week to put plans in place for a successful hosting of the iconic New Year Test match between the Standard Bank Proteas and England.",
        alt: "News3"
      },
      {
        header: "Knights and Warriors raring to go",
        hrefTo:
          "https://cricket.co.za/news/31970/Knights-and-Warriors-raring-to-go",
        source:
          "https://cricket.co.za/bp_images/2019/10/Raynard_van_Tonder640_600x400.jpg",
        date: "04 OCT 2019",
        body:
          "VKB Knights coach Alan Kruger says his team are raring to go ahead of their 4-Day Domestic Series opener against the Warriors at the Diamond Oval in Kimberley on Monday.",
        alt: "News4"
      },
      {
        header:
          "Elgar, De Kock score maiden Test tons in India on dominant Proteas day",
        hrefTo:
          "https://cricket.co.za/news/31963/Elgar-De-Kock-score-maiden-Test-tons-in-India-on-dominant-Proteas-day",
        source: "https://cricket.co.za/bp_images/2019/10/dean_web_600x400.jpg",
        date: "04 OCT 2019",
        body:
          "DEAN ELGAR and Quinton de Kock both scored their maiden Test centuries against India as the Standard Bank Proteas fought back impressively on the third day of the first Test match at Vizakhapatnam on Friday.",
        alt: "News5"
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
                      <b>WE KNOW WHO WE PLAY FOR ~ #PROTEAFIRE</b>
                    </em>
                  </p>
                </div>
              </div>
            </div>

            <div className="container">
              <h2 className="d-none d-sm-block">
                <strong>NEWS</strong>
              </h2>
              <div className="row">
                {this.state.news.map(news => {
                  return (
                    <div className="col-12">
                      <ul className="list-group my-2 ">
                        <li className="list-group-item">
                          <a
                            href={news.hrefTo}
                            target="blank"
                            style={{ textDecoration: "none" }}
                          >
                            <h3>{news.header}</h3>
                          </a>
                          <br />
                          <div className="row">
                            <div className="col-12 col-xl-4">
                              <img
                                src={news.source}
                                alt={news.alt}
                                height="200px"
                                width="300px"
                                className="my-1"
                              />
                            </div>

                            <div className="col-12 col-xl-8">
                              <strong>
                                <p className="text-muted">{news.date}</p>
                              </strong>
                              <p
                                className="d-block"
                                style={{
                                  fontFamily: "arial",
                                  fontSize: "18px"
                                }}
                              >
                                {news.body}
                              </p>
                              <a href={news.hrefTo}>
                                <br />
                                <button className="btn">READ MORE...</button>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default News;
