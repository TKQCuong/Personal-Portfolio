import React from "react";

export default function Header() {
  return (
    <div>
      <header className="masthead" id="home">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">I am Cuong Tran</div>
            <div className="intro-heading text-uppercase">
              Full-stack Web Developer
            </div>
            <a
              className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
              href="#services"
            >
              Tell Me More
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
