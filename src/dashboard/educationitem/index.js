import "./style.css";

import {
  faAnglesUp,
  faAnglesDown,
  faAnglesRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


function EducationItem() {
  return (
    <div className="box">
      <div className="education-body">
        <div className="education">
          <div className="icon-box">
            <FontAwesomeIcon icon={faAnglesDown} className="font-awesome-icon" />
          </div>
          <h1>hello</h1>
          <div className="icon-box">
            <Link>
              <FontAwesomeIcon icon={faAnglesRight} className="font-awesome-icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationItem;
