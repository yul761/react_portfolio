import React, { Component } from "react";
import SteadyWelife from "../assets/steadyWelife.PNG";
import welifeVideo from "../assets/welifeVideo.mp4";

export default class projects extends Component {
  render() {
    return (
      <div className="projects">
        <div className="projects__content">
          <div className="projects__content-welife">
            <div className="projects__content-welife--title">WeLife</div>
            <div className="projects__content-welife--preview">
              <div className="projects__content-welife--preview--container">
                <video
                  className="projects__content-welife--preview--container--src"
                  alt="steady_welife"
                  poster={SteadyWelife}
                  controls
                  autoPlay
                >
                  <source src={welifeVideo} type="video/mp4"></source>
                </video>
              </div>
            </div>
            <div className="projects__content-welife--description">
              <ul className="projects__content-welife--description--details">
                <li className="projects__content-welife--description--details--content">
                  Provide a platform for people to showcase not only their
                  talent but also their personalities.
                </li>
                <li className="projects__content-welife--description--details--content">
                  Use ‘MediaDevices’ WebApi for recording function
                </li>
                <li className="projects__content-welife--description--details--content">
                  Allow screen recording using ‘getDisplayMedia()’, which makes
                  it easier to share live demos of projects such as websites,
                  games, drawings, and mobile applications.
                </li>
                <li className="projects__content-welife--description--details--content">
                  Build the camera recording using ‘getUserMedia()’, so people
                  could document and share their special moments.
                </li>
                <li className="projects__content-welife--description--details--content">
                  Use ‘MediaRecorder()’ to store videos.
                </li>
                <li className="projects__content-welife--description--details--content">
                  Support local files to be uploaded to the community.
                </li>
                <li className="projects__content-welife--description--details--content">
                  Store images/videos url using FileReader() to make them
                  accessible to other users.
                </li>
                <li className="projects__content-welife--description--details--content">
                  Use ‘axios’ to communicate between frontend and backend.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
