import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3,
  faJs,
  faPython,
  faBootstrap,
  faGit,
  faGithub,
  faReact,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const Comments = () => (
  <>
    <div className="card-container-home">
      <div className="card-home">
        <img
          className="myimage"
          src="https://media-content.ccbp.in/ccbp_prod/media/profile_pic/4c510fb0-e59e-403c-8dc0-12a781df1e90.jpeg"
          alt="myimage"
        />
      </div>
      <h1 className="myname">Teja Gulagani</h1>
      <h1 className="myname">FRONTEND DEVELOPER</h1>
      <div className="skillsContainer">
        <FontAwesomeIcon
          icon={faHtml5}
          style={{ fontSize: '80px', color: 'orange' }}
          className="skilllog"
        />
        <FontAwesomeIcon
          icon={faCss3}
          style={{ fontSize: '80px', color: 'blue' }}
          className="skilllog"
        />
        <FontAwesomeIcon
          icon={faJs}
          style={{ fontSize: '80px', color: 'yellow' }}
          className="skilllog"
        />
        <FontAwesomeIcon
          icon={faPython}
          style={{ fontSize: '80px', color: 'yellow' }}
          className="skilllog"
        />
        <FontAwesomeIcon
          icon={faBootstrap}
          style={{ fontSize: '80px', color: 'purple' }}
          className="skilllog"
        />
        <FontAwesomeIcon
          icon={faGit}
          style={{ fontSize: '80px', color: 'white' }}
          className="skilllog"
        />
        <FontAwesomeIcon
          icon={faGithub}
          style={{ fontSize: '80px', color: 'black' }}
          className="skilllog"
        />
        <FontAwesomeIcon
          icon={faReact}
          style={{ fontSize: '80px', color: 'blue' }}
          className="skilllog"
        />
        <FontAwesomeIcon
          icon={faNodeJs}
          style={{ fontSize: '80px', color: 'lightgreen' }}
          className="skilllog"
        />
        <FontAwesomeIcon
          icon={faDatabase}
          style={{ fontSize: '80px', color: 'blue' }}
          className="skilllog"
        />
        <h1 className="loading-text">.</h1>
      </div>
    </div>
  </>
);

export default Comments;
