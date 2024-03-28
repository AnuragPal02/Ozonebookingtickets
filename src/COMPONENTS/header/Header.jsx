import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import {
  faBed,
  faCalendarAlt,
  faCar,
  faPerson,
  faPlane,
  faShop,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header({ type }) {
  ////state initialization

  const [open, setOpenOption] = useState(false);
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState("");
  const navigate = useNavigate();
  ////functions handling
  const [option, setOption] = useState({
    adult: 0,
    children: 0,
    room: 0,
  });
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const updatedOption = (key, value) => {
    setOption((prevOpt) => ({
      ...prevOpt,
      [key]: Math.max(0, prevOpt[key] + value),
    }));
  };

  const handleonclick = () => {
    navigate("/listhotels", { state: { destination, date, option } });
  };
  //
  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headercontainer listmode" : "headercontainer"
        }
      >
        <div className="headerlist">
          <div className="headerlistitem active">
            <FontAwesomeIcon icon={faBed} />
            <span>stays</span>
          </div>
          <div className="headerlistitem ">
            <FontAwesomeIcon icon={faPlane} />
            <span>stays</span>
          </div>
          <div className="headerlistitem ">
            <FontAwesomeIcon icon={faCar} />
            <span>stays</span>
          </div>
          <div className="headerlistitem ">
            <FontAwesomeIcon icon={faTaxi} />
            <span>stays</span>
          </div>
          <div className="headerlistitem ">
            <FontAwesomeIcon icon={faShop} />
            <span>stays</span>
          </div>
        </div>

        {type !== "list" && (
          <>
            <div className="content">
              <h1 className="moto">A Lifetime of discounts? It's Genius</h1>
              <p>
                Get rewarded for your trav els - unlock instant savings of 10%
                or more with a free ozonebooking account
              </p>
              <button className="motobutton">signin/register</button>
            </div>
            <div className="headersearch">
              <div className="headersearchcontainer">
                <div className="headersearchitem">
                  <FontAwesomeIcon icon={faBed} className="headericon" />
                  <input
                    type="text"
                    placeholder="Entery nearyby.."
                    className="headersearchinput"
                    onChange={(e) => setDestination(e.target.value)}
                  ></input>
                </div>
                <div className="headersearchitem">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="headericon"
                  />
                  <span
                    className="searchperson"
                    onClick={() => setOpenDate(!openDate)}
                    style={{ cursor: "pointer" }}
                  >
                    {format(date[0].startDate, "dd-MM-yyyy")} to
                    {format(date[0].endDate, "dd-MM-yyyy")}
                  </span>

                  {openDate && (
                    <div className="calendar-container">
                      {/* Your DateRange component or any other calendar component */}
                      <DateRange
                        editableDateInputs={true}
                        onChange={(item) => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
                      />
                    </div>
                  )}
                </div>

                <div className="headersearchitem">
                  <FontAwesomeIcon icon={faPerson} className="headericon" />
                  <span
                    className="searchperson"
                    onClick={() => setOpenOption(!open)}
                    style={{ cursor: "pointer" }}
                  >
                    {`${option.adult}adult . ${option.children} children . ${option.room}room`}
                  </span>

                  {open && (
                    <div className="optionselectordiv">
                      <div className="buttonsdiv">
                        <div className="adultbutton">
                          <span>adult</span>
                          <button
                            className="dec"
                            onClick={() => updatedOption("adult", -1)}
                            style={{ cursor: "pointer" }}
                          >
                            -
                          </button>
                          <span>{option.adult}</span>
                          <button
                            className="inc"
                            onClick={() => updatedOption("adult", +1)}
                            style={{ cursor: "pointer" }}
                          >
                            +
                          </button>
                        </div>

                        <div className="childbutton">
                          <span>child</span>
                          <button
                            className="dec"
                            onClick={() => updatedOption("children", -1)}
                            style={{ cursor: "pointer" }}
                          >
                            -
                          </button>
                          <span>{option.children}</span>
                          <button
                            className="inc"
                            onClick={() => updatedOption("children", +1)}
                            style={{ cursor: "pointer" }}
                          >
                            +
                          </button>
                        </div>

                        <div className="roombutton">
                          <span>room</span>
                          <button
                            className="dec"
                            onClick={() => updatedOption("room", -1)}
                            style={{ cursor: "pointer" }}
                          >
                            -
                          </button>
                          <span>{option.room}</span>
                          <button
                            className="inc"
                            onClick={() => updatedOption("room", +1)}
                            style={{ cursor: "pointer" }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  <button
                    className="headersearchbutton"
                    onClick={handleonclick}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>{" "}
          </>
        )}
      </div>
    </div>
  );
}
