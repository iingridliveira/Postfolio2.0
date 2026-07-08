import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Importações locais (enquanto não vem da API)
import Certificate1 from "../assets/PDFs/certificate1.pdf";
import Certificate2 from "../assets/PDFs/certificate2.pdf";
import Certificate3 from "../assets/PDFs/certificate3.pdf";
import Certificate4 from "../assets/PDFs/certificate4.pdf";
import Certificate5 from "../assets/PDFs/certificado5.pdf";
import Certificate6 from "../assets/PDFs/certificate6.pdf";
import Certificate7 from "../assets/PDFs/aws.pdf";


const CarouselComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  // 1. Criamos um array com os dados. 
  // Quando a API chegar, você apenas substituirá este array pelo resultado da API.
  const certificates = [
    { id: 1, src: Certificate7, title: "Certificado 1" },
    { id: 2, src: Certificate6, title: "Certificado 2" },
    { id: 3, src: Certificate5, title: "Certificado 3" },
    { id: 4, src: Certificate4, title: "Certificado 4" },
    { id: 5, src: Certificate3, title: "Certificado 5" },
    { id: 6, src: Certificate2, title: "Certificado 6" },
    { id: 7, src: Certificate1, title: "Certificado 7" }

  ];

  const handleLoad = () => {
    setIsLoading(false);
  };

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1, slidesToSlide: 1 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1, slidesToSlide: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1, slidesToSlide: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 },
  };

  return (
    <section>
      {isLoading && (
        <div className="spinner">
          <h1 className="text-center">Carregando...</h1>
        </div>
      )}

      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        className="owl-carousel owl-theme skill-slider"
      >
        {/* 2. Usamos o .map() para gerar as divs automaticamente */}
        {certificates.map((cert) => (
          <div key={cert.id} className="pdf-container item">
            <embed
              src={cert.src}
              type="application/pdf"
              width="100%"
              height="500px"
              onLoad={handleLoad}
            />
            {/* Opcional: Você pode exibir o título se quiser */}
            <h5 className="text-center mt-2">{cert.title}</h5>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default CarouselComponent;
