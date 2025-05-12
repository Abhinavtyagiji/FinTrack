
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from 'sonner'



const inter=Inter({subsets:['latin']});

export const metadata = {
  title: "FinTrack",
  description: "Personal Finance Tracker",
};

export default function RootLayout({ children }) {
  
  return (
    <ClerkProvider>

    <html>
      <body className={`${inter.className}`}>
          {/* header */}
          <Header />

          <main className="min-h-screen">
        {children}
          </main>
          <Toaster richColors />

        {/* footer */}
        <footer className="py-12">
          <div className="container mx-auto px-4 text-center text-grey-600 ">
            <p> Made by Aniket Chauhan</p>
          </div>
        </footer>
      </body>
    </html>
  </ClerkProvider>
  );
}
