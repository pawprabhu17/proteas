import React from "react";
import "../css/fans.css";
import Footer from "G:/webproject/proteas/src/components/Footers.js";
class Fans extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: ""
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append("file", this.uploadInput.files[0]);
    data.append("filename", this.fileName.value);

    fetch("http://localhost:4000/upload", {
      method: "POST",
      body: data
    }).then(response => {
      response.json().then(body => {
        this.setState({ imageURL: `http://localhost:4000/${body.file}` });
      });
    });
  }
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
                      <b>UMLILO UHLALA UTSHISA ~ #PROTEAFIRE</b>
                    </em>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container my-5">
            <h2>
              <strong>UPLOAD YOUR CRAZY FAN PIC!!</strong>
            </h2>
            <div className="row">
              <div className="col-12">
                <form onSubmit={this.handleUploadImage}>
                  <div className="form-group">
                    <input
                      ref={ref => {
                        this.uploadInput = ref;
                      }}
                      type="file"
                      className="form-control-file"
                    />
                  </div>
                  <br />
                  <div>
                    <input
                      ref={ref => {
                        this.fileName = ref;
                      }}
                      type="text"
                      size="50"
                      placeholder="Enter the name of file"
                    />
                  </div>
                  <br />
                  <div>
                    <button className="btn">Upload</button>
                  </div>
                  <hr />
                  <p>Uploaded Image:</p>
                  <img
                    src={this.state.imageURL}
                    alt="To see an image first upload any image"
                    height="30%"
                    width="30%"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Fans;
