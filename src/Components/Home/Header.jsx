import { IoDiamond } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import OverLay from "./OverLay";
import { useState } from "react";

function Header() {
  const [show, setShow] = useState(true);

  const HandlingShowing = () => {
    setShow((id) => !id);
  };
  return (
    <div className="header-flex">
      <div className="firstContent">
        {" "}
        <Hambuger show={show} onClick={HandlingShowing} />
      </div>
      <div className="extra">
        <Logos />
      </div>

      <div className="second-content">
        <SearchBar />
      </div>
      <div className="third-content">
        <Profile />
      </div>
      {show && <OverLay onClick={HandlingShowing} />}
    </div>
  );
}

function Logos() {
  return (
    <div className="logo-again">
      <IoDiamond className="diamonds" />
      <h2>Diamond</h2>
    </div>
  );
}

function Hambuger({ show, onClick }) {
  return (
    <>{show || <GiHamburgerMenu className="hamburger" onClick={onClick} />}</>
  );
}

function SearchBar() {
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);

  const handleHovering = () => {
    setHover((hove) => !hove);
  };
  const handleHovering2 = () => {
    setHover2((hove) => !hove);
  };

  return (
    <div className="mic">
      <div className="search-conatiner">
        <input type="text" name="search" />
        <FaSearch
          className="search"
          onMouseOver={handleHovering}
          onMouseOut={handleHovering}
        />
        <div className="tooltip" style={{ display: hover ? "block" : "none" }}>
          Search
        </div>
      </div>
      <div className="mcrophone">
        <FaMicrophone
          className="microphone"
          onMouseOver={handleHovering2}
          onMouseOut={handleHovering2}
        />
        <div
          className="tooltips"
          style={{ display: hover2 ? "block" : "none" }}
        >
          Search with your Voice
        </div>
      </div>
    </div>
  );
}

function Profile() {
  const [hovers, setHovers] = useState(false);
  const handleHovering3 = () => {
    setHovers((hove) => !hove);
  };
  return (
    <div className="profile-flex">
      <div>
        <FaBell
          className="bell"
          onMouseOver={handleHovering3}
          onMouseOut={handleHovering3}
        />
        <div
          className="tooltipss"
          style={{ display: hovers ? "block" : "none" }}
        >
          Notification
        </div>
      </div>
      <div className="cirlcle"></div>
    </div>
  );
}
export default Header;
