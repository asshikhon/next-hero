import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/services/AuthProvider";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: ['400', '500', '700', '900'],subsets: ["latin"] });

export const metadata = {
  title: {
default: "Next Hero",
template: "%s | Next Hero",
  },
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">



      <body className={roboto.className}>
<AuthProvider>
      <Navbar />

<div className="">
{children}
</div>
</AuthProvider>
      </body>


    </html>
  );
}
