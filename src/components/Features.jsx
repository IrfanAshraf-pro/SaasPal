import React from "react";
import Featurescard from "./custom/Featurescard";
import BootstrapIcon from '../assests/icons/bootstrap-fill.svg'
import LayoutIcon from '../assests/icons/layout.svg'
import CoffeeIcon from '../assests/icons/cup-hot.svg'
const Features = () => {
  return (
  <div className="">
    <div className="flex flex-col lg:flex-row mx-auto items-center justify-center p-4 gap-2 lg:gap-3 px-3 lg:px-2 w-[80%] max-w-[540px]  md:max-w-[720px] lg:max-w-full">
      <Featurescard title='Bootstrap 5' icon={BootstrapIcon}/>
      <Featurescard title='Clean Design' icon={LayoutIcon}/>
      <Featurescard title='Easy to use' icon={CoffeeIcon}/>
    </div>
  </div>
  )
};

export default Features;
