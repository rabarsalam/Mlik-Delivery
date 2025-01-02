import Image from "next/image";
import Banner from "../../public/Images/Thought .png";
import CupMilk from "../../public/Images/cupmilk.png";
import IphoneB from "../../public/Images/Mask group.png";
import Playstore from "../../public/Images/play-store.svg";
import Appstore from "../../public/Images/app-store.svg";
export default function Adsection() {
  return (
    <>
    
            {/* Application Ad*/}
            <div className=" relative mt-96 lg:mt-0 ">
        <Image
          src={Banner}
          className="w-full h-128 md:h-full "
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
              />
              <Image
                src={Appstore}
                width={200}
                height={50}
                alt="App Store"
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
    </>
  )
}
