import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getSkills } from "../api/skillApi";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [introText, setIntroText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const responsive = {
    superLargeDesktop: {
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

  // Buscar skills da API quando o componente montar
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        setLoading(true);
        const data = await getSkills();

        if (data && data.length > 0) {
          // Pegar o texto introdutório do primeiro item (campo textoinicial)
          setIntroText(data[0].textoinicial || "");

          // Mapear os dados da API para o formato do carousel
          const formattedSkills = data.map((skill) => ({
            id: skill.objectId,
            nome: skill.descricao || "", // O nome da skill está no campo 'descricao'
            imagem: skill.img?.url || "", // URL da imagem
          }));

          setSkills(formattedSkills);
          setError(null);
        } else {
          setError("Nenhuma skill encontrada.");
        }
      } catch (err) {
        console.error("Erro ao buscar skills:", err);
        setError("Erro ao carregar as skills. Tente novamente mais tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              
              {/* Texto introdutório vindo dinamicamente da API */}
              <p>
                {introText || "Carregando informações sobre minhas habilidades..."}
              </p>

              {/* Mostrar estado de carregamento */}
              {loading && (
                <div className="text-center">
                  <p>Carregando carousel...</p>
                </div>
              )}

              {/* Mostrar erro se houver */}
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              {/* Renderizar carousel com skills dinâmicas */}
              {!loading && !error && skills.length > 0 && (
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={5000} // Ajustado para uma velocidade mais comum
                  className="owl-carousel owl-theme skill-slider"
                >
                  {skills.map((skill) => (
                    <div key={skill.id} className="item">
                      <img 
                        src={skill.imagem} 
                        alt={`${skill.nome} logo`}
                        style={{ maxWidth: "100px", margin: "0 auto" }} // Garante que as imagens da API não fiquem gigantes
                      />
                      <h5>{skill.nome}</h5>
                    </div>
                  ))}
                </Carousel>
              )}
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
};
