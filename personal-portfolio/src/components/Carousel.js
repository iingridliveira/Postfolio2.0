import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { getCertificates } from "../api/certificate";

const CarouselComponent = () => {
  const [certificates, setCertificates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const data = await getCertificates();
        setCertificates(data);
      } catch (error) {
        console.error("Erro ao buscar certificados:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <section>
      {isLoading ? (
        <div className="spinner">
          <h1 className="text-center text-white">
            Carregando...
          </h1>
        </div>
      ) : (
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          keyBoardControl
          customTransition="all .5"
          transitionDuration={500}
          className="owl-carousel owl-theme skill-slider"
        >
          {certificates.map((cert) => (
            <div key={cert.objectId} className="pdf-container item">
              <embed
                src={cert.pdf.url}
                type="application/pdf"
                width="100%"
                height="500px"
              />

              <h5 className="text-center mt-2">
                {cert.descricao}
              </h5>
            </div>
          ))}
        </Carousel>
      )}
    </section>
  );
};

export default CarouselComponent;