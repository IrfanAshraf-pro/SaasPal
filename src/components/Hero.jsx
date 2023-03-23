import React from "react";
import Background from "../assests/hero/hero-bg.svg";
import HeroImg from "../assests/hero/hero-img.png";

const Hero = () => {
  var sectionStyle = {
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <section
      style={sectionStyle}
      className="flex w-full h-[120vh]  p-2 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[540px]  md:max-w-[720px] lg:max-w-full mx-auto">
        <div className="text-primary lg:pt-4 p-2  md:px-6 lg:px-14  lg:w-[85%] m-auto flex items-start justify-center flex-col  gap-9">
          <h1 className="text-4xl font-bold md:text-6xl lg:text-5xl">
            Your're using free lite version
          </h1>
          <p className="text-[18px]">
            Please, purchase full version to get all sections, features and
            permission to remove footer credit.
          </p>
          <button className="rounded-full text-[18px] px-12 py-5 outline outline-2 outline-primary">
            Purchase Now
          </button>
        </div>
        <div className=" self-center  lg:w-[150%] lg:pt-16">
          <img src={HeroImg} alt="hero" className="lg:w-[80%]  lg:h-[70%]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
