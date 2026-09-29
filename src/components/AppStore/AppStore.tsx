"use client";

import { ASSETS } from "@/lib/constants";
import { FaInstagram } from "react-icons/fa";

/* Arka plan orijinal haliyle bırakıldı */
const backgroundStyle: React.CSSProperties = {
  backgroundImage: `url(${ASSETS.appStoreBg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

export function AppStore() {
  return (
    <div className="py-14" style={backgroundStyle}>
      <div className="container">
        <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4">
          <div
            data-aos="fade-up"
            data-aos-duration="300"
            className="space-y-6 max-w-xl mx-auto"
          >
            <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold text-white/90 pl-3">
              Bizi Instagram'da Takip Edin!
            </h1>
            <div className="flex flex-wrap justify-center sm:justify-start items-center pl-3">
              {/* Instagram Butonu (Güncel Link ve İsim) */}
              <a
                href="https://www.instagram.com/mustfabltt/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-6 py-3 rounded-full hover:scale-105 duration-200 font-semibold shadow-lg"
              >
                <FaInstagram className="text-3xl" />
                @cloudcafe
              </a>
            </div>
          </div>
          <div />
        </div>
      </div>
    </div>
  );
}