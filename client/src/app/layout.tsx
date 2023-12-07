import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import ReduxProvider from "@/redux/ReduxProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import GuestLayout from "@/layouts/GuestLayout";

export const metadata: Metadata = {
  title: "gupshup",
  description: "created by TarunSR",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <ReduxProvider>
        <body>
          <GuestLayout>{children}</GuestLayout>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
          />
        </body>
      </ReduxProvider>
    </html>
  );
}
