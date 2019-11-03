import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function AboutMe() {
  return (
    <div className="AboutMe" id="about">
      <Container>
        <h1>ABOUT ME</h1>
        <h3>Name: Tran Ky Quoc Cuong</h3>
        <h3>Profile: Full stack developer</h3>
        <h3>Email: trankyquoccuong@gmail.com</h3>
        <h3>Phone: 0906.808.810</h3>
        <Row className="aboutme-card">
          <Col xs>
            <Card style={{ width: "30rem" }} className="small-card">
              <Card.Body>
                <Card.Title className="small-title">Education</Card.Title>
                <Card.Text className="text-muted">
                  <b>23 Sep 2019 - Now</b>:{" "}
                  <mark>CoderSchool, HCMC, Vietnam</mark> - A three-month
                  bootcamp where I learned about Full-stack Web development.
                </Card.Text>
                <br></br>
                <Card.Text className="text-muted">
                  <b>2013 – 2014</b>:{" "}
                  <mark>
                    B.A. (Hons) Business Administration by University of
                    Greenwich (UK)
                  </mark>{" "}
                  specialized in Banking and Finance: Second Class.
                </Card.Text>
                <br></br>
                <Card.Text className="text-muted">
                  <b>2011 – 2013</b>: Advanced Diploma by{" "}
                  <mark>ERC Institute Vietnam.</mark>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs>
            <Card style={{ width: "30rem" }} className="small-card">
              <Card.Body>
                <Card.Title className="small-title">
                  Work Experiences
                </Card.Title>
                <Card.Text className="text-muted">
                  <b>03 June 2019 – 20 Aug 2019: </b>
                  <mark>UNITED OVERSEAS BANK VIETNAM - Retail VRM</mark>
                  <ul>
                    <li>
                      Providing Unsecured Loan product to Seller doing business
                      in Social platforms
                    </li>
                    <li>
                      Maintaining relationship with existing customer for
                      referrals and cross-selling
                    </li>
                  </ul>
                </Card.Text>
                <Card.Text className="text-muted">
                  <b>June 2016 – Nov 2018: </b>
                  <mark>SHINHAN BANK VIETNAM - Retail Loan Officer</mark>
                  <ul>
                    <li>
                      Checking and verifying customer’s income source using both
                      telephone and Site visit method
                    </li>
                    <li>
                      Creating and selling loan products to existing customers
                    </li>
                    <li>
                      Preparing loan documents before notarization and
                      disbursement from all kind of loan products.
                    </li>
                  </ul>{" "}
                </Card.Text>
                <Card.Text className="text-muted">
                  <b>20 Apr 15 – 20 Oct 15: </b>
                  <mark>
                    CITIBANK VIETNAM N.A - Legal Documentation Support – CRMS
                    Department
                  </mark>
                  <ul>
                    <li>
                      Working mainly with business documents (GSG clients):
                      Process documents before sending them out to related
                      parties, verifying the validity of documents through
                      signatures, stamps and authorities checking.
                    </li>
                    <li>
                      Handling projects from the State Bank of Vietnam (SBV) and
                      Updating day to day requests from clients into system for
                      the use of otherteams.
                    </li>
                  </ul>{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
