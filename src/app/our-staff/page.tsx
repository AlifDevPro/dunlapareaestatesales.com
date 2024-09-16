import { Metadata } from "next"

//components
import Header from "@/sections/staff/header/ourStaff"
import OurStaff from "@/sections/staff/our-staff/ourStaff"
import StaffDay from "@/sections/staff/staffDay/staffDay"
import Contact from "@/sections/contact/contact"

export const metadata: Metadata = {
  title: "Our Staff - Dunlap Estate Sales",
  description:
    "Meet the professional team at Dunlap Estate Sales. Our experienced staff is dedicated to providing exceptional estate sale services in Dunlap and surrounding areas.",
  keywords: [
    "estate liquidation staff Dunlap", "estate sale professionals Dunlap", "Dunlap estate liquidation",
    "professional estate team Dunlap", "Dunlap estate sales staff", "auction staff Dunlap",
    "estate consulting team Dunlap", "estate appraisers Dunlap", "property accessors Dunlap",
    "estate sale management Dunlap", "Tennessee estate sale team", "professional estate consultants Dunlap",
    "Dunlap estate appraisers", "estate sale security Dunlap", "estate sale parking attendants Dunlap",
    "estate sale crowd control Dunlap", "estate sale accounting Dunlap", "estate liquidation services Dunlap",
    "estate sale experts Dunlap", "estate sale planning Dunlap", "Dunlap estate sale company",
    "estate liquidation management Dunlap", "estate sale preparation Dunlap", "professional estate sale staff Dunlap",
    "Tennessee auction staff", "estate sale consultation Dunlap", "estate sale day staff Dunlap",
    "estate sale security team Dunlap", "Dunlap estate liquidation experts", "estate liquidation appraisers Dunlap",
    "estate sales management Dunlap", "estate sale support staff Dunlap", "estate auction professionals Dunlap",
    "estate sale assistance Dunlap", "professional estate sale service Dunlap", "Tennessee estate liquidation professionals",
    "estate sale organization Dunlap", "estate sale logistics Dunlap", "estate sale appraisers Tennessee",
    "Dunlap property accessors", "estate sale services Tennessee", "estate liquidation team Dunlap",
    "estate sale staffing Dunlap", "estate liquidation staffing Dunlap", "Dunlap estate sale consultants",
    "estate sale appraisal experts Dunlap", "estate sale security services Dunlap", "estate sale crowd control team Dunlap",
    "professional estate sale management Dunlap", "Tennessee estate sale professionals", "estate liquidation consulting Dunlap",
    "estate sale process Dunlap", "estate sale uniformed staff Dunlap", "Tennessee estate liquidation services Dunlap",
    "estate sale consultation Dunlap", "estate liquidation company Dunlap", "estate sale business Dunlap",
    "estate liquidation firm Dunlap", "professional estate liquidators Dunlap", "estate sale day preparation Dunlap",
    "Dunlap estate sale experts", "estate sale uniformed team Dunlap", "estate liquidation specialists Dunlap",
    "estate sale logistics team Dunlap", "estate sale business Dunlap", "Tennessee estate sale management Dunlap",
    "estate liquidation support Dunlap", "estate sale services Dunlap", "estate sale security Dunlap",
    "Tennessee estate crowd control Dunlap", "estate sale parking services Dunlap", "estate sale financial management Dunlap",
    "estate sale pricing control Dunlap", "estate sale account management Dunlap", "estate liquidation expertise Dunlap",
    "Dunlap estate sale professionals", "estate liquidation consulting Dunlap", "Dunlap estate liquidation team"
  ].join(", "),
  openGraph: {
    title: "Our Staff - Dunlap Estate Sales",
    description:
      "Meet the dedicated professionals at Dunlap Estate Sales. Our team ensures a seamless estate sale experience for you in Dunlap and surrounding areas.",
    url: "https://dunlapareaestatesales.com/our-staff",
    images: [
      {
        url: "/estate-staff-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Our Staff at Dunlap Estate Sales",
      },
    ],
    siteName: "Dunlap Estate Sales",
  },
  twitter: {
    card: "summary_large_image",
    site: "@fivestarliquidations",
    title: "Our Staff - Dunlap Estate Sales",
    description:
      "Meet the professional team at Dunlap Estate Sales. We handle every aspect of estate sales with expertise and dedication.",
    images: [
      {
        url: "/estate-staff-banner.jpg",
        alt: "Our Staff at Dunlap Estate Sales",
      },
    ],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://dunlapareaestatesales.com/our-staff",
  },
};

export default function Staff() {
    return(
        <main>
            <Header />
            <OurStaff />
            <StaffDay />
            <Contact />
        </main>
    )
}
