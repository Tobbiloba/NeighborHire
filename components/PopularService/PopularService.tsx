import React from 'react'

import fs1 from '@/public/images/fs1.jpg'
import fs2 from '@/public/images/fs2.jpg'
import fs3 from '@/public/images/fs3.jpg'
import fs4 from '@/public/images/fs4.jpg'
import paintlady from '@/public/images/paintlady.jpg'

import Image from 'next/image'

const PopularServices = () => {
  return (
    <div className="">
      <div className=" shadow-md mb-5 p-3">
        <div className="flex justify-between mt-5 font-bold">
          <h1 className="">Popular Services</h1>
          <h6>
            Explore all <span>→</span>
          </h6>
        </div>
      </div>
      <div className="lg:flex  gap-5">
        <div className="bg-[#F1F6FF] p-5 rounded flex flex-col  gap-3  mb-5">
          <div className="items-center m-auto ">
            <Image src={fs1} alt="" />
          </div>
          <div className="flex gap-[10rem] ml-8 ">
            <div className="flex">
              <div className="flex relative">
                <Image
                  src={paintlady}
                  alt=""
                  width="25"
                  height="25"
                  className="rounded"
                />
                <div className="absolute -bottom-2 -right-2 border-4 border-white rounded-full bg-green-500"></div>
              </div>
              <div>name</div>
            </div>
            <div>Rating</div>
          </div>
          <div className="ml-8">
            <h1 className="font-bold hover:text-red">
              All Painting & Renovation Service
            </h1>
            <p className="text-gray">
              It is a long established fact that a reader will be distracted by
              the readable
            </p>
          </div>
          <div className="flex ml-8 justify-between">
            <h1 className="font-bold text-red">$80.00</h1>
            <button className="font-bold-XL border border-5 rounded hover:bg-[#666666] hover:text-white p-3">
              Book Now
            </button>
          </div>
        </div>

        <div className="bg-[#F1F6FF] p-5 rounded flex flex-col  gap-3  mb-5">
          <div className="items-center m-auto ">
            <Image src={fs2} alt="" />
          </div>
          <div className="flex gap-[10rem] ml-8 ">
            <div className="flex">
              <div className="flex relative">
                <Image
                  src={paintlady}
                  alt=""
                  width="25"
                  height="25"
                  className="rounded"
                />
                <div className="absolute -bottom-2 -right-2 border-4 border-white rounded-full bg-green-500"></div>
              </div>
              <div>name</div>
            </div>
            <div>Rating</div>
          </div>
          <div className="ml-8">
            <h1 className="font-bold hover:text-red">
              All Emergency Electrical Support
            </h1>
            <p className="text-gray">
              It is a long established fact that a reader will be distracted by
              the readable
            </p>
          </div>
          <div className="flex ml-8 justify-between">
            <h1 className="font-bold text-red">$95.00</h1>
            <button className="font-bold-XL border border-5 rounded hover:bg-[#666666] hover:text-white p-3">
              Book Now
            </button>
          </div>
        </div>
        <div className="bg-[#F1F6FF] p-5 rounded flex flex-col  gap-3  mb-5">
          <div className="items-center m-auto ">
            <Image src={fs3} alt="" />
          </div>
          <div className="flex gap-[10rem] ml-8 ">
            <div className="flex">
              <div className="flex relative">
                <Image
                  src={paintlady}
                  alt=""
                  width="25"
                  height="25"
                  className="rounded"
                />
                <div className="absolute -bottom-2 -right-2 border-4 border-white rounded-full bg-green-500"></div>
              </div>
              <div>name</div>
            </div>
            <div>Rating</div>
          </div>
          <div className="ml-8">
            <h1 className="font-bold hover:text-red">
              All Hair Cut & Hair Color Services
            </h1>
            <p className="text-gray">
              It is a long established fact that a reader will be distracted by
              the readable
            </p>
          </div>
          <div className="flex ml-8 justify-between">
            <h1 className="font-bold text-red">$90.00</h1>
            <button className="font-bold-XL border border-5 rounded hover:bg-[#666666] hover:text-white p-3">
              Book Now
            </button>
          </div>
        </div>
        <div className="bg-[#F1F6FF] p-5 rounded flex flex-col  gap-3  mb-5">
          <div className="items-center m-auto ">
            <Image src={fs4} alt="" />
          </div>
          <div className="flex gap-[10rem] ml-8 ">
            <div className="flex">
              <div className="flex relative">
                <Image
                  src={paintlady}
                  alt=""
                  width="25"
                  height="25"
                  className="rounded"
                />
                <div className="absolute -bottom-2 -right-2 border-4 border-white rounded-full bg-green-500"></div>
              </div>
              <div>name</div>
            </div>
            <div>Rating</div>
          </div>
          <div className="ml-8">
            <h1 className="font-bold hover:text-red">
              All Painting & Renovation Service
            </h1>
            <p className="text-gray">
              It is a long established fact that a reader will be distracted by
              the readable
            </p>
          </div>
          <div className="flex ml-8 justify-between">
            <h1 className="font-bold text-red">$85.00</h1>
            <button className="font-bold-XL border border-5 rounded hover:bg-[#666666] hover:text-white p-3">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularServices
