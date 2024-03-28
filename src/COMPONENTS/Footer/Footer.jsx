import React from "react";
import "./footer.css";
import Button from "@mui/material/Button";
export default function Footer() {
  return (
    <div className="footercontainer">
      <div className="emailpart">
        <div className="textpart">
          <h1 className="text1">Save time, save money!</h1>
          <h2 className="text2">
            Sign up and we'll send the best deals to you
          </h2>
        </div>
        <div className="inputpart">
          <input
            type="text"
            placeholder="Your email address"
            className="inputfield"
          />
          <Button className="emailbutton" variant="contained">
            search
          </Button>
        </div>
      </div>
      <div className="citiespart">
        <ul className="flists">
          <li className="flistitem">countries</li>
          <li className="flistitem">cities</li>
          <li className="flistitem">Regions</li>
          <li className="flistitem">Airports</li>
          <li className="flistitem">Hotels</li>
        </ul>
      </div>
    </div>
  );
}
