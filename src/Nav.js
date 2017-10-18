import React from "react";

const navLinks = [
  { url: "#process", text: "Process" },
  { url: "#about", text: "About" },
  { url: "#menu", text: "Menu" },
  { url: "#contact", text: "Contact" }
];

const Nav = () => (
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="false"
          aria-controls="navbar"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a className="navbar-brand pigeontec" href="/">
          Pigeontec
        </a>
      </div>
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav navbar-right">
          {navLinks.map(links => <a href={links.url}>{links.text}</a>)}
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;
