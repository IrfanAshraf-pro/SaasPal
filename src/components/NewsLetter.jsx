import React from "react";
import Background from "../assests/subscribe/subscribe-bg.svg";

const NewsLetter = () => {
  var sectionStyle = {
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderRadius:'30px'
  };
  return (
    <div className="w-[95%] md:w-[90%] mx-auto my-4 flex items-center justify-center p-4 text-white">
      <div
        className="w-[95%] mx-auto py-10 md:py-14 px-6 md:px-8 flex flex-col items-center justify-between lg:flex-row gap-2 md:gap-0"
        style={sectionStyle}
      >
        <div className="lg:w-6/12">
          <h2 className="text-[32px] md:text-[40px] font-bold lg:text-[35px]">
            Subscribe to our newsletter
          </h2>
          <p className="text-[18px] mt-1 lg:mt-3">
            The pain itself is very important, but it will tale a very long time.but it will tale a very long time
          </p>
        </div>
        <div className="flex items-center justify-between w-full md:w-5/12 p-0.5 h--[50px] bg-gray-50 border border-gray-300  text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500  ">
          <p className="text-gray-500 ml-2">Email</p>
          <button className="bg-main rounded-xl p-3 px-4 font-bold  text-white">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
