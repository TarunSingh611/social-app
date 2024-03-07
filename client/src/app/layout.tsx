import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "@/redux/ReduxProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import GuestLayout from "@/layouts/GuestLayout";
import ErrorBoundary from "./ErrorBoundary";

export const metadata: Metadata = {
    title: "SocialSAGA",
    description:
        "Revolutionize your social experience with our cutting-edge social media app! 🚀 Connect, share, and engage like never before. 🌐 Features include seamless messaging, photo/video sharing, and real-time updates. 📸🎥 Stay in the loop with personalized feeds and trending topics. 🔥 Experience the next level of social connectivity – download now and join the conversation! #SocialMediaRevolution #ConnectShareEngage",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <ReduxProvider>
                    <GuestLayout>
                        <ErrorBoundary>{children}</ErrorBoundary>
                    </GuestLayout>
                    <ToastContainer
                        position="top-right"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                    />
                </ReduxProvider>
                <SpeedInsights />
            </body>
        </html>
    );
}
