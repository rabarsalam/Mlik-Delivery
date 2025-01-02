import "./globals.css";
import Navbar from "@/components/navbar";


export const metadata = {
  title: "Milk Delivery",
  description: "Food Delivery App",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body
        >
          <Navbar />
          {children}
        </body>
      </html>
    </>
  );
}
