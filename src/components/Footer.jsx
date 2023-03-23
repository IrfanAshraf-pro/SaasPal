import React from "react";
import Background from "../assests/footer/footer-bg.svg";
import Logo from "../assests/logo/logo.svg";
import Facebook from "../assests/icons/facebook.svg";
import Instagram from "../assests/icons/instagram.svg";
import Twitter from "../assests/icons/twitter.svg";
import Linkedin from "../assests/icons/linkedin.svg";

const Footer = () => {
  var sectionStyle = {
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="bg-main pt-16" style={sectionStyle}>
      <div className="max-w-[540px] md:max-w-[720px] lg:max-w-[1160px] mx-auto">
        <div className="mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-2">
            <div className="mb-8 lg:mr-8">
              <div className="">
                <p className="text-white text-[28px] font-bold" >SaasPal</p>
              </div>
              <p className="text-[18px] my-4 text-white">
                The pain itself is very important, the sadipscing elitr will be
                established, but the dinonomy is very time-consuming.
              </p>
              <div className=" px-2 flex gap-3">
                <div className="rounded-full w-12 bg-iconBg h-12 flex items-center justify-center  ">
                  <img src={Facebook} alt="" className="w-5  h-5" />
                </div>
                <div className="rounded-full w-12 bg-iconBg h-12 flex items-center justify-center  ">
                  <img src={Instagram} alt="" className="w-5  h-5" />
                </div>
                <div className="rounded-full w-12 bg-iconBg h-12 flex items-center justify-center  ">
                  <img src={Twitter} alt="" className="w-5  h-5" />
                </div>
                <div className="rounded-full w-12 bg-iconBg h-12 flex items-center justify-center  ">
                  <img src={Linkedin} alt="" className="w-5  h-5" />
                </div>
              </div>
            </div>
            <div className="text-white mb-8">
                <h3 className="text-[25px] font-bold">About Us</h3>
                <ul className="text-[18px] font-thin mt-4 flex gap-2 flex-col">
                    <li className="transition hover:translate-x-2 duration-500">Home</li>
                    <li className="transition hover:translate-x-2 duration-500">Feature</li>
                    <li className="transition hover:translate-x-2 duration-500">About</li>
                    <li className="transition hover:translate-x-2 duration-500">Testimonials</li>
                </ul>
            </div>
            <div className="text-white mb-8">
                <h3 className="text-[25px] font-bold">Features</h3>
                <ul className="text-[18px] font-thin mt-4 flex gap-2 flex-col">
                    <li className="transition hover:translate-x-2 duration-500">How it works</li>
                    <li className="transition hover:translate-x-2 duration-500">Privacy Policy</li>
                    <li className="transition hover:translate-x-2 duration-500">Terms of service</li>
                    <li className="transition hover:translate-x-2 duration-500">Refund policy</li>
                </ul>
            </div>
            <div className="text-white mb-8">
                <h3 className="text-[25px] font-bold">Other Products</h3>
                <ul className="text-[18px] font-thin mt-4 flex gap-2 flex-col">
                    <li className="transition hover:translate-x-2 duration-500">Accounting Software</li>
                    <li className="transition hover:translate-x-2 duration-500">Billing Software</li>
                    <li className="transition hover:translate-x-2 duration-500">Booking System</li>
                    <li className="transition hover:translate-x-2 duration-500">Tracking System</li>
                </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
