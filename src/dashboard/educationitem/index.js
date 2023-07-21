import "./style.css";

import {
  faArrowUpRightFromSquare,
  faAngleUp,
  faAnglesDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function EducationItem() {
  return (
    <div className="box">
      <div className="education-body">
        <div className="education">
          <FontAwesomeIcon icon={faAnglesDown} />
          <h1>hello</h1>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </div>
      </div>
    </div>
  );
}

export default EducationItem;
