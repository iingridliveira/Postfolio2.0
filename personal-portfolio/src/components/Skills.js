import Linux from "../assets/img/linux-svgrepo-com (1).svg";
import node from "../assets/img/node-js-svgrepo-com.svg";
import nest from "../assets/img/nest-guard-ts-svgrepo-com.svg";
import react from "../assets/img/react-svgrepo-com.svg";
import mysql from "../assets/img/mysql-svgrepo-com (2).svg";
import JS from "../assets/img/js-svgrepo-com.svg";
import Java from "../assets/img/java.svg";
import Aws from "../assets/img/aws.png"
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Tenho experiência em desenvolvimento web, trabalhando com
                tecnologias como React, Node.js e MySQL. Além disso, possuo
                conhecimento em Linux e frameworks como NestJS e Java com Android Studio, o que me permite
                criar aplicações robustas e escaláveis. Estou sempre buscando
                aprender e aprimorar minhas habilidades para entregar soluções
                de alta qualidade.
              </p>
              <Carousel
                responsive={responsive} // O objeto atualizado acima
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={9000}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={react} alt="React logo" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={JS} alt="JavaScript logo" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={mysql} alt="MySQL logo" />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img src={Aws} alt="MySQL logo" />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img src={node} alt="Node.js logo" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img src={nest} alt="NestJS logo" />
                  <h5>NestJS</h5>
                </div>
                <div className="item">
                  <img src={Linux} alt="Linux logo" />
                  <h5>Linux</h5>
                </div>
                <div className="item">
                  <img src={Java} alt="Java logo" />
                  <h5>Java</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Background decorativo"
      />
    </section>
  );
}
