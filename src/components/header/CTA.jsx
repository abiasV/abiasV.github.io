import React from "react";
import CV from "../../assets/AbbasVaziri-Resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href="#portfolio" className="btn btn-primary">
        View Projects
      </a>
      <a href={CV} download className="btn">
        Download Resume
      </a>
    </div>
  );
};

export default CTA;
