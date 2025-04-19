import React from "react";
import { useState } from "react";
import "./App.css"; // gunakan untuk CSS tambahan jika perlu
import "./assets/fonts/Fontspring.otf";
import Gambar1 from "./assets/images/Gambar-1.png";
import bgAlter1 from "./assets/images/Gambar-2.png";
import decorative1 from "./assets/images/decorative-1.png";
import decorative2 from "./assets/images/decorative-2.png";
import Background1 from "./assets/images/Background-1.png";
import Background3 from "./assets/images/Gambar-3.png";
import Logo_1 from "./assets/images/logo_1.png";
import bg2 from "./assets/images/bg_2.png";
import bg3 from "./assets/images/Background-2.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <section
        id="hero"
        className="rajdhani relative bg-cover bg-center bg-no-repeat h-[1000px] w-full text-white flex flex-col items-center justify-center px-6 md:px-16 lg:px-32 py-20 gap-6 text-center overflow-hidden"
      >
        <img
          src={Background1}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-center -z-10"
        />

        <img
          src={Logo_1}
          alt="Logo"
          className="w-[500px] md:w-[600px] lg:w-[200px] h-auto z-10"
        />

        <h1 className="text-sm md:text-lg lg:text-2xl bg-yellow-500 rounded-xl font-bold text-black py-2 px-4 z-10">
          CA : CjAreLw1YXcCv5g4iRT7VMouuMfa8Rvtt7mynsdr8qDJ
        </h1>
      </section> */}

      <section
        id="hero"
        className="rajdhani relative bg-cover bg-center bg-no-repeat h-[800px] w-full text-white flex flex-col lg:flex-row items-center justify-center px-6 md:px-16 lg:px-32 py-20 gap-10 text-center lg:text-left overflow-hidden"
      >
        <img
          src={Background1}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="mt-[500px] text-center">
          <h1 className="text-sm md:text-8xl text-black mt-4 font-boldoa1 font-extrabold">
            Hello Kittens &lt;3_
          </h1>
          <br></br>
          {/* <h1 className="text-md md:text-2xl bg-yellow-500 rounded-xl font-bold text-black xl:py-2 xl:px-4 inline-block">
            CA : CjAreLw1YXcCv5g4iRT7VMouuMfa8Rvtt7mynsdr8qDJ
          </h1> */}
        </div>
      </section>

      <br></br>

      {/* <div className="relative z-10 -mt-[80px] mb-[-40px] w-full text-center">
        <h2 className="font-boldoa3 text-white text-5xl md:text-6xl xl:text-8xl font-extrabold drop-shadow-xl inline-block px-6 py-3 rounded-xl">
          WELCOME DOOMERS
        </h2>
      </div> */}

      <section className="rajdhani text-white px-6 md:px-16 lg:px-32 py-20">
        <div className="flex flex-col lg:flex-row items-center xl:gap-40 gap-10 justify-center mb-10 text-center lg:text-left">
          <div className="w-full lg:w-1/2">
            <div className="w-full h-full">
              <img
                src={Gambar1}
                alt="Logo"
                width={700}
                height={500}
                className="drop-shadow-2xl rounded-sm w-full h-auto"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 max-w-xl text-black">
            <h1 className="font-semibold text-[36px] md:text-[35px] leading-tight">
              user123 Replied :
            </h1>
            <h1 className="font-semibold text-[36px] md:text-[35px] leading-tight">
              What's blobjack coins, Kittens?
            </h1>
            <h1 className="text-base md:text-lg container font-reguler">
              Blobjack Coin is more than just digital currency — it’s a
              lifestyle. Earn by being based, trade with fellow mods, and
              collect rare moments of pure sigma energy. No gas fees. No L’s.
              Just pure unfiltered power.
            </h1>
            <h1 className="text-base md:text-lg container font-reguler">
              Join the cult, stack your coins, and make the keyboard masters
              cope harder every day.
            </h1>
          </div>
        </div>
      </section>

      <section
        className="rajdhani text-white px-6 md:px-16 lg:px-32 py-20"
        style={{
          backgroundImage: `url(${Background3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col lg:flex-row items-center xl:gap-40 gap-40 justify-center text-center lg:text-left">
          <div className="flex flex-col gap-4 max-w-xl">
            <h1 className="font-semibold text-[36px] md:text-[35px] leading-tight">
              Join in, and defeat Keyboard Masters
            </h1>
            <div className="">
              <p className="text-base md:text-lg font-semibold">
                Unleash your inner Sigma. Step into the digital warzone and rise
                above the keyboard warriors. This isn't just about memes — it's
                about dominance, status, and knowing the catgirls are watching.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={bgAlter1}
                alt="Logo"
                className="object-contain max-w-full max-h-full drop-shadow-2xl rounded-sm"
              />
            </div>
          </div>
        </div>

        {/* <img
          src={decorative2}
          alt="Decorative Left"
          className="absolute xl:bottom-90 xl:left-80 md:bottom-90 md:left-20 left-20 md:mt-[10px] mt-[40px] w-[80px] md:w-[150px]"
        />

        <img
          src={decorative1}
          alt="Decorative Right"
          className="absolute xl:bottom-90 xl:right-80 md:bottom-90 md:right-20 right-20 md:mt-[10px] mt-[40px] w-[80px] md:w-[150px]"
        /> */}
      </section>
      <br></br>
      <Footer />
    </>
  );
};

export default App;
