import { BsThreeDotsVertical } from "react-icons/bs";

function Video() {
  return (
    <div className="the-real-grid">
      <EachVideo />
      <EachVideo />
      <EachVideo />
      <EachVideo />
      <EachVideo />
      <EachVideo />
      <EachVideo />
    </div>
  );
}

function EachVideo() {
  return (
    <div className="video-grid">
      <img src="./image/image-product-1.jpg" alt="" />
      <div className="sub-flex">
        <div className="sub-content">
          <div className="cirlcle"></div>
          <div className="content">
            <h5>Music Title</h5>
            <p>Artiste</p>
            <span>Engagement</span>
          </div>
        </div>
        <div className="three-dot">
          <BsThreeDotsVertical className="three" />
        </div>
      </div>
    </div>
  );
}

export default Video;
