import Providers from "@/components/provider";
import "./globals.css";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import MessageBox from "@/components/message-box";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const firaCode = localFont({
  src: "./fonts/FiraCode-Light.ttf",
  variable: "--font-fira-code",
  display: "swap",
});

const upheavel = localFont({
  src: "./fonts/UpheavalPro.ttf",
  variable: "--font-upheaval",
  display: "swap",
});

const autom = localFont({
  src: "./fonts/Autom-Bold.otf",
  variable: "--font-autom",
  display: "swap",
});

const minecraftia = localFont({
  src: "./fonts/Minecraftia-Regular.ttf",
  variable: "--font-minecraftia",
});

export const metadata = {
  title: "XeroCrypt",
  description:
    "A 24 Hr Nation Wide Cryptic Hunt in Collaboration with Coding Blocks !! ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark ">
      <body
        className={`bg-background no-scrollbar
        ${montserrat.variable} ${firaCode.variable} ${upheavel.variable} ${autom.variable} ${minecraftia.variable}
      `}
      >
        <Providers>{children}</Providers>
        <MessageBox />
      </body>
    </html>
  );
}
