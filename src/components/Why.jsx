import React from 'react'
import Whycard from './custom/Whycard'
import Screen from '../assests/icons/screen.svg'
import Grid from '../assests/icons/grid.svg'
import Javascript from '../assests/icons/javascript.svg'
import Layers from '../assests/icons/layers.svg'
import Leaf from '../assests/icons/leaf.svg'
import Rocket from '../assests/icons/rocket.svg'

const Why = () => {
const icons=[
    {name:"SaaS Focused",icon:Screen},
    {name:"Awesome Design",icon:Leaf},
    {name:"Ready To Use",icon:Grid},
    {name:"Vanilla JS",icon:Javascript},
    {name:"Essentials Sections",icon:Layers},
    {name:"Highly Optimized",icon:Rocket}
]
  return (
    <div className='w-[95%] md:w-[90%] mx-auto  '>
        <div className="max-w-xl mx-auto">
            <h2 className='text-[32px] text-center md:text-[40px] lg:text-[35px] text-secondary'>Why Choose SaaSpal</h2>
            <p className='text-[18px] pt-4 text-center text-paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam cum temporibus quasi perferendis, hic recusandae.</p>
        </div>
        <div className="grid grid-cols-1 my-8  md:grid-cols-2 lg:grid-cols-3 mx-auto" >
            {
                icons.map((item,index)=>(
                    <Whycard icon={item} key={index}/>
                ))
            }

        </div>
    </div>
  )
}

export default Why