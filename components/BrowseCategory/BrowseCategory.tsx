import React from 'react'
import cleaning from '../../public/images/cleaning.png'
import electrian from '../../public/images/electrian.png'
import helping from '../../public/images/helping.png'
import homeMove from '../../public/images/home move.png'
import painting from '../../public/images/painting.png'
import saloon from '../../public/images/saloon.png'
import Image from 'next/image'

const BrowseCategory = () => {
  return (
    <div className="">
      <div className=" shadow-md mb-5 p-3">
        <div className="flex justify-between mt-5 font-bold">
          <h1 className="">Browse category</h1>
          <h6>
            Explore all <span>→</span>
          </h6>
        </div>
      </div>
      <div className="lg:flex justify-around ">
        <div className="bg-[#FFFAEE] p-5 rounded flex flex-col items-center justify-center gap-3  mb-5">
          <Image src={cleaning} alt="" />
          <h1 className="font-bold">Cleaning</h1>
          <p className="text-gray">35+ Service</p>
        </div>

        <div className="bg-[#EBF3F1] p-5 rounded flex flex-col items-center justify-center gap-3  mb-5">
          <Image src={homeMove} alt="" />
          <h1 className="font-bold">Home Move</h1>
          <p className="text-gray">36+ Service</p>
        </div>
        <div className="bg-[#F3F2FF] p-5 rounded flex flex-col items-center justify-center gap-3  mb-5">
          <Image src={electrian} alt="" />
          <h1 className="font-bold">Electrician</h1>
          <p className="text-gray">36+ Services</p>
        </div>
        <div className="bg-[#FFEEF1] p-5 rounded flex flex-col items-center justify-center gap-3  mb-5">
          <Image src={saloon} alt="" />
          <h1 className="font-bold">Saloon</h1>
          <p className="text-gray"> 36+ Services</p>
        </div>
        <div className="bg-[#F2F9FD] p-5 rounded flex flex-col items-center justify-center gap-3  mb-5">
          <Image src={painting} alt="" />
          <h1 className="font-bold">Painting</h1>
          <p className="text-gray">36+ Services</p>
        </div>
        <div className="bg-[#FFF6F2] p-5 rounded flex flex-col items-center justify-center gap-3  mb-5">
          <Image src={helping} alt="" />
          <h1 className="font-bold">Helping</h1>
          <p className="text-gray">30+ Services</p>
        </div>
      </div>
    </div>
  )
}

export default BrowseCategory
