import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

import Navbar from "@/app/components/Navbar";
import FadeInProvider from "@/app/components/FadeInProvider"
import Link from "next/link";
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
      
      <input type="checkbox" id="navScreenCheckbox"></input>
      <label id="navScreenWrappper" htmlFor="navScreenCheckbox"></label>
        {children}

        <footer>

        <div className="volunteerFooter">
          <h4>Interested in Volunteering? </h4>
            <p>
            We’d love to hear from you! <b>Get in touch</b> to find out how you can help.
            </p>
        </div>

      <div className="footerContainer">
              <div id="contact">
                <p className="footerTitle">Contact</p>
                <ul>
        <li id="footerItem">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" height={25} width={25}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <rect x="3" y="5" width="18" height="14" rx="2" stroke="#000000" stroke-width="" stroke-linecap="round"></rect> </g></svg> <a href="mailto:svcmanchester@yahoo.com">svcmanchester@yahoo.com</a>
        </li>
        <li id="footerItem">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
<path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 25.832031 46 A 1.0001 1.0001 0 0 0 26.158203 46 L 31.832031 46 A 1.0001 1.0001 0 0 0 32.158203 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 33 44 L 33 30 L 36.820312 30 L 38.220703 23 L 33 23 L 33 21 C 33 20.442508 33.05305 20.398929 33.240234 20.277344 C 33.427419 20.155758 34.005822 20 35 20 L 38 20 L 38 14.369141 L 37.429688 14.097656 C 37.429688 14.097656 35.132647 13 32 13 C 29.75 13 27.901588 13.896453 26.71875 15.375 C 25.535912 16.853547 25 18.833333 25 21 L 25 23 L 22 23 L 22 30 L 25 30 L 25 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 32 15 C 34.079062 15 35.38736 15.458455 36 15.701172 L 36 18 L 35 18 C 33.849178 18 32.926956 18.0952 32.150391 18.599609 C 31.373826 19.104024 31 20.061492 31 21 L 31 25 L 35.779297 25 L 35.179688 28 L 31 28 L 31 44 L 27 44 L 27 28 L 24 28 L 24 25 L 27 25 L 27 21 C 27 19.166667 27.464088 17.646453 28.28125 16.625 C 29.098412 15.603547 30.25 15 32 15 z"></path>
</svg> <a href="https://www.facebook.com/p/Slovensk%C3%A9-Vzdel%C3%A1vacie-Centrum-South-Manchester-61557468560704/" target="_blank">Facebook</a>
        </li>

        <li id="footerItem">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
<path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
</svg> <a href="https://www.instagram.com/svcsmanchester/" target="_blank">Instagram</a>
        </li>
                </ul>
              </div>
        
              <div>
                <p className="footerTitle">Resources</p>
                <ul>
                  <li><a href="/dates#table" id="footerItem">Dates Table</a></li>
                  <li><Link href={"/#partners"}>Partners</Link></li>
                  <li><a href="/dates#locations">Locations</a></li>
                  <li><a href="/school#methods">Teaching Methods</a></li>
                  <li><a href="/register"> Join Now</a></li>
                </ul>
              </div>
      </div>
      
      <div className="footerLogoBox">
        <Link href={"/"}><img src="/logo.svg"/></Link>
      </div>


    </footer>
      </body>
    </html>
    </FadeInProvider>
  );
}
