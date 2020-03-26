import React, { Component } from "react";
import SteadyWelife from "../assets/steadyWelife.PNG";
import welifeVideo from "../assets/welifeVideo.mp4";
import CovidPoster from "../assets/COVID-19-poster.png";
import CovidVideo from "../assets/COVID_19_Tracker_videosample.mov";

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
                <li className="projects__content-welife--description--details--content">
                  Deployed address :{" "}
                  <a href="https://welife.herokuapp.com">
                    https://welife.herokuapp.com
                  </a>
                </li>
                <li className="projects__content-welife--description--details--content">
                  Github address :{" "}
                  <a href="https://github.com/yul761/WeLife">
                    https://github.com/yul761/WeLife
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/******************* COVID 19 Tracker***************************/}
        <div className="projects__content">
          <div className="projects__content-covidTracker">
            <div className="projects__content-covidTracker--title">
              COVID 19 Tracker
            </div>
            <div className="projects__content-covidTracker--preview">
              <div className="projects__content-covidTracker--preview--container">
                <video
                  className="projects__content-covidTracker--preview--container--src"
                  alt="steady_welife"
                  poster={CovidPoster}
                  controls
                  autoPlay
                >
                  <source src={CovidVideo} type="video/mp4"></source>
                </video>
              </div>
            </div>
            <div className="projects__content-covidTracker--description">
              <ul className="projects__content-covidTracker--description--details">
                <li className="projects__content-covidTracker--description--details--content">
                  A web application that visualize and track the data of
                  COVID_19 ,such as total cases, total deaths ..., to have a
                  better understanding how COVID_19 is impacting the whole
                  world.
                </li>
                <li className="projects__content-covidTracker--description--details--content">
                  Use 'react-chartjs-2' package to create the chart
                </li>
                <li className="projects__content-covidTracker--description--details--content">
                  Use 'react-select' package to create a searchable dropdown bar
                </li>
                <li className="projects__content-covidTracker--description--details--content">
                  Data is fetched using 'axios' from the API called 'Coronavirus
                  monitor' created by 'astsiatsko' on rapidapi.com
                </li>
                <li className="projects__content-covidTracker--description--details--content">
                  Deployed address :{" "}
                  <a href="https://yul761.github.io/covid_19_tracker/">
                    https://yul761.github.io/covid_19_tracker/
                  </a>
                </li>
                <li className="projects__content-covidTracker--description--details--content">
                  Github address :{" "}
                  <a href="https://github.com/yul761/covid_19_tracker">
                    https://github.com/yul761/covid_19_tracker
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
