import React from 'react'
import m1 from '@/public/images/m1.png'
import m2 from '@/public/images/m2.png'
import m3 from '@/public/images/m3.png'
import m4 from '@/public/images/m4.png'
import Image from 'next/image'

const WhyChooseUs = () => {
  return (
    <div className="lg:flex ">
      <div className=" lg:m-auto flex flex-col mx-[1rem] lg:w-[75%] lg:mx-5 mb-5">
        <h1 className=" font-bold">Why you Choose This Marketplace?</h1>
        <p className=" text-gray mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in{' '}
          rutrum odio, a blandit leo. Mauris placerat vulputate lacus eubr
          eleifend. Donec euismod, metus id consequat egestas, tellus dui
          fermentum est, id porttitor tellus tortor in tellus. Maecenas non{' '}
          facilisis tortor. Duis et euismod augue.
        </p>
        <button className="mt-5 p-3 hover:text-white border text-[#FF6B33] rounded hover:bg-[#FF6B33] w-[50%]">
          Become A Seller
        </button>
      </div>
      <div>
        <div className="lg:flex lg:justify-around w-[100%] ">
          <div className="bg-[#F3F3FF] p-5  lg:w-[25%] rounded flex flex-col items-center justify-center gap-4 mb-5">
            <Image src={m1} alt="" />
            <h1 className="text-center font-bold hover:text-[#FF6B33]">
              Service Commitment
            </h1>
            <p className="text-center">
              It is a long established fact that a reader will be distracted by
              the readable. It is a long established fact that a reader.
            </p>
          </div>
          <div className="bg-[#F3F3FF] p-5 lg:w-[25%] rounded flex flex-col justify-center items-center gap-4">
            <Image src={m2} alt="" />
            <h1 className="text-center font-bold hover:text-[#FF6B33]">
              Super Experience
            </h1>
            <p className="text-center">
              It is a long established fact that a reader will be distracted by
              the readable. It is a long established fact that a reader.
            </p>
          </div>
        </div>
        <div className="lg:flex justify-around mt-5 ">
          <div className="bg-[#F3F3FF] p-5 lg:w-[25%] rounded flex flex-col items-center justify-center gap-4 mb-5">
            <Image src={m3} alt="" />{' '}
            <h1 className="text-center font-bold hover:text-[#FF6B33]">
              Secure Data & Payment
            </h1>{' '}
            <p className="text-center">
              It is a long established fact that a reader will be distracted by
              the readable. It is a long established fact that a reader.
            </p>
          </div>
          <div className="bg-[#F3F3FF] p-5  lg:w-[25%] rounded flex flex-col items-center justify-center gap-4">
            <Image src={m4} alt="" />{' '}
            <h1 className="text-center font-bold hover:text-[#FF6B33]">
              Dedecated Support
            </h1>{' '}
            <p className="text-center">
              It is a long established fact that a reader will be distracted by
              the readable. It is a long established fact that a reader.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
