import Image from "next/image";
import PhoneFrame from "../../public/Images/phone.svg";
import MilkSection from "../../public/Images/Milk.svg";
export default function Home() {
  return (
    <div className="">
      {/* First Section */}
      <div className="p-0   grid grid-cols-1 lg:grid-cols-2  mt-6 justify-center items-center">
        {/* Content */}
        <div className=" p-36 grid justify-center items-center">
          <h1 className="text-lightgreen font-semibold text-7xl">Milk</h1>
          <h1 className="font-semibold text-7xl">Delivery App</h1>
          <p className="font-medium mt-7 ">
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
      {/* Milk Section */}
      <div className="w-full relative ">
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
      </div>
      {/* === Milk Section === */}
      {/* What We Are */}
      <div className="flex justify-center items-center">
        <h1>Why are we unique ?</h1>
      </div>
      {/* === What We Are === */}
    </div>
  );
}
