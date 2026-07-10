import { useState, useEffect } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import CarouselComponent from "./Carousel";
import About from "./About";
import { getProjects } from "../api/projectsApi";

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Buscar projetos da API quando o componente montar
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const data = await getProjects();

        // Mapear os dados da API para o formato esperado pelo ProjectCard
        const formattedProjects = data.map((project) => ({
          title: project.titulo,
          description: project.subtitulo,
          imgUrl: project.Imagem?.url || "", // URL da imagem do Parse
          link: project.link, // Link do repositório/projeto
          objectId: project.objectId, // ID único do projeto
        }));

        setProjects(formattedProjects);
        setError(null);
      } catch (err) {
        console.error("Erro ao buscar projetos:", err);
        setError("Erro ao carregar os projetos. Tente novamente mais tarde.");
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

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
                  <h2>Um pouco de mim</h2>
                  <p>
                    Aqui estão alguns dos projetos que desenvolvi, combinando e
                    um pouco sobre mim e Certificados que conquistei ao longo do
                    da minha jornado me tornando uma desenvolvedora web.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projetos</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Sobre mim</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Certificados</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        {/* Mostrar estado de carregamento */}
                        {loading && (
                          <div className="text-center">
                            <p>Carregando projetos...</p>
                          </div>
                        )}

                        {/* Mostrar erro se houver */}
                        {error && (
                          <div className="alert alert-danger" role="alert">
                            {error}
                          </div>
                        )}

                        {/* Renderizar projetos dinamicamente */}
                        {!loading && !error && projects.length > 0 && (
                          <Row>
                            {projects.map((project) => {
                              return (
                                <ProjectCard
                                  key={project.objectId} link={project.link}
                                  {...project} 
                                />
                              );
                            })}
                          </Row>
                        )}

                        {/* Mensagem quando não há projetos */}
                        {!loading && !error && projects.length === 0 && (
                          <div className="text-center">
                            <p>Nenhum projeto encontrado.</p>
                          </div>
                        )}
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <section className="about container">
                          <About />
                        </section>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div className="align-items-center">
                          <CarouselComponent />
                        </div>
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
