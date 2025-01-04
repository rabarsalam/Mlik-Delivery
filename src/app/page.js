import Form from "next/form";
import Image from "next/image";
import logoimg from "../../public/Images/a.svg";
import PhoneFrame from "../../public/Images/phone.svg";
import MilkSection from "../../public/Images/Milk.svg";
import Delivery from "../../public/Images/delivery.png";
import Localstore from "../../public/Images/local.png";
import Map from "../../public/Images/map.png";
import Adsection from "@/components/adsection";
import Rsection from "../../public/Images/asd.svg";
import Iphone14 from "../../public/Images/Iphone 14.svg";
import download from "../../public/Images/download.svg";
import smile from "../../public/Images/smile.svg";
import person from "../../public/Images/person.svg";
import star from "../../public/Images/star.svg";
import Carousel from "@/components/carousel";
import Drinking from "../../public/Images/Drinking.svg";
import MilkBackground from "../../public/Images/MilkBack.svg";
import MilkWave from "../../public/Images/MilkWave.svg";
import Facebook from "../../public/Images/fb-ic.svg";
import X from "../../public/Images/tweet-ic.svg";
import Instagram from "../../public/Images/insta-ic.svg";
import Link from "next/link";
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
      {/* Application Ad*/}
      <Adsection />
      {/* === Application Ad === */}
      {/* Spacing */}
      <div className=" md:hidden" style={{ height: "600px" }}></div>
      {/* === Spacing === */}
      {/* App Feature */}
      <div className="flex flex-col justify-center items-center gap-10 overflow-hidden">
        <div className="flex flex-col justify-center items-center gap-2">
          <h5 className="uppercase underline  text-lightgreen font-medium text-2xl">
            Features
          </h5>
          <h1 className="capitalize font-bold text-5xl">awosome features</h1>
        </div>
        <div className="grid grid-cols-3 ">
          <div className="flex justify-between items-start">
            <div className="flex md:flex-col  gap-28 mt-24">
              <div className="flex flex-col gap-6">
                <h1 className="font-semibold">Near By Stores</h1>
                <p className="font-light">
                  Discover Local Stores based on your GPS location
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <h1 className="font-semibold">Near By Stores</h1>
                <p className="font-light">
                  Discover Local Stores based on your GPS location
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <h1 className="font-semibold">Near By Stores</h1>
                <p className="font-light">
                  Discover Local Stores based on your GPS location
                </p>
              </div>
            </div>
            <Image
              src={Rsection}
              className="rotate-90 lg:rotate-0"
              alt="Right Section"
            />
          </div>
          <div>
            <Image src={Iphone14} alt="Right Section" />
          </div>
          <div className="flex justify-between items-start ">
            <Image
              src={Rsection}
              className="rotate-90 lg:rotate-0"
              alt="Right Section"
            />
            <div className="flex md:flex-col  gap-28 mt-24">
              <div className="flex flex-col gap-6">
                <h1 className="font-semibold">Near By Stores</h1>
                <p className="font-light">
                  Discover Local Stores based on your GPS location
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <h1 className="font-semibold">Near By Stores</h1>
                <p className="font-light">
                  Discover Local Stores based on your GPS location
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <h1 className="font-semibold">Near By Stores</h1>
                <p className="font-light">
                  Discover Local Stores based on your GPS location
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* === App Feature === */}
      {/* App Download */}
      <div className="grid justify-center items-center gap-20">
        <div className="flex flex-col justify-center items-center gap-6">
          <h5 className="uppercase underline  text-lightgreen font-medium text-xl">
            Lorem IPSUM
          </h5>
          <h1 className="capitalize font-bold text-5xl">App Download</h1>
        </div>
        <div className="grid  lg:grid-cols-4 gap-20 items-center justify-center">
          <div className="w-48 h-20 bg-white rounded-lg relative px-3 py-2 flex flex-col gap-2">
            <Image
              src={download}
              className="absolute -top-5 right-8"
              width={50}
              height={50}
              alt="Download"
            />
            <h1 className="text-3xl font-semibold">1000</h1>
            <p className="text-sm ">App Download</p>
          </div>
          <div className="w-48 h-20 bg-white rounded-lg relative px-3 py-2 flex flex-col gap-2">
            <Image
              src={smile}
              className="absolute -top-5 right-8"
              width={50}
              height={50}
              alt="Download"
            />
            <h1 className="text-3xl font-semibold">2000</h1>
            <p className="text-sm ">Happy Clients</p>
          </div>
          <div className="w-48 h-20 bg-white rounded-lg relative px-3 py-2 flex flex-col gap-2">
            <Image
              src={person}
              className="absolute -top-5 right-8"
              width={50}
              height={50}
              alt="Download"
            />
            <h1 className="text-3xl font-semibold">400</h1>
            <p className="text-sm uppercase ">Active Accounts</p>
          </div>
          <div className="w-48 h-20 bg-white rounded-lg relative px-3 py-2 flex flex-col gap-2">
            <Image
              src={star}
              className="absolute -top-5 right-8"
              width={50}
              height={50}
              alt="Download"
            />
            <h1 className="text-3xl font-semibold">200</h1>
            <p className="text-sm ">TOTAL APP RATES</p>
          </div>
        </div>
      </div>
      {/* === App Download === */}
      {/* Spacing */}
      <div className=" " style={{ height: "250px" }}></div>
      {/* === Spacing === */}
      {/* Carousel Part */}
      <Carousel />
      {/* === Carousel Part === */}
      {/* Spacing */}
      <div className=" " style={{ height: "550px" }}></div>
      {/* === Spacing === */}
      {/* Review Section */}
      <div className="grid grid-cols-2 gap-72  p-10">
        {/* Content */}
        <div className="grid grid-cols-1 justify-start items-start gap-6">
          <h5 className="uppercase underline  text-lightgreen font-medium text-xl">
            Reviews
          </h5>
          <h1 className="capitalize font-bold text-5xl">Client Reviews</h1>
          <p className="capitalize font-light">
            Love the app!! I&apos;m looking forward for them to add more of my
            favorite stores so i can use them more offen. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry&apos;s standard dummy text ever since the 1500s,{" "}
          </p>
          <div>
            <div className="flex gap-4">
              <Image
                src={person}
                width={50}
                height={50}
                className=" border-lightgreen border-2 rounded-full"
                alt="Client"
              />
              <div>
                <h1 className="capitalize text-lightgreen font-semibold text-xl">
                  Allhalal
                </h1>
                <h3 className="capitalize font-light">
                  Finally a great app with variety
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="grid grid-cols-1">
          <Image src={Drinking} width={500} height={500} alt="Drinking Milk" />
        </div>
      </div>
      {/* === Review Section === */}
      {/* Contact Section */}
      <div className=" flex items-center relative ">
        <Image src={MilkBackground} className="w-full" alt="Background" />
        <div className="bg-white absolute right-44 bottom-36 w-128 h-120 p-7 rounded-xl ">
          <h1 className="capitalize text-lightgreen underline font-medium text-xl">
            Contact us
          </h1>
          <h3 className="capitalize font-bold text-4xl mt-3">
            Get in touch with us!{" "}
          </h3>
          <Form action="/search" className="mt-7 grid gap-3">
            <input
              className="border-2 p-4 w-full rounded-lg"
              placeholder="Your Name"
            />
            <input
              className="border-2 p-4 w-full rounded-lg"
              placeholder="Your Email"
            />
            <textarea
              rows="7"
              className="border-2 p-4 w-full rounded-lg resize-none"
              placeholder="Your Message"
            />
            <button
              type="submit"
              className="bg-lightgreen text-white font-semibold rounded-xl w-32 mt-6  p-2 drop-shadow-[0_15px_35px_#71AA38]"
            >
              Send Now
            </button>
          </Form>
        </div>
      </div>
      {/* === Contact Section ===*/}
      {/* Footer */}
      <div>
        <div className=" relative">
          <Image
            src={MilkWave}
            alt="Milk Wave"
            className="w-full absolute  "
            style={{ top: "-130px" }}
          />
        </div>
        {/* Spacing */}
        <div className=" " style={{ height: "250px" }}></div>
        {/* === Spacing === */}
        <footer className=" h-16 p-10 flex justify-between  items-center  ">
          <div>
            <Image src={logoimg} width={150} height={150} alt="logo" />
          </div>
          <div>
            <ul className="text-black  gap-8  font-semibold   flex items-center ">
              <div className=" flex gap-6   p-6 items-center  w-full    ">
                <Link
                  href="/About"
                  className=" hover:text-green-600 duration-150"
                >
                  About
                </Link>

                <Link
                  href="/Terms & Conditions"
                  className="hover:text-green-600 duration-150"
                >
                  Terms & Conditions
                </Link>
                <Link
                  href="/Privacy Policy"
                  className="hover:text-green-600 duration-150"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/Contact"
                  className="hover:text-green-600 duration-150"
                >
                  Contact
                </Link>
              </div>
            </ul>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <Link href="">
              <Image src={Facebook} width={30} height={30} alt="Rabar" />
            </Link>
            <Link href="">
              <Image src={X} width={30} height={30} alt="Rabar" />
            </Link>
            <Link href="">
              <Image src={Instagram} width={30} height={30} alt="Rabar" />
            </Link>
          </div>
        </footer>
      </div>
      <div className="text-center mb-7 text-sm">
        <p>Copyright ©2025 deonde.</p>
      </div>
      {/* === Footer === */}
    </div>
  );
}
