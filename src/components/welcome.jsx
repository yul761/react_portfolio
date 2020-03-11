import React, { Component } from "react";
import welcomeImg from "../assets/IMG_5090.JPG";
import github from "../assets/githubIcon.png";
import linkedin from "../assets/linkedin.png";
import resume from "../assets/ResumeIcon.png";

export default class welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <div className="welcome__img">
          <img
            className="welcome__img-pic"
            alt="personal_picture"
            src={welcomeImg}
          ></img>
        </div>
        <div className="welcome__info">
          <div className="welcome__info-name">Yuchen Lin</div>
          <div className="welcome__info-title">
            Full-Stack Developer | Unity Game Developer
          </div>
          <div className="welcome__info-description">
            I am a passionate software developer who loves to make products that
            could make impacts on the real world. Solid coding habits help me
            build fascinate websites and mobile games and the desire to always
            seek challenges pushed me to perfection.
          </div>
          <div className="welcome__info-links">
            <a
              className="welcome__info-links--github"
              href="https://github.com/yul761"
            >
              <img
                className="welcome__info-links--github--icon"
                alt="github_icon"
                src={github}
              ></img>
            </a>
            <a
              className="welcome__info-links--linkedin"
              href="https://www.linkedin.com/in/foggysalmon/"
            >
              <img
                className="welcome__info-links--linkedin--icon"
                alt="linkedin_icon"
                src={linkedin}
              ></img>
            </a>
            <a
              className="welcome__info-links--resume"
              href="https://1drv.ms/b/s!ApbuCX1Pgpj0h08kk1o9N19RYdOB"
            >
              <img
                className="welcome__info-links--resume--icon"
                alt="resume_icon"
                src={resume}
              ></img>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
