import { IoDiamond } from "react-icons/io5";
import List from "./List";
import { useState } from "react";
export default function OverLay({ onClick }) {
  const [hover, setHover] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
    setHover(true);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
    setHover(false);
  };

  const map = List.map((item, index) => {
    const isHovered = hoveredIndex === index;
    const shows = {
      backgroundColor: isHovered ? "lightGray" : "transparent",
      padding: `7px 8px`,
      borderRadius: 6,
      width: 90 + "%",
      color: isHovered ? "black" : "",
      transition: "backgroundColor 0.2s ease, color 0.2s ease",
    };
    return (
      <div
        className="flex-icons"
        style={shows}
        key={item.id}
        onMouseOver={() => handleMouseOver(index)}
        onMouseOut={handleMouseOut}
      >
        <span style={{ fontSize: "20px", fontWeight: "600" }}>{item.icon}</span>
        <p className="p-tag">{item.name}</p>
      </div>
    );
  });
  return (
    <div className="overlay" onClick={onClick}>
      <Logoss />
      <Icons icon={map} />
    </div>
  );
}

function Logoss() {
  return (
    <div className="logo-again">
      <IoDiamond className="diamonds" />
      <h2>Diamond</h2>
    </div>
  );
}

function Icons({ icon }) {
  return <div>{icon}</div>;
}
