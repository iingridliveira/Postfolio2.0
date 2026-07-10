import { Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          
          {/* Link do repositório/projeto */}
          {link && (
            <div className="proj-link-container text-white mt-2">
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="proj-link-btn text-white"
              >
                Ver Repositório
              </a>
              <ArrowRightCircle size={25} />
            </div> 
          )}
        </div>
      </div>
    </Col>
  );
};
