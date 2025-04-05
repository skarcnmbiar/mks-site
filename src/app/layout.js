import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/main-navbar";
import Footer from "./components/main-footer";
import { ThemeProvider } from "next-themes";
import SmoothScroll from "./components/smooth-scroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Malayala Kshatriya Samajam",
  description: "Malayala Kshatriya Samajam",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="scroll-smooth transition-colors duration-5000 ease-in-out"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col max-w-full `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange // Prevent flickering during theme changes
        >
          <SmoothScroll >
            <NavBar />
            <main>{children}</main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
