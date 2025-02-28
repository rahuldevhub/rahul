import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
// import Type from "./Type";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import animationData from '../../Assets/homeani.json';
import Lottie from 'lottie-react'

// import Particle2 from "../Particle2";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">

      <Particle/>
        {/* <Particle2/> */}
        {/* <Container className="home-content"> */}
        <div className="home-content">
          <Row className='home-both-col'>
            <Col md={7} lg={6}  >
            <div className="home-header">
              <h1 style={{ paddingBottom: 5 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> RAHUL RAJENDRAN</strong>
              </h1>

              <div className="type-div" style={{ paddingTop: 10, paddingBottom: 20, textAlign: "left" }}>
                {/* <Type /> */}
              </div>
              <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/rahuldevhub"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/rahulriyaz_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rahulrajendran1/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/iamrahul.r1/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
            </div>
            </Col>

            <Col md={5} lg={6}  style={{ paddingBottom: 20 }}>

            <div className='home-animation img-fluid'>
                        <Lottie animationData={animationData} className="home-animation"/>
                    </div>

           

              {/* <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              /> */}
            </Col>
            
          </Row>
          </div>
        {/* </Container> */}
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
