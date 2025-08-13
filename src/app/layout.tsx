"use client";
import "./globals.css";
import Navbar from "~/components/ui/Navbar";
import Footer from "~/components/ui/Footer";
import Categories from "~/components/ui/Categories/Categories";
import { Providers } from "./providers";
import { Geist, Geist_Mono } from "next/font/google";
import { Box, Container } from "@mui/material";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <Navbar />
          <Container maxWidth="xl">
            <Box sx={{ display: "flex" }}>
              <Box
                component="main"
                sx={{ flexGrow: 1, p: 2, top: 70, position: 'relative' }}
              >
                {children}
              </Box>
            </Box>
          </Container>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
