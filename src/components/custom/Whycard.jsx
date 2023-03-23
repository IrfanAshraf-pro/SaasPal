import React from 'react'

const Whycard = ({icon}) => {
    console.log(icon);
  return (
    <div className='p-6 max-w-xl mx-auto'>
        <div className="w-16 h-16">
            <img src={icon.icon} alt="" />
        </div>
            <h2 className='my-4 text-[25px] text-secondary font-bold'>{icon.name}</h2>
            <p className='text-[18px] text-paragraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa voluptatum est error doloribus autem, eius corporis rerum doloremque quia odit?</p>
    </div>
  )
}

export default Whycard