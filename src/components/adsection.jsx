import Image from "next/image";
import Banner from "../../public/Images/Thought .png";
import CupMilk from "../../public/Images/cupmilk.png";
import IphoneB from "../../public/Images/Mask group.png";
import Playstore from "../../public/Images/play-store.svg";
import Appstore from "../../public/Images/app-store.svg";
import Banner2 from "../../public/Images/Thought of the Day Icoderz 2.png";
import Banner3 from "../../public/Images/Thought of the Day Icoderz 3.png";
export default function Adsection() {
  return (
    <>
    
            {/* Application Ad*/}
            <div className="hidden md:block relative  lg:mt-0 ">
        <Image
          src={Banner}
          className="w-full md:h-full drop-shadow-[0_25px_35px_#000000FF]"
          style={{ overflow: "hidden" }}
          alt="Banner"
        />
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-28 items-center absolute inset-0 px-6 lg:px-16 py-10">
          {/* Banner Content */}
          <div className="text-white flex flex-col gap-4 items-start justify-start">
            <h1 className="text-base lg:text-4xl font-semibold">the innovative way to shop</h1>
            <p className="text-sm font-thin lg:font-light ">
              When you join DeliverZe you will enjoy our new and improved way of
              shopping through our virtual mall experience
            </p>
            <div className="flex gap-4 mt-4">
            <Image
                src={Playstore}
                width={200}
                height={50}
                alt="Play Store"
                className="cursor-pointer"
              />
              <Image
                src={Appstore}
                width={200}
                height={50}
                alt="App Store"
                className="cursor-pointer"
              />
            </div>
          </div>
          {/* === Banner Content === */}
          {/* Banner Icons */}
          <div className="relative lg:bottom-33px lg:left-6px flex justify-center items-center " >
            <Image
              className="z-10"
              src={IphoneB}
              layout="intrinsic"
              alt="iPhone Mockup"
            />
            <Image
              src={CupMilk}
              className="absolute bottom-0 right-0 "
              layout="intrinsic"
              alt="Cup of Milk"
              style={{zIndex:"111"}}
            />
          </div>
          {/* === Banner Icons === */}
        </div>
      </div>
      {/* === Application Ad === */}
      {/* Application Ad Mobile */}
      <div className=" md:hidden relative  lg:mt-0 ">
        <div className="relative">
            <Image
            src={Banner2}
            className="w-full md:h-full absolute drop-shadow-[0_25px_35px_#000000FF]"
            style={{ overflow: "hidden" }}
            alt="Banner"
            />
            <Image
            src={Banner3}
            className="w-full md:h-full absolute -top-52"
            style={{ overflow: "hidden" }}
            alt="Banner"
            />
            {/* Banner Icons */}
            <div className="absolute top-10 right-6">

                <div className="relative flex justify-center items-center " >
                  <Image
                    className="z-10 w-72"
                    src={IphoneB}
                    layout="intrinsic"
                    alt="iPhone Mockup"
                    />
                  <Image
                    src={CupMilk}
                    className="absolute bottom-0 right-14 w-40"
                    layout="intrinsic"
                    alt="Cup of Milk"
                    style={{zIndex:"111"}}
                    />
                </div>
             </div>
          {/* === Banner Icons === */}
          </div>
         <div style={{top:"-34px"}} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center absolute px-6   ">
          {/* Banner Content */}
          <div className="text-white flex flex-col gap-4 items-center justify-center">
            <h1 className="text-base lg:text-4xl font-semibold">the innovative way to shop</h1>
            <p className="text-sm font-thin lg:font-light text-center">
              When you join DeliverZe you will enjoy our new and improved way of
              shopping through our virtual mall experience
            </p>
            <div className="flex flex-col  ">
            <Image
                src={Playstore}
                width={200}
                height={50}
                alt="Play Store"
                className="cursor-pointer"
              />
              <Image
                src={Appstore}
                width={200}
                height={50}
                alt="App Store"
               className="cursor-pointer"
              />
            </div>
          </div>
          {/* === Banner Content === */}
          
        </div>
      </div>
      {/* === Application Ad Mobile === */}
    </>
  )
}
