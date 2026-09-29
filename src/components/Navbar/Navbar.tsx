"use client";

import Image from "next/image";
import { FaCoffee } from "react-icons/fa";
import { ASSETS } from "@/lib/constants";

export function Navbar() {
  return (
    <div className="bg-black shadow-md text-white border-b border-gray-800">
      <div className="container py-3">
        {/* Mobilde dikey, büyük ekranda yatay yerleşim */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          
          {/* Logo ve Marka İsmi */}
          <div data-aos="fade-down" data-aos-once="true">
            <a
              href="#"
              className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-3 tracking-wider font-sans"
            >
              <Image
                src={ASSETS.logo}
                alt="Cloud Cafe"
                width={48}
                height={48}
                className="w-12"
              />
              Cloud Cafe
            </a>
          </div>

          {/* Menü Linkleri (Artık mobilde de gizlenmiyor, hem telefonda hem masaüstünde görünür) */}
          <ul 
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="200"
            className="flex items-center gap-4 sm:gap-6 text-sm sm:text-lg"
          >
            <li>
              <a href="#" className="inline-block py-1 px-2 text-gray-300 hover:text-white duration-200">
                Ana Sayfa
              </a>
            </li>
            <li>
              <a href="#services" className="inline-block py-1 px-2 text-gray-300 hover:text-white duration-200">
                Menü
              </a>
            </li>
            <li>
              <a href="#about" className="inline-block py-1 px-2 text-gray-300 hover:text-white duration-200">
                Hakkımızda
              </a>
            </li>
          </ul>

          {/* Sipariş Butonu */}
          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            className="hidden sm:block"
          >
            <button
              type="button"
              className="bg-white text-black hover:bg-gray-200 hover:scale-105 duration-200 px-5 py-2 rounded-full flex items-center gap-3 font-semibold text-sm"
            >
              Sipariş Ver
              <FaCoffee className="text-xl text-black drop-shadow-sm cursor-pointer" />
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}