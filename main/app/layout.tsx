import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOSWrapper from "./components/AOSWrapper";
import { ThemeProvider } from "next-themes";
import PageTracker from "./providers/PageTracker";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Home: Md Rubel Ahmed Rana",
  description: "Md Rubel Ahmed Rana portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <ThemeProvider attribute={"class"}>
          <PageTracker />
          <AOSWrapper />
          <Navbar />
          <section>{children}</section>
          <Footer />
          <ToastContainer />
        </ThemeProvider>
      </body>
    </html>
  );
}
