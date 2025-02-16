import React from 'react';

const CardComponent = () => {
  return (
    <div className="card">
      <h2 className="text-base uppercase font-titleFont mb-4">BEST SKILL ON</h2>
      <div className="flex gap-4">
        <span className="bannerIcon">
          <FaReact />
        </span>
        <span className="bannerIcon">
          <SiNextdotjs />
        </span>
        <span className="bannerIcon">
          <SiTailwindcss />
        </span>
        <span className="bannerIcon">
          <SiFigma />
        </span>
      </div>
      <div className="mt-4">
        <button className="btn btn-primary mr-2">Download CV</button>
        <button className="btn btn-secondary">Contact Me</button>
      </div>
    </div>
  );
};

export default CardComponent;