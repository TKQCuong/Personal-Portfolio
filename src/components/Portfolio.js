import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import IMDB from "../img/imdb.png";
import twitter from "../img/twitter.png";
import monster from "../img/monster.png";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <Container>
        <h1>PORTFOLIO</h1>
        <h3>Check out my latest projects</h3>
        <Row className="portfolio-card">
          <Col>
            <Card style={{ width: "18rem" }} className="card-parent">
              <a
                href="https://dreamy-ritchie-2b7a02.netlify.com"
                target="_blank"
              >
                <img
                  alt="twitter"
                  variant="top"
                  className="img-project"
                  src={IMDB}
                />
              </a>{" "}
              <Card.Body>
                <Card.Title>IMDB</Card.Title>
                <Card.Text>
                  I made this project using ReactJS that use the real
                  information about Movie by fetching an API from THEMOVIEDB.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }} className="card-parent">
              <a
                href="https://sleepy-poitras-8e1c30.netlify.com"
                target="_blank"
              >
                <img
                  alt="twitter"
                  variant="top"
                  className="img-project"
                  src={twitter}
                />
              </a>{" "}
              <Card.Body>
                <Card.Title>Twitter</Card.Title>
                <Card.Text>
                  This is a Group project we build as a Social networking
                  website that used Javascript
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }} className="card-parent">
              <a
                href="https://wizardly-mclean-b650be.netlify.com"
                target="_blank"
              >
                <img
                  alt="twitter"
                  variant="top"
                  className="img-project"
                  src={monster}
                />
              </a>{" "}
              <Card.Body>
                <Card.Title>Monster</Card.Title>
                <Card.Text>
                  The first mini game that I build which based on JS, gaming
                  field is interesting but indeed chanllenging..
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
