import { League_Spartan, Poppins } from "next/font/google";
import "./globals.css";

const bodyFont = Poppins({
  variable: "--body-font",
  subsets: ["latin"],
  weight: ["500"]
});

const headingFont = League_Spartan({
  variable: "--heading-font",
  subsets: ["latin"],
});

export const metadata = {
  title: "ITLegend - Assessment",
  description: "ITLegend - Next.js Assessment by Amr Assem",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.variable} ${headingFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
