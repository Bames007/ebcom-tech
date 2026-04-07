import {
  Bebas_Neue,
  Gantari,
  Inter,
  Poppins,
  Space_Grotesk,
} from "next/font/google";

export const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-neue",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const gantari = Gantari({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-gantari",
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "700"],
  variable: "--font-space-grotesk",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-inter",
});

export const primaryColor = "#a27b5b";
export const backgroundColor = "#dcd7c9";
export const accentColor = "#2c3639";
export const highlightColor = "#3f4e4f";
