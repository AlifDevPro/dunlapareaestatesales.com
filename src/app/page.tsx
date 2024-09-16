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
  title: "Best Estate Sales in Pikeville | Five Star Estate Liquidations",
  description:
    "Looking for the best estate sales in Pikeville? Five Star Estate Liquidations offers top-notch estate sales, auctions, and liquidation services in Pikeville and surrounding areas. Trust us to handle your property with care and professionalism.",
  icons: "/logo.png",
  keywords: [
    "best estate sales Pikeville",
    "estate liquidation Pikeville",
    "estate auctions Pikeville",
    "property sales Pikeville",
    "Pikeville estate sales",
    "Pikeville liquidation services",
    "Pikeville estate auctions",
    "estate sale companies Pikeville",
    "estate sale services Pikeville",
    "Bledsoe County estate sales",
    "local estate sales Pikeville",
    "furniture sales Pikeville",
    "moving sales Pikeville",
    "house sales Pikeville",
    "estate liquidation Bledsoe County",
    "Pikeville property liquidation",
    "estate sales near Bledsoe County",
    "Pikeville TN estate sales",
    "Pikeville TN liquidation",
    "Pikeville estate sale experts",
    "best estate liquidation Pikeville",
    "estate auctions near Pikeville",
    "estate sale companies Bledsoe County",
    "Pikeville estate liquidators",
    "estate sale events Pikeville",
    "Bledsoe County property liquidation",
    "estate sales and auctions Pikeville",
    "estate cleanouts Pikeville",
    "Pikeville estate buyouts",
    "local estate liquidation Pikeville",
    "Pikeville TN moving sales",
    "Pikeville property auctions",
    "real estate sales Pikeville TN",
    "estate sales services near Pikeville",
    "antiques sales Pikeville TN",
    "household estate sales Pikeville",
    "garage sales Pikeville TN",
    "yard sales Pikeville TN",
  ].join(", "),
  openGraph: {
    title: "Best Estate Sales in Pikeville | Five Star Estate Liquidations",
    description:
      "Discover the best estate sales in Pikeville with Five Star Estate Liquidations. We offer comprehensive estate sale services in Pikeville and Bledsoe County, ensuring a smooth and profitable transition.",
    url: "https://pikevilleestatesales.com/",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Five Star Estate Liquidations - Best Estate Sales in Pikeville",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Estate Sales in Pikeville | Five Star Estate Liquidations",
    description:
      "Five Star Estate Liquidations is your go-to for the best estate sales in Pikeville. We provide expert estate sale and liquidation services in Pikeville and surrounding areas.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Five Star Estate Liquidations - Pikeville Estate Sales",
      },
    ],
  },
  alternates: {
    canonical: "https://pikevilleestatesales.com/",
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
