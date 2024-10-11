import { useState } from "react";
import lists from "./Lists";
import Video from "./Video";
function Body() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };

  const map = lists.map((item, index) => {
    const isHovered = hoveredIndex === index;
    const styles = {
      backgroundColor: isHovered ? "gray" : "transparent",
      width: "70px",
      padding: "7px",
      opacity: isHovered ? "0.3" : "",
      borderRadius: "6px",
      color: isHovered ? "white" : "",
    };
    return (
      <div
        className="Buttons"
        style={styles}
        key={item.id}
        onMouseOver={() => handleMouseOver(index)}
        onMouseOut={handleMouseOut}
      >
        <span>{item.icon}</span>
        <p>{item.name}</p>
      </div>
    );
  });

  return (
    <div className="bodyFlex">
      <div className="first-cont">
        {" "}
        <Buttons name={map} />
      </div>
      <div className="first-cont">
        {" "}
        <Video />
      </div>
    </div>
  );
}

function Buttons({ name }) {
  return <>{name}</>;
}
export default Body;
