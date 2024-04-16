import img1 from "../img/B (1).png";
import img2 from "../img/B (2).png";
import img3 from "../img/B (3).png";
import "./chaild.css";
export default function Chaild1() {
  return (
    <>
      <div className="main">
        <div className="band">
          <h1>Band Of Trust</h1>
        </div>
        <div className="allimg">
          <div className="band1">
            <a href="#">
              <img src={img1} />
            </a>
          </div>
          <hr />
          <div className="img">
            <a href="#">
              <img src={img2} />
            </a>
          </div>
          <hr />
          <div className="img">
            <a href="#">
              <img src={img3} />
            </a>
          </div>
        </div>
        <hr/>
      </div>
    </>
  );
}
