'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { AiOutlineMenu } from 'react-icons/ai'
import { CiMenuKebab } from 'react-icons/ci'
import Link from 'next/link'
const Menubar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const links = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Service List',
      link: '/services',
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Dashboard',
      link: '/dashboard',
    },
    {
      name: 'Contact',
      link: '/contact',
    },
  ]
  return (
    <div className="fixed h-[6rem] flex justify-between items-center px-[1rem] lg:px-[5%] w-[100%]">
      <div className="flex gap-3 lg:gap-5 cursor-pointer">
        <Image
          src="/images/logo.png"
          width={30}
          height={30}
          className=""
          alt="logo image"
        />
        <h1 className="text-2xl madimi text-red">
          Neighbor<span className="text-primary">Hire</span>
        </h1>
      </div>

      <div className="hidden lg:flex gap-10 averia items-center">
        {links.map((item, index) => (
          <Link
            href={item.link}
            className="cursor-pointer hover:text-black text-xl text-gray"
            key={index}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="lg:flex gap-10 items-center hidden">
        <div className="relative cursor-pointer">
          <IoIosNotificationsOutline className="text-3xl" />
          <h1 className="absolute -top-2 -right-2 h-5 flex justify-center items-center rounded-full text-white  text-[13px] w-5 bg-primary">
            3
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="/images/heroImg.jpg"
            width={35}
            height={35}
            className="rounded-full border-2 border-primary"
            alt="profile image"
          />
          <h1 className="text-[15px] cursor-pointer">Alex Jerin</h1>
        </div>
      </div>

      <div className="flex lg:hidden items-center gap-4">
        <div>
          <CiMenuKebab className="text-3xl text-gray" />
        </div>
        <div
          className="border border-gray p-1 rounded-md"
          onClick={() => setShowMenu(!showMenu)}
        >
          <AiOutlineMenu className="text-3xl text-gray" />
        </div>
      </div>

      {showMenu && (
        <div className="absolute flex flex-col lg:hidden -bottom-[12.5rem] w-[100%] left-0 px-[1rem] md:px-[2rem] heroBg">
          {links.map((item, index) => (
            <Link
              href={item.link}
              className="averia text-xl cursor-pointer h-[2.5rem] flex items-center"
              key={index}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Menubar
