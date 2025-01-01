import { Poppins } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/navbar";

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
export const metadata = {
  title: "Milk Delivery",
  description: "Food Delivery App",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body
          className={`${poppins.variable} antialiased`}
        >
          <Navbar />
          {children}
        </body>
      </html>
    </>
  );
}
