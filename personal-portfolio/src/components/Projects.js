import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Projeto Frot-end geração tech",
      description: "Projeto ecommece sprint 1",
      imgUrl: projImg1,
    },
    {
      title: "Check Feira",
      description:
        " para o controle de fluxo de estoque, na qual visa auxiliar na logística de entrada e saída dos produtos e também na disponibilidade das informações armazenadas",
      imgUrl: projImg2,
    },
    {
      title: "ECOELEKT",
      description:
        "Projeto que visa a sutentabilidade e o meio ambiente, com objetivo de axiliar no controle de gasto energia elétrica  e uso  ",
      imgUrl: projImg3,
    },
    {
      title: "Conversor de Unidades Android Studio",
      description:
        "Aplicativo Android desenvolvido para conversão de unidades de medida de comprrimentos ",
      imgUrl: projImg4,
    },
    {
      title: "Catálogo de hotéis Hackathon",
      description:
        "aplicativo full-stack desenvolvido para padronizar listagens de hotéis e melhorar a experiência de pesquisa na plataforma Onfly.",
      imgUrl: projImg5,
    },
    {
      title: "Consumo Consciente",
      description:
        "Consumo Consciente é um projeto que visa promover produtos que se destacam pelo baixo consumo de energia, permitindo que as pessoas pesquisem e se interessem por esses produtos de forma mais informada.",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Meus Projetos</h2>
                  <p>
                    Aqui estão alguns dos projetos que desenvolvi, combinando
                    design criativo e desenvolvimento técnico para criar
                    soluções impactantes e funcionais.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Aba 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Aba 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Aba 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Explore mais sobre os projetos e veja como cada um
                          deles foi pensado para atender às necessidades
                          específicas de cada cliente.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Entre em contato para saber mais sobre os projetos ou
                          discutir novas ideias e colaborações.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Design de fundo"
      ></img>
    </section>
  );
};
