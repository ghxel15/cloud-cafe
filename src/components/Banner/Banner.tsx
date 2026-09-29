"use client";

import Image from "next/image";
import { GiCoffeeBeans } from "react-icons/gi";
import { FaMugHot } from "react-icons/fa";
import { IoSnow } from "react-icons/io5";
import { ASSETS } from "@/lib/constants";

/* Inline style object for dynamic bg image */
const bgImageStyle: React.CSSProperties = {
  backgroundImage: `url(${ASSETS.bannerBg})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

export function Banner() {
  return (
    <>
      <span id="about" />
      <div style={bgImageStyle}>
        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div data-aos="zoom-in">
                <Image
                  src={ASSETS.bannerImage}
                  alt="Premium harman kahve"
                  width={430}
                  height={430}
                  className="max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)] spin"
                />
              </div>
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-bold font-cursive"
                >
                  Premium Harman Kahve
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-sm text-gray-500 tracking-wide leading-5"
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eaque reiciendis inventore iste ratione ex alias quis magni at
                  optio
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-5">
                    <div data-aos="fade-up" className="flex items-center gap-3">
                      <GiCoffeeBeans className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-amber-100 text-amber-800" />
                      <span>Premium Kahve</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="300"
                      className="flex items-center gap-3"
                    >
                      <FaMugHot className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-200 text-orange-800" />
                      <span>Sıcak Kahve</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="500"
                      className="flex items-center gap-3"
                    >
                      <IoSnow className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-sky-100 text-sky-700" />
                      <span>Soğuk Kahve</span>
                    </div>
                  </div>
                  <div
                    data-aos="slide-left"
                    className="border-l-4 border-primary/50 pl-6 space-y-2"
                  >
                    <h2 className="text-2xl font-semibold font-cursive">
                      Çay Severler
                    </h2>
                    <p className="text-sm text-gray-500">
                      Tıpkı kod yazmak gibi, mükemmel bir çay demlemek de sabır, hassasiyet ve tutku gerektirir.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}