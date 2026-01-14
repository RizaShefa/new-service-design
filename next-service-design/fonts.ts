import { Montserrat, Inter } from "next/font/google";

const header = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-header",
  weight: "400",
});

const body = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "600", "700"],
});

export { header, body };
