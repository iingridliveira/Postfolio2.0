import Certificate1 from "../assets/PDFs/certificate1.pdf";
import Certificate2 from "../assets/PDFs/certificate2.pdf";
import Certificate3 from "../assets/PDFs/certificate3.pdf";
import Certificate4 from "../assets/PDFs/certificate4.pdf";
import Carousel from "react-multi-carousel";
import { useState } from "react";

const CarouselComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <section className=" ">
        {isLoading && (
          <div className="spinner">
            <h1 className="text-center">Carregando...</h1>
          </div>
        )}
        <Carousel
          responsive={{
            superLargeDesktop: {
              breakpoint: { max: 4000, min: 3000 },
              items: 1,
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 1,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 1,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
            },
          }}
          infinite={true}
          className="owl-carousel owl-theme skill-slider"
        >
          <div className="pdf-container intem">
            <embed
              src={Certificate1}
              type="application/pdf"
              width="100%"
              height="500px"
              onLoad={handleLoad}
            />
          </div>
          <div className="pdf-container intem">
            <embed
              src={Certificate2}
              type="application/pdf"
              width="100%"
              height="500px"
              onLoad={handleLoad}
            />
          </div>
          <div className="pdf-container intem">
            <embed
              src={Certificate3}
              type="application/pdf"
              width="100%"
              height="500px"
              onLoad={handleLoad}
            />
          </div>
          <div className="pdf-container intem">
            <embed
              src={Certificate4}
              type="application/pdf"
              width="100%"
              height="500px"
              onLoad={handleLoad}
            />
          </div>
        </Carousel>
      </section>
    </>
  );
};

export default CarouselComponent;
