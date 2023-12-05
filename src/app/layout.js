import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./component/Header";
import StoreProvider from "@/store/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Facebook",
  description: "Facebook website",
  icon: "favicon.ico",
};

export default async function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
