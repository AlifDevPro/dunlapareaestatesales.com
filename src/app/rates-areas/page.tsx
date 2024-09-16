import Header from "@/sections/rates-areas/header/header"
import OurRates from "@/sections/rates-areas/our-rates/ourRates"
import Areas from "@/sections/rates-areas/areas/areas"
import Contact from "@/sections/contact/contact"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estate Liquidation Rates & Areas in Dunlap - Five Star Estate Liquidations",
  description:
    "Explore our comprehensive estate liquidation services in Dunlap. We offer transparent, commission-based rates and cover various areas around Dunlap.",
  keywords: [
    "Dunlap estate liquidation", "estate sales Dunlap", "estate planning Dunlap", 
    "Dunlap estate services", "estate liquidation rates Dunlap", "commission-based estate sale Dunlap",
    "estate sale contract Dunlap", "estate sale process Dunlap", "estate sale expenses Dunlap",
    "no up-front fees Dunlap", "professional signage Dunlap", "estate advertising Dunlap",
    "labor costs in estate sales Dunlap", "estate sale management Dunlap", "Dunlap estate sale company",
    "estate sale experts Dunlap", "estate liquidation Dunlap", "Tennessee estate liquidation services Dunlap",
    "estate sale consultation Dunlap", "estate liquidation contract Dunlap", "Five Star Estate Liquidations Dunlap",
    "estate liquidation Dunlap", "Dunlap estate liquidation services", "Dunlap estate sale company"
  ].join(", "),
  openGraph: {
    title: "Estate Liquidation Rates & Areas in Dunlap - Five Star Estate Liquidations",
    description:
      "Serving Dunlap and surrounding areas with comprehensive estate liquidation services. Discover our commission-based rates and the areas we cover.",
    url: "https://dunlapareaestatesales.com/rates-areas",
    images: [
      {
        url: "/images/estate-liquidation-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Estate Liquidation Services in Dunlap",
      },
    ],
    siteName: "Dunlap Estate Sales",
  },
  twitter: {
    card: "summary_large_image",
    site: "@fivestarliquidations",
    title: "Estate Liquidation Rates & Areas in Dunlap - Five Star Estate Liquidations",
    description:
      "Discover our estate liquidation rates and the areas we cover in Dunlap. Offering transparent, commission-based rates and comprehensive services.",
    images: [
      {
        url: "/images/estate-liquidation-banner.jpg",
        alt: "Estate Liquidation Services in Dunlap",
      },
    ],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://dunlapareaestatesales.com/rates-areas",
  },
};


export default function RatesAreas() {
    return(
        <main>
            <Header />
            <OurRates />
            <Areas />
            <Contact />
        </main>
    )
}
