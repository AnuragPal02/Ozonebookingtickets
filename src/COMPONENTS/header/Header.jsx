import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import {
  faBed,
  faCar,
  faPlane,
  faShop,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="header">
      <div className="headercontainer">
        <div className="headerlist">
          <div className="headerlistitem active">
            <FontAwesomeIcon icon={faBed} />
            <span>stays</span>
          </div>
          <div className="headerlistitem">
            <FontAwesomeIcon icon={faPlane} />
            <span>stays</span>
          </div>
          <div className="headerlistitem">
            <FontAwesomeIcon icon={faCar} />
            <span>stays</span>
          </div>
          <div className="headerlistitem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>stays</span>
          </div>
          <div className="headerlistitem">
            <FontAwesomeIcon icon={faShop} />
            <span>stays</span>
          </div>
        </div>
      </div>
    </div>
  );
}
