import React from "react";
import { Link } from "react-router-dom";

import GoogleAuthWithRedux from "./GoogleAuthWithRedux";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streamer
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
        <GoogleAuthWithRedux />
      </div>
    </div>
  );
};

export default Header;
