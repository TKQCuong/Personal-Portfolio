import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn
} from "mdbreact";

export default function Contact() {
  return (
    <>
      {/* <h1 className="contact-title">Contact me</h1> */}
      <div className="contact" id="contact">
        <div className="form-contact">
          <MDBContainer id="contact">
            >
            <MDBRow>
              <MDBCol md="30">
                <MDBCard>
                  <MDBCardBody className="demo">
                    <MDBCardHeader className="form-header warm-flame-gradient rounded contact-header">
                      <h3 className="my-3">
                        <MDBIcon
                          icon="bell"
                          size="1.5x"
                          className="cyan-text pr-3 contact-icon"
                        />
                        Contact Me
                      </h3>
                    </MDBCardHeader>

                    <label
                      htmlFor="defaultFormEmailEx"
                      className="grey-text font-weight-light label-style"
                    >
                      Your name
                    </label>
                    <input
                      type="text"
                      id="defaultFormEmailEx"
                      className="form-control"
                    />

                    <label
                      htmlFor="defaultFormEmailEx"
                      className="grey-text font-weight-light label-style"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="defaultFormEmailEx"
                      className="form-control"
                    />

                    <label
                      htmlFor="defaultFormPasswordEx"
                      className="grey-text font-weight-light label-style"
                    >
                      Message
                    </label>
                    <input
                      type="text"
                      id="defaultFormPasswordEx"
                      className="form-control message"
                    />

                    <div className="text-center mt-4">
                      <MDBBtn
                        color="deep-orange"
                        className="mb-3"
                        type="submit"
                      >
                        Send Message
                      </MDBBtn>
                    </div>

                    <MDBModalFooter>
                      <div className="font-weight-light contact-footer">
                        <p className="text-footer">
                          If you are interested in my profile don't hesitate to
                          leave me a message or contact me directly via...
                        </p>
                        <p id="footer-detail">
                          <i class="fas fa-map-marker-alt"></i>546 Dien Bien Phu
                        </p>
                        <p id="footer-detail">
                          <i class="fas fa-mobile-alt"></i>0906.808.810
                        </p>
                        <p id="footer-detail">
                          <i class="far fa-envelope"></i>
                          trankyquoccuong@gmail.com
                        </p>
                        <span className="connect">
                          <a href="https://github.com/" target="_blank">
                            {" "}
                            <b>GitHub &nbsp;&nbsp;&nbsp;</b>
                          </a>
                          <a
                            href="https://www.linkedin.com/feed/"
                            target="_blank"
                          >
                            <b>LinkedIn</b>
                          </a>
                        </span>
                      </div>
                    </MDBModalFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>

        <div className="copyright">
          <p>
            &copy; 2019
            <script>
              new Date().getFullYear()>2010&&document.write("-"+new
              Date().getFullYear());
            </script>
            , <b>Cuong Tran</b>. All Rights Reserved
          </p>
          <p>Designed by BootstrapMade</p>
          <p></p>
        </div>
      </div>
    </>
  );
}
