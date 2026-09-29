"use client";

import Image from "next/image";
import { FaCoffee } from "react-icons/fa";
import { ASSETS } from "@/lib/constants";

export function Navbar() {
  return (
    <div className="bg-black shadow-md text-white border-b border-gray-800">
      <div className="container py-2">
        <div className="flex justify-between items-center">
          
          {/* Logo ve Menü Linklerini yan yana (sola) grupladık */}
          <div className="flex items-center gap-12">
            <div data-aos="fade-down" data-aos-once="true">
              <a
                href="#"
                className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-3 tracking-wider font-sans"
              >
                <Image
                  src={ASSETS.logo}
                  alt="Hurma Cafe"
                  width={56}
                  height={56}
                  className="w-14"
                />
                Cloud Cafe
              </a>
            </div>

            {/* Menü Linkleri (Sola yaslı ve Türkçeleştirilmiş) */}
            <ul 
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
              className="hidden sm:flex items-center gap-6"
            >
              <li>
                <a href="#" className="inline-block text-lg py-2 px-2 text-gray-400 hover:text-white duration-200">
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a href="#services" className="inline-block text-lg py-2 px-2 text-gray-400 hover:text-white duration-200">
                  Menü
                </a>
              </li>
              <li>
                <a href="#about" className="inline-block text-lg py-2 px-2 text-gray-400 hover:text-white duration-200">
                  Hakkımızda
                </a>
              </li>
            </ul>
          </div>

          {/* Sipariş Butonu (Siyah-Beyaz konsepte uygun) */}
          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
          >
            <button
              type="button"
              className="bg-white text-black hover:bg-gray-200 hover:scale-105 duration-200 px-5 py-2 rounded-full flex items-center gap-3 font-semibold"
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