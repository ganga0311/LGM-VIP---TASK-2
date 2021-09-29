import React, { Component } from "react";

class Footer extends Component {
  year = () => {
    let d = new Date();
    return d.getFullYear();
  };

  render() {
    return (
      <footer className="clearfix mt-4">
        <p>
          &copy; {this.year()}
          CONTACT:{" "}
          <a
            href="https://princesargbah.me"
            rel="noopener noreferrer"
            target="_blank"
          >
            Aman Kesarwani
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;
