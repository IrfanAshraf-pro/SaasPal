import React from "react";

const Featurescard = ({icon,title}) => {
  return (
    <div className="flex flex-col items-center justify-between gap-8 py-4 px-3 lg:px-2 w-[83.3%] md:w-[66.6%] lg:w-[33.33%]">
      <div className="bg-overlay w-32 h-32 flex items-center justify-center rounded-full">
      <img src={icon} alt="icon" className="h-16 w-16 text-main" />
      </div>
      <div className="text-center">
      <h2 className="text-2xl text-secondary mb-5">{title}</h2>
      <p className="text-lg text-paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni ipsam?</p>
      </div>
    </div>
  );
};

export default Featurescard;
