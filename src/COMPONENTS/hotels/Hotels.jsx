import React from "react";
import "./hotels.css";
import Navbar from "../navbarr/Navbar";
import Header from "../header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faLocationArrow,
  faLocationDot,
  faLocationPin,
  faLocationPinLock,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer/Footer";
export default function Hotels() {
  const photos_array = [
    {
      src: "https://plus.unsplash.com/premium_photo-1661964225206-fd5d445a6edd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
    },
    {
      src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvdGVsfGVufDB8fDB8fHww",
    },
    {
      src: "https://images.unsplash.com/photo-1444201983204-c43cbd584d93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGhvdGVsfGVufDB8fDB8fHww",
    },
    {
      src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGhvdGVsfGVufDB8fDB8fHww",
    },
    {
      src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsfGVufDB8fDB8fHww",
    },
    {
      src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsfGVufDB8fDB8fHww",
    },
  ];
  return (
    <>
      <Navbar></Navbar>
      <Header type="list"></Header>

      <div className="hotelcontainer">
        <div className="textpart">
          <button className="booknow">Reserve or book now</button>
          <label className="texttitle">Tower Street Apartments</label>
          <div className="iconclass">
            <FontAwesomeIcon icon={faLocationDot} className="headericon" />
            <label className="region">old town,Poland</label>
          </div>
          <label className="region2">
            Excellent location - 500m from center
          </label>
          <label className="features">
            Books stay over $114 at this property and get a free airport taxi
          </label>
        </div>
        <div className="imagespart">
          <div className="imagewrapper">
            {photos_array.map((photo, index) => (
              <div className="hotelimg">
                <img key={index} src={photo.src} alt="img" />
              </div>
            ))}
          </div>
        </div>
        <div className="buycontainer">
          <div className="buyinfo">info</div>
          <div className="buytext">
            <h1>Perfect for a 9-night stay!</h1>
            <h2>Rate</h2>
            <div className="buybutton">Book now</div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
