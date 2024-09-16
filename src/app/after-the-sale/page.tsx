import { Metadata } from "next";

// Components
import Header from "@/sections/after-the-sale/header/header.tsx";
import AfterTheLequidations from "@/sections/after-the-sale/after-the-lequidations/afterTheLequidations";
import Settlement from "@/sections/after-the-sale/settlement/settlement";
import RealtorService from "@/sections/after-the-sale/realtor-service/realtorService";
import Contact from "@/sections/contact/contact";

export const metadata: Metadata = {
  title: "After the Sale in Dunlap - Five Star Estate Liquidations",
  description:
    "Explore our post-estate sale services in Dunlap at Five Star Estate Liquidations. We provide leftover item removal, settlement, and Realtor services to ensure you maximize the value of your property.",
  keywords: [
    "Dunlap post-estate sale services", "estate sale leftovers Dunlap", "estate liquidation cleanup Dunlap",
    "charitable donation Dunlap", "Dunlap estate sale settlement", "detailed accounting Dunlap estate sale",
    "estate sale proceeds Dunlap", "auction consignment settlement Dunlap", "Dunlap Realtor services",
    "real estate agent Dunlap", "property staging services Dunlap", "home staging Dunlap",
    "maximize listing price Dunlap", "minor repairs estate sale Dunlap", "preferred contractors Dunlap estate sale",
    "Tennessee estate sale services Dunlap", "Dunlap estate liquidation settlement", "estate sale cleanup Dunlap",
    "estate sale donations Dunlap", "tax-deductible donation receipt Dunlap", "estate sale bidding Dunlap",
    "estate sale dealers Dunlap", "Dunlap estate sale settlement process", "Dunlap estate sale finalization",
    "house cleaning Dunlap estate sale", "broom clean estate sale Dunlap", "Dunlap estate sale contractor network",
    "Dunlap post-sale real estate services", "Realtor Dunlap estate sale", "home staging Dunlap Tennessee",
    "property value maximization Dunlap", "real estate services after estate sale Dunlap", "Dunlap estate sale auction services",
    "Tennessee real estate staging", "estate sale final accounting Dunlap", "Dunlap estate sale check",
    "post-sale property staging Dunlap", "home staging for higher offers Dunlap", "Dunlap estate sale repairs",
    "estate sale realtor network Dunlap", "property cleanup after estate sale Dunlap", "estate sale final steps Dunlap",
    "Dunlap estate liquidation process", "Dunlap estate sale remaining items", "real estate services Dunlap estate sale",
    "home staging benefits Dunlap", "property staging for sale Dunlap", "estate sale property enhancement Dunlap",
    "Dunlap Tennessee estate sale experts", "estate liquidation professionals Dunlap", "post-sale settlement services Dunlap",
    "estate sale charity donations Dunlap", "donate estate sale leftovers Dunlap", "post-estate sale procedures Dunlap",
    "estate sale contractor services Dunlap", "real estate listing enhancements Dunlap", "property value improvements Dunlap",
    "Dunlap estate liquidation settlement process", "Tennessee property staging Dunlap", "estate sale finalization steps Dunlap",
    "Realtor services Dunlap Tennessee", "home improvement Dunlap estate sale", "Dunlap estate sale final proceeds",
    "real estate agent post-estate sale Dunlap", "estate sale contractor partnerships Dunlap", "home staging experts Dunlap",
    "Tennessee estate liquidators Dunlap", "Dunlap estate sale process final steps", "maximize home sale price Dunlap",
    "Dunlap estate sale cleanup services", "property staging post-estate sale Dunlap", "Dunlap estate liquidation completion",
    "post-sale real estate enhancement Dunlap", "estate sale completion services Dunlap", "real estate post-sale services Dunlap",
    "estate liquidation Realtor services Dunlap", "property staging and repair Dunlap", "post-sale estate services Dunlap",
    "Tennessee estate liquidation company Dunlap", "estate sale property staging Dunlap", "home repair for estate sale Dunlap",
    "Realtor Dunlap estate liquidation", "estate sale final checklist Dunlap", "Dunlap estate sale and property staging"
  ].join(", "),
  openGraph: {
    title: "After the Sale in Dunlap - Five Star Estate Liquidations",
    description:
      "Explore our comprehensive post-sale services in Dunlap at Five Star Estate Liquidations, including item removal, settlement, and Realtor services to enhance the value of your estate sale.",
    url: "https://dunlapareaestatesales.com/after-the-sale",
    images: [
      {
        url: "/after-the-lequidations.png",
        alt: "Post Estate Sale Services in Dunlap",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "Five Star Estate Liquidations",
  },
  twitter: {
    card: "summary_large_image",
    site: "@fivestarliquidations",
    title: "After the Sale in Dunlap - Five Star Estate Liquidations",
    description:
      "Post-estate sale services in Dunlap including cleanup, settlement, and Realtor services. Maximize your estate sale's value with Five Star Estate Liquidations.",
    images: [
      {
        url: "/after-the-lequidations.png",
        alt: "Post Estate Sale Services in Dunlap",
      },
    ],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://dunlapareaestatesales.com/after-the-sale",
  },
};

export default function AfterTheSale() {
  return (
    <main>
      <Header />
      <AfterTheLequidations />
      <Settlement />
      <RealtorService />
      <Contact />
    </main>
  );
}
