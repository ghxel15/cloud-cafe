"use client";

import Image from "next/image";
import { ASSETS } from "@/lib/constants";

const bgStyle: React.CSSProperties = {
  backgroundImage: "url('/coffee-texture.jpg')",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

export function Hero() {
  return (
    <div style={bgStyle} className="min-h-[auto] sm:min-h-[600px] py-16 sm:py-0 flex justify-center items-center text-white relative z-10">
      
      {/* Siyah karartma katmanı */}
      <div className="absolute inset-0 bg-black/80 z-[-1]"></div>

      <div className="container pb-8 sm:pb-0 mx-auto px-4">
        {/* Mobilde hizalamayı düzeltmek için esnek bir grid yapısı */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          
          {/* Sol: Başlık ve Buton (Mobilde order-1 yaparak en üste aldık) */}
          <div className="flex flex-col justify-center gap-6 text-center sm:text-left order-1 sm:order-1">
            <h1
              data-aos="fade-up"
              data-aos-once="true"
              className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Şehrin en taze{" "}
              <span
                data-aos="zoom-out"
                data-aos-delay="300"
                className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 block sm:inline mt-1 sm:mt-0"
              >
                Kahvesini
              </span>{" "}
              sunuyoruz
            </h1>
            <div data-aos="fade-up" data-aos-delay="400">
              <a
                href="#services"
                className="inline-block bg-white text-black hover:bg-gray-200 hover:scale-105 duration-200 py-3 px-8 rounded-full font-semibold mt-2 shadow-lg"
              >
                Menüyü Keşfet
              </a>
            </div>
          </div>
          
          {/* Sağ: Kahve Resmi ve Rozetler (Mobilde order-2) */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="min-h-[350px] sm:min-h-[450px] flex justify-center items-center relative order-2 sm:order-2 my-4 sm:my-0"
          >
            <Image
              data-aos-once="true"
              src={ASSETS.heroImage}
              alt="Cloud Cafe Kahve"
              width={350}
              height={350}
              className="w-[220px] sm:w-[400px] mx-auto spin"
            />
            <div
              data-aos="fade-left"
              className="bg-white p-2.5 sm:p-3 rounded-xl absolute top-4 left-2 sm:left-10 shadow-lg"
            >
              <h2 className="text-black font-bold text-xs sm:text-sm">Taze Çekirdek</h2>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="0"
              className="bg-white p-2.5 sm:p-3 rounded-xl absolute bottom-4 right-2 sm:right-10 shadow-lg"
            >
              <h2 className="text-black font-bold text-xs sm:text-sm">%100 Arabica</h2>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}