"use client";

import Image from "next/image";
import { servicesData } from "@/data/services";

export function Services() {
  return (
    <>
      {/* Navbar'dan tıklandığında buraya kayması için çapa (anchor) */}
      <span id="services" />
      <div className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            {/* Başlığı siyah yaptık ve Türkçeleştirdik */}
            <h1 className="text-4xl font-bold text-black font-sans">
              Özel Lezzetlerimiz
            </h1>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {servicesData.map((service) => (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                // hover:bg-primary (kahverengi) yerine hover:bg-black (siyah) yaptık
                className="rounded-2xl bg-white hover:bg-black hover:text-white relative shadow-xl duration-300 group max-w-[300px] border border-gray-100"
              >
                <div className="h-[122px]">
                  <Image
                    src={service.img}
                    alt={service.name}
                    width={200}
                    height={122}
                    className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h2 className="text-xl font-bold">{service.name}</h2>
                  <p className="text-gray-500 group-hover:text-gray-300 duration-300 text-sm line-clamp-2 mt-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}