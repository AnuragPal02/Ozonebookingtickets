import "./listhotels.css";
import Button from "@mui/material/Button";
import { useLocation } from "react-router-dom";
import Header from "../COMPONENTS/header/Header";
import Navbar from "../COMPONENTS/navbarr/Navbar";
import Searchitems from "../COMPONENTS/searchitems/Searchitems";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

export default function Listhotels() {
  //............................................................................

  const location = useLocation();
  const [date, setDate] = useState(location.state.date);
  const [destination, setDestination] = useState(location.state.destination);
  const [option, setOption] = useState(location.state.option);
  const [opendate, setOpendate] = useState(false);

  const placeholderText = `${format(
    date[0].startDate,
    "dd-MM-yyyy"
  )} to ${format(date[0].endDate, "dd-MM-yyyy")}`;

  //............................................................................
  return (
    <div>
      <Navbar></Navbar>
      <Header type="list"></Header>
      <div className="listcontainer">
        <div className="listwrapper">
          <div className="searchlist">
            <h1 className="title">search</h1>
            <h2 className="subtitle">Destination</h2>
            <input
              type="text"
              className="inputtext"
              placeholder={destination}
            />

            <h2 className="subtitle">checkin-date</h2>

            <input
              type="text"
              className="inputtext"
              placeholder={placeholderText}
              onClick={() => setOpendate(!opendate)}
            />
            {opendate && (
              <div className="calendar-container">
                {/* Your DateRange component or any other calendar component */}
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  minDate={new Date()}
                  ranges={date}
                  className="date"
                />
              </div>
            )}

            <h2 className="subtitle">options</h2>

            <div className="optionscontainer">
              <div className="optionlist">
                <h1 className="listtext">Max-price</h1>
                <input type="number" className="optioninput" />
              </div>
              <div className="optionlist">
                <h1 className="listtext">Min-price</h1>
                <input type="number" className="optioninput" />
              </div>

              <div className="optionlist">
                <h1 className="listtext">children</h1>
                <input type="number" className="optioninput" />
              </div>
              <div className="optionlistadult">
                <h1 className="listtext">Adult </h1>
                <input type="number" className="optioninput" />
              </div>

              <div className="optionlist">
                <h1 className="listtext">Room</h1>
                <input type="number" className="optioninput" />
              </div>

              <Button className="emailbutton" variant="contained">
                Search
              </Button>
            </div>
          </div>
          {/*search results*/}
          <div className="searchresultlist">
            <Searchitems></Searchitems>
            <Searchitems></Searchitems>
            <Searchitems></Searchitems>
            <Searchitems></Searchitems>
            <Searchitems></Searchitems>
          </div>
        </div>
      </div>
    </div>
  );
}
