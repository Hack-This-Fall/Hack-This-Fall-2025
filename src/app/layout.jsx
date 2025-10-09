import { Geist, Geist_Mono, Outfit, Big_Shoulders } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const bigShoulders = Big_Shoulders({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hack This Fall 2025 – Celebrating 5 Years!",
  description:
    "Hack This Fall turns 5! 🎉 Join the milestone 2025 edition — a month-long virtual hackathon with in-person Build Stations across India, culminating in the ultimate Hacker House & Demo Day in Bengaluru. Build. Connect. Celebrate.",
  openGraph: {
    title: "Hack This Fall 2025 – Celebrating 5 Years!",
    description:
      "Hack This Fall turns 5! 🎉 Join the milestone 2025 edition — a month-long virtual hackathon with in-person Build Stations across India, culminating in the ultimate Hacker House & Demo Day in Bengaluru. Build. Connect. Celebrate.",
    siteName: "Hack This Fall 2025 – Celebrating 5 Years!",
    images: [
      {
        url: "https://5yo.hackthisfall.tech/og.png",
        width: 1552,
        height: 875,
        alt: "Hack This Fall 2025 – Celebrating 5 Years!",
      },
    ],
  },
  twitter: {
    title: "Hack This Fall 2025 – Celebrating 5 Years!",
    description:
      "Hack This Fall turns 5! 🎉 Join the milestone 2025 edition — a month-long virtual hackathon with in-person Build Stations across India, culminating in the ultimate Hacker House & Demo Day in Bengaluru. Build. Connect. Celebrate.",
    images: [
      {
        url: "https://5yo.hackthisfall.tech/og.png",
        width: 1552,
        height: 875,
        alt: "Hack This Fall 2025 – Celebrating 5 Years!",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${bigShoulders.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
