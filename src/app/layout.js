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
        <head>
        <meta name="google-site-verification" content="_0dqCZKaG3x1r69ly1fpccfpIO-lFKs2IFrn5nf4i1w" />
        </head>
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
