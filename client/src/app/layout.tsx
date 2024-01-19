import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import ReduxProvider from "@/redux/ReduxProvider";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import GuestLayout from "@/layouts/GuestLayout";

export const metadata: Metadata = {
  title: "SocialSpehere",
  description: "Revolutionize your social experience with our cutting-edge social media app! 🚀 Connect, share, and engage like never before. 🌐 Features include seamless messaging, photo/video sharing, and real-time updates. 📸🎥 Stay in the loop with personalized feeds and trending topics. 🔥 Experience the next level of social connectivity – download now and join the conversation! #SocialMediaRevolution #ConnectShareEngage",
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
      <SpeedInsights />
    </html>
  );
}
