import React, { Component } from "react";
import Contact from "../assets/Contact.jpg";
import ContactWithInfo from "../assets/ContactWithInfo.png";

export default class contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="contact__picture">
          <img
            className="contact__picture-img"
            alt="contact_image"
            src={Contact}
          ></img>
        </div>

        <div className="contact__picturewithInfo">
          <img
            className="contact__picturewithInfo-img"
            alt="contact_with_info"
            src={ContactWithInfo}
          ></img>
        </div>

        <div className="contact__info">
          <ul className="contact__info-container">
            <ol className="contact__info-container--content contact__info-container--title">
              Get In Touch
            </ol>
            <ol className="contact__info-container--content">
              yul761@mail.usask.ca
            </ol>
            <ol className="contact__info-container--content">306-491-2795</ol>
          </ul>
          <div className="contact__info-slogan">
            <div className="contact__info-slogan--content">
              The things we know the best are the things we haven't been taught
            </div>
            <div className="contact__info-slogan--author">-Luc de Clapiers</div>
          </div>
        </div>
      </div>
    );
  }
}
