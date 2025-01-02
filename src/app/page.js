import Image from "next/image";
import PhoneFrame from "../../public/Images/phone.svg";
import MilkSection from "../../public/Images/Milk.svg";
import Delivery from "../../public/Images/delivery.png";
import Localstore from "../../public/Images/local.png";
import Map from "../../public/Images/map.png";
import Adsection from "@/components/adsection";
export default function Home() {
  return (
    <div className="">
      {/* First Section */}
      <div className="p-0   grid grid-cols-1 lg:grid-cols-2  mt-6 justify-center items-center">
        {/* Content */}
        <div className=" p-36 grid justify-center items-center">
          <h1 className="text-lightgreen font-semibold text-7xl">Milk</h1>
          <h1 className="font-semibold text-7xl">Delivery App</h1>
          <p className="font-light mt-7 ">
            To stay ahead of the curve, serve your customers through an <br />{" "}
            On-Demand Food Delivery App.
          </p>
          <div className="flex gap-4 mt-10 ">
            <button className="    bg-lightgreen text-white  px-5 lg:px-10 py-2  rounded-lg font-semibold drop-shadow-[0_25px_35px_#71AA38] ">
              Get Started
            </button>
            <button className=" bg-white text-black border-2 border-lightgreen  px-5 lg:px-10 py-2 rounded-lg font-semibold   ">
              {" "}
              View More
            </button>
          </div>
        </div>
        {/* === Content === */}
        {/* Phone Frame */}
        <div className="ml-0 lg:ml-44 flex justify-center items-center">
          <Image src={PhoneFrame} width={525} height={525} alt="Phone" />
        </div>
        {/* === Phone Frame === */}
      </div>
      {/* === First Section === */}
      {/* Second Section */}
      <div className="w-full relative ">
        {/* Milk Section */}
        <Image
          src={MilkSection}
          style={{
            width: "130vw",
            height: "100vh",
            objectFit: "fill",
            position: "relative",
            top: "-350px",
            left: "0",
            zIndex: "-1",
            overflow: "hidden",
          }}
          alt="Milk"
        />
        {/* === Milk Section === */}
        {/* What We Are */}
        <div className="flex flex-col justify-center items-center absolute top-96 left-0 right-0">
          <h1 className="text-4xl font-bold">Why are we unique ?</h1>
          <div className="grid grid-cols-1  lg:grid-cols-3 justify-center items-center lg:gap-56 mt-8 capitalize">
            {/* Delivery */}
            <div className="w-72 flex flex-col text-center items-center">
              <Image src={Delivery} width={150} height={150} alt="Map" />
              <h1 className="font-semibold mb-4 text-lg">
                We’ve upped the game.
              </h1>
              <p className="text-sm font-light">
                We carry a variety of products through our unique vendors that
                you can’t typically get delivered.
              </p>
            </div>
            {/* === Delivery === */}
            {/* Local Store */}
            <div className="w-72 flex flex-col text-center items-center">
              <Image src={Localstore} width={150} height={150} alt="Map" />
              <h1 className="font-semibold mb-4 text-lg">
                Order From our virtual mall of Local Stores
              </h1>
              <p className="text-sm font-light">
                Order from a large variety of local stores you like and trust
                for years you can’t typically get delivered.
              </p>
            </div>
            {/* === Local Store === */}
            {/* Map */}
            <div className="w-72 flex flex-col text-center items-center">
              <Image src={Map} width={150} height={150} alt="Map" />
              <h1 className="font-semibold mb-4 text-lg">
                Easy Access to Local services
              </h1>
              <p className="text-sm font-light">
                Easy access to local services such as dry cleaning, we can pick
                it up and drop it off to make your
              </p>
            </div>
            {/* === Map === */}
          </div>
        </div>
        {/* === What We Are === */}
      </div>
      {/* === Second Section === */}
      {/* Spacing */}
      <div className="h-128 lg:h-12"></div>
      {/* === Spacing === */}
      <Adsection />
    </div>
  );
}
