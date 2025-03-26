import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

import Navbar from "@/app/components/Navbar";
import FadeInProvider from "@/app/components/FadeInProvider"
export const metadata: Metadata = {
  title: "Slovenské Vzdelávacie Centrum",
  description: "Slovak Charity Based in South Manchester",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <FadeInProvider>
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>Slovenské Vzdelávacie Centrum - South Manchester</title>
      </Head>
      
      <body
        className={`antialiased`}
      >
      <header>
        <Navbar />
      </header>
      
        {children}

        <footer>

        <div className="volunteerFooter">
          <h4>Interested in Volunteering? </h4>
            <p>
            We’d love to hear from you! <b>Get in touch</b> to find out how you can help.
            </p>
        </div>

      <div className="footerContainer">
            
              <div>
                <p className="footerTitle">Partners</p>
                <ul></ul>
              </div>
        
              <div>
                <p className="footerTitle">Contact</p>
                <ul>
        <li>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" height={20} width={20}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <rect x="3" y="5" width="18" height="14" rx="2" stroke="#000000" stroke-width="" stroke-linecap="round"></rect> </g></svg> <a href="mailto:svcmanchester@yahoo.com">svcmanchester@yahoo.com</a>
        </li>
                </ul>
              </div>
        
              <div>
                <p className="footerTitle">Resources</p>
                <ul></ul>
              </div>
      </div>
      
      <div className="footerLogoBox">
        <a href="/"><img src="/logo.svg"/></a>
      </div>


    </footer>
      </body>
    </html>
    </FadeInProvider>
  );
}
