import React from "react";
import "./intro.css";
import btnImage from "../../assets/hireme.png";
import imgUrl from "../../assets/passport_photo.png";
import {Link} from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Rahul Tomar</span>
          <br />
          Java Full Stack Developer
        </span>
        <p className="introPara">
          Having in-depth knowledge of{" "}
          <span className="introName">React.js</span> and{" "}
          <span className="introName">Java</span> Technology <br /> and total
          experience of <span className="introName">2.5 Years</span> in the
          software industry. <br /> Please click on the below "Hire Me" button
          to find out <br /> how I might contribute and add value to your next
          project.
        </p>
        <div className="buttons">
          <Link to="contact">
            <button className="btn">
              <img src={btnImage} alt="Hire Me" className="btnImg" />
              Hire Me
            </button>
          </Link>
          <a
            href="/img/Rahul.Tomar.pdf"
            download="Rahul's Resume"
            target="_blank"
            rel="noopener noreferrer">
            <button className="btn">Resume</button>
          </a>
        </div>
      </div>
      <img src={imgUrl} alt="Profile" className="bgImg" />
    </section>
  );
};

export default Intro;
