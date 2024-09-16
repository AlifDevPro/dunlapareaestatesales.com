import Image from "next/image";
import type { Metadata } from "next";

// Components
import Scheduler from "@/components/individual/scheduler/scheduler";
import Header from '@/sections/header/header';
import About from "@/sections/about/about";
import Marketing from "@/sections/marketing/marketing";
import WhyUs from "@/sections/whyUs/whyUs";
import Mission from "@/sections/mission/mission";
import Services from "@/sections/services/services";
import Cta from "@/sections/cta/cta";
import Ftf from "@/sections/ftf/ftf";
import Faq from "@/sections/faq/faq";
import Contact from "../sections/contact/contact";

// Styles
import './globals.css';
import './globals.scss';

export const metadata: Metadata = {
  title: "Best Estate Sales in Dunlap | Five Star Estate Liquidations",
  description:
    "Looking for the best estate sales in Dunlap? Five Star Estate Liquidations offers top-notch estate sales, auctions, and liquidation services in Dunlap and surrounding areas. Trust us to handle your property with care and professionalism.",
  icons: "/logo.png",
  keywords: [
    "best estate sales Dunlap",
    "estate liquidation Dunlap",
    "estate auctions Dunlap",
    "property sales Dunlap",
    "Dunlap estate sales",
    "Dunlap liquidation services",
    "Dunlap estate auctions",
    "estate sale companies Dunlap",
    "estate sale services Dunlap",
    "Sequatchie County estate sales",
    "local estate sales Dunlap",
    "furniture sales Dunlap",
    "moving sales Dunlap",
    "house sales Dunlap",
    "estate liquidation Sequatchie County",
    "Dunlap property liquidation",
    "estate sales near Sequatchie County",
    "Dunlap TN estate sales",
    "Dunlap TN liquidation",
    "Dunlap estate sale experts",
    "best estate liquidation Dunlap",
    "estate auctions near Dunlap",
    "estate sale companies Sequatchie County",
    "Dunlap estate liquidators",
    "estate sale events Dunlap",
    "Sequatchie County property liquidation",
    "estate sales and auctions Dunlap",
    "estate cleanouts Dunlap",
    "Dunlap estate buyouts",
    "local estate liquidation Dunlap",
    "Dunlap TN moving sales",
    "Dunlap property auctions",
    "real estate sales Dunlap TN",
    "estate sales services near Dunlap",
    "antiques sales Dunlap TN",
    "household estate sales Dunlap",
    "garage sales Dunlap TN",
    "yard sales Dunlap TN",
  ].join(", "),
  openGraph: {
    title: "Best Estate Sales in Dunlap | Five Star Estate Liquidations",
    description:
      "Discover the best estate sales in Dunlap with Five Star Estate Liquidations. We offer comprehensive estate sale services in Dunlap and Sequatchie County, ensuring a smooth and profitable transition.",
    url: "https://www.dunlapareaestatesales.com/",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Five Star Estate Liquidations - Best Estate Sales in Dunlap",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Estate Sales in Dunlap | Five Star Estate Liquidations",
    description:
      "Five Star Estate Liquidations is your go-to for the best estate sales in Dunlap. We provide expert estate sale and liquidation services in Dunlap and surrounding areas.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Five Star Estate Liquidations - Dunlap Estate Sales",
      },
    ],
  },
  alternates: {
    canonical: "https://www.dunlapareaestatesales.com/",
  },
};


export default function Home() {
  return (
    <main>
      <Scheduler />
      <Header />
      <About />
      <Marketing />
      <WhyUs />
      <Mission />
      <Services />
      <Cta />
      <Ftf />
      <Faq />
      <Contact />
    </main>
  );
}
