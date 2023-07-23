import "./style.css";
import { useState, useEffect, Fragment } from "react";
import {
  faAnglesUp,
  faAnglesDown,
  faAnglesRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


function EducationItem() {
  const [isFold, setIsFold] = useState(false);

  useEffect(() => {
    console.log(isFold)
  }, [isFold]);

  const fontAwesomeIconClick = () => {
    setIsFold((prev) => !prev);
  }

  return (
    <div className="box">
      <div className="education-body"
        style={{
          borderBottom: "3px solid #333"
        }}>
        <div className="education">
          <div className="icon-box "
            onClick={fontAwesomeIconClick}>
            <FontAwesomeIcon
              icon={faAnglesDown}
              className="font-awesome-icon" />
          </div>
          <h1>Rednerging</h1>
          <div className="icon-box">
            <Link to={"/render"}>
              <FontAwesomeIcon icon={faAnglesRight} className="font-awesome-icon" />
            </Link>
          </div>
        </div>
      </div>
      {isFold && (
        <div className="education-body" style={{ padding: "0" }}>
          <div className="education" style={{ borderBottom: "2px solid rgb(51, 51, 51)" }}>
            <span style={{ width: "60px" }} />
            <h2>part 1. Chrominum</h2>
            <div className="icon-box">
              <Link>
                <FontAwesomeIcon icon={faAnglesRight} className="font-awesome-icon" />
              </Link>
            </div>
          </div>
          <div className="education" style={{ borderBottom: "2px solid rgb(51, 51, 51)" }}>
            <span style={{ width: "60px" }} />
            <h2>part 2. Web Browser Rednerging</h2>
            <div className="icon-box">
              <Link>
                <FontAwesomeIcon icon={faAnglesRight} className="font-awesome-icon" />
              </Link>
            </div>
          </div>
          <div className="education" >
            <span style={{ width: "60px" }} />
            <h2>part 3. CSR, SSR, SSG</h2>
            <div className="icon-box">
              <Link>
                <FontAwesomeIcon icon={faAnglesRight} className="font-awesome-icon" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EducationItem;
