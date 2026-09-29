import type { ServiceItem } from "@/types";

/**
 * Coffee types for the Services grid. aosDelay (ms string) controls staggered AOS fade-up per card.
 */
export const servicesData: ServiceItem[] = [
  {
    id: 1,
    img: "/coffee2.png",
    name: "Espresso",
    description:
      "Yoğun kahve tutkunları için ince öğütülmüş, taze kavrulmuş %100 Arabica çekirdeklerinden hazırlanan sert ve aromatik lezzet.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: "/coffee2.png",
    name: "Americano",
    description:
      "Klasik espresso lezzetinin sıcak su ile yumuşatılmış hali. Gün boyu kahve keyfini uzun uzun yaşamak isteyenler için ideal.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: "/coffee2.png",
    name: "Cappuccino",
    description:
      "Zengin espresso, pürüzsüz sıcak süt ve üzerini kaplayan yoğun süt köpüğünün mükemmel uyumu. Yumuşak içimli bir klasik.",
    aosDelay: "500",
  },
];