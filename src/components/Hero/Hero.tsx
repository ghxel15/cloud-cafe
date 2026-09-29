"use client";

import Image from "next/image";
import { ASSETS } from "@/lib/constants";

// Arka plan resmi için stil ayarı (public klasöründeki resmi çeker)
const bgStyle: React.CSSProperties = {
  backgroundImage: "url('/coffee-texture.jpg')",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

export function Hero() {
  return (
    // Arka plan resmini uygulayıp, üzerine siyah transparan bir katman (overlay) atıyoruz
    <div style={bgStyle} className="min-h-[550px] sm:min-h-[600px] flex justify-center items-center text-white relative z-10">
      
      {/* Siyah karartma katmanı (yazıların okunabilirliğini artırır) */}
      <div className="absolute inset-0 bg-black/80 z-[-1]"></div>

      <div className="container pb-8 sm:pb-0 mx-auto px-4">
        {/* gap-10 ile iki sütun arasına mesafe koyarak çakışmayı engelledik */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          
          <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
            <h1
              data-aos="fade-up"
              data-aos-once="true"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Şehrin en taze{" "}
              {/* Kahvesi kelimesini alt satıra alarak daha şık görünmesini sağladık */}
              <span
                data-aos="zoom-out"
                data-aos-delay="300"
                className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 block mt-2"
              >
                Kahvesini
              </span>{" "}
              sunuyoruz
            </h1>
            <div data-aos="fade-up" data-aos-delay="400">
              <a
                href="#services"
                className="inline-block bg-white text-black hover:bg-gray-200 hover:scale-105 duration-200 py-3 px-8 rounded-full font-semibold mt-4"
              >
                Menüyü Keşfet
              </a>
            </div>
          </div>
          
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2"
          >
            <Image
              data-aos-once="true"
              src={ASSETS.heroImage}
              alt="Hurma Cafe Kahve"
              width={400}
              height={400}
              // Resmin taşmasını (çakışmasını) önlemek için scale etkisini kaldırdık
              className="w-[250px] sm:w-[400px] mx-auto spin"
            />
            <div
              data-aos="fade-left"
              className="bg-white p-3 rounded-xl absolute top-10 left-0 sm:left-10 shadow-lg"
            >
              <h2 className="text-black font-bold">Taze Çekirdek</h2>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="0"
              className="bg-white p-3 rounded-xl absolute bottom-10 right-0 sm:right-10 shadow-lg"
            >
              <h2 className="text-black font-bold">%100 Arabica</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}