import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Bella Napoli | Authentic Italian Restaurant',
  description: 'Experience authentic Italian cuisine at Bella Napoli. Handcrafted pasta, gourmet pizza, and exquisite desserts in a warm, inviting atmosphere. Make a reservation today!',
  keywords: ["Italian restaurant, authentic Italian food, pasta, pizza, tiramisu, Naples cuisine, reservations, fine dining, Italian wine"],
  openGraph: {
    "title": "Bella Napoli | Authentic Italian Restaurant",
    "description": "Experience authentic Italian cuisine at Bella Napoli. Handcrafted pasta, gourmet pizza, and exquisite desserts in a warm, inviting atmosphere. Make a reservation today!",
    "url": "https://www.bellanapoli.com",
    "siteName": "Bella Napoli",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/top-view-sliced-dough-with-tomato-sauce-tomatoes-dark-background-meal-dough-food-pasta-dinner_140725-80236.jpg",
        "alt": "Delicious Italian pasta dish"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Bella Napoli | Authentic Italian Restaurant",
    "description": "Experience authentic Italian cuisine at Bella Napoli. Handcrafted pasta, gourmet pizza, and exquisite desserts in a warm, inviting atmosphere. Make a reservation today!",
    "images": [
      "http://img.b2bpic.net/free-photo/top-view-sliced-dough-with-tomato-sauce-tomatoes-dark-background-meal-dough-food-pasta-dinner_140725-80236.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${dmSans.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
