import React from "react";
import AboutLeftBG from "../../assests/about/about-left-shape.svg";
import AboutLeftDots from "../../assests/about/left-dots.svg";
import LeftImage from "../../assests/about/about-1.png";

const AboutLeft = () => {
  var sectionStyle = {
    backgroundImage: `url(${AboutLeftBG})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  var dotsStyle = {
    backgroundImage: `url(${AboutLeftDots})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="flex flex-col lg:flex-row w-full pt-14 lg:items-center lg:justify-center overflow-hidden">
      <div className="mb-16">
        <div className="relative py-16 ">
          <img src={LeftImage} alt="left" className="w-full p-8 md:w-[85%] lg:max-w-2xl" />
          <img src={AboutLeftBG} alt="" className="absolute w-[66%] sm:max-w-xl md:max-w-2xl lg:w-[400px] md:h-[600px] top-[0%] -left-[70px] lg:-top-20 -z-10"/>
          <img src={AboutLeftDots} alt="" className="absolute w-[66%]  bottom-[60px] sm:bottom-[50px] md:max-w-md lg:w-[310px]  right-[100px] sm:right-[200px] md:right-[240px] lg:right-[160px] -z-10"/>
        </div>
      </div>
      <div className="flex gap-6 p-2 px-4 flex-col lg:w-[45%]">
        <h2 className="text-[40px] md:text-[35px] text-secondary">Perfect Solution Thriving Online Business</h2>
        <p className="text-[18px] text-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aut vel similique quam reiciendis accusamus in sit non voluptatem corporis sunt mollitia, sed, corrupti sint, maxime pariatur natus veniam! Repudiandae vero autem praesentium reiciendis natus error .</p>
        <button className="rounded-full mt-2 w-60 text-[18px] px-12 py-5 outline outline-2 outline-main text-main mb-2">
            Purchase Now
          </button>
      </div>
    </div>
  );
};

export default AboutLeft;
