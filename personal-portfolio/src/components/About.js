import { useState, useEffect } from "react";
import { getAboutInfo } from "../api/about";

const About = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  const fetchAboutInfo = async () => {
    try {
      setLoading(true);

      const data = await getAboutInfo();

      if (data && data.length > 0) {
        const about = data[0];

        setAboutData({
          texto: about.texto || "",
          url: about.img?.url || "",
        });

        setError(null);
      } else {
        setError("Nenhuma informação de 'Sobre Mim' encontrada.");
      }
    } catch (err) {
      console.error("Erro ao buscar informações de Sobre Mim:", err);

      setError(
        "Erro ao carregar as informações. Tente novamente mais tarde."
      );

      setAboutData(null);
    } finally {
      setLoading(false);
    }
  };

  fetchAboutInfo();
}, []);

  if (loading) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="text-center text-white">
              Carregando informações...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-12">
          <p id="aboutparagraf">
            {aboutData?.texto || "Texto não disponível"}
          </p>
        </div>

        <div className="col-lg-6 col-12 text-center">
          {aboutData?.url ? (
            <img
              className="img-fluid rounded"
              src={aboutData.url}
              alt="Imagem de Sobre Mim"
            />
          ) : (
            <p className="text-center">Imagem não disponível</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;