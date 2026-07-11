import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { getBanner } from "../api/banerapi";

export const Banner = () => {
  // Estados para a animação de digitação
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);

  // Estados para os dados da API
  const [bannerData, setBannerData] = useState(null);
  const [toRotate, setToRotate] = useState([]);
  const [headerImg, setHeaderImg] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const period = 2000;

  // Buscar dados do banner da API
  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        setLoading(true);
        const data = await getBanner();

        if (data && data.length > 0) {
          // Extrair os títulos para a animação de rotação
          const titles = data.map((item) => item.titulo);
          setToRotate(titles);

          // Usar o primeiro item para pegar a imagem e o subtítulo
          const firstBanner = data[0];
          setHeaderImg(firstBanner.img?.url || "");
          
          // Se houver subtítulo no primeiro item, usar; caso contrário, procurar no segundo
          const subtitle = firstBanner.subtitulo || (data[1]?.subtitulo || "");
          setSubtitle(subtitle);

          setBannerData(data);
          setError(null);
        } else {
          setError("Nenhum dado de banner encontrado.");
        }
      } catch (err) {
        console.error("Erro ao buscar dados do banner:", err);
        setError("Erro ao carregar o banner. Tente novamente mais tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchBannerData();
  }, []);

  // Efeito para a animação de digitação
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta, loopNum, isDeleting, toRotate]);

  const tick = () => {
    if (toRotate.length === 0) return; // Evitar erro se toRotate estiver vazio

    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Enquanto está carregando
  if (loading) {
    return (
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <p className="text-center">Carregando banner...</p>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  // Se houver erro
  if (error) {
    return (
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Bem-vindo ao meu Portfólio</span>
                  <h1>
                    {`Oi! Eu sou a Ingrid Oliveira`}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  {/* Parágrafo dinâmico vindo da API */}
                  <p>
                    {subtitle || "Curiosa como um gato e sonhadora como quem olha as estrelas, encontrei na tecnologia o meu universo para explorar."}
                  </p>
                  <a href="#connect" className="text-decoration-none">
                    <button>
                      Vamos Conectar <ArrowRightCircle size={25} />
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  {/* Imagem dinâmica vindo da API */}
                  {headerImg ? (
                    <img 
                      src={headerImg} 
                      alt="Imagem do Cabeçalho"
                      onError={(e) => {
                        // Fallback se a imagem não carregar
                        e.target.style.display = "none";
                      }}
                    />
                  ) : (
                    <p className="text-center">Imagem não disponível</p>
                  )}
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
