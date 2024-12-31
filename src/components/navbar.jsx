"use client";
import Image from "next/image";
import logoimg from "../../public/Images/a.svg";
import menuimg from "../../public/Images/hamburger.png";
import Link from "next/link";
import { useState } from "react";
export default function Navbar() {
    let [isclick, Setisclick] = useState(false);
  function menubtn() {
    Setisclick(!isclick);
  }
  return (
    <>
              <nav className=" h-16 p-10  bg-white flex justify-between  items-center  ">
          <div>
            <Image src={logoimg} width={150} height={150} alt="logo" />
          </div>
          <div>
            <ul className="text-black  gap-8  font-semibold   flex items-center ">
              <div
                className={`${isclick ? "flex" : "hidden"} md:flex flex-col gap-6 absolute top-16 p-6 items-center bg-white left-0 w-full  md:flex-row md:justify-between md:items-center md:static  `}
              >
                <Link href="/" className="hover:text-green-600 duration-150">
                  Home
                </Link>
                <Link
                  href="/About"
                  className="hover:text-green-600 duration-150"
                >
                  About
                </Link>
                <Link
                  href="/Features"
                  className="hover:text-green-600 duration-150"
                >
                  Features
                </Link>
                <Link
                  href="/Screenshot"
                  className="hover:text-green-600 duration-150"
                >
                  Screenshot
                </Link>
                <Link
                  href="/Testimonials"
                  className="hover:text-green-600 duration-150"
                >
                  Testimonials
                </Link>
                <Link
                  href="/Contact"
                  className="hover:text-green-600 duration-150"
                >
                  Contact
                </Link>
              </div>
              <div className="md:hidden flex items-center">
                <button onClick={menubtn}>
                  <Image src={menuimg} width={15} height={15} alt="menu" />
                </button>
              </div>
            </ul>
          </div>
        </nav>
    </>
  )
}
