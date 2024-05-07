import GlobalProviders from "@/components/GlobalProviders";
import ScrollToTop from "@/components/ScrollToTop";
// import CommonLayout from "@/src/layout/commonLayout";
import CommonLayout from "@/layout/commonLayout";
import "@/styles/main.scss"
import {  DM_Sans,DM_Serif_Display } from "next/font/google"; 
import Head from 'next/head'


// const inter = Inter({ subsets: ["latin"] });

// const inter = Inter({
//   weight: ["300", "400", "500", "600", "700"],
//   style: ["normal"],
//   subsets: ["latin"],
//   display: "swap",
//   preload:true

// });

const dm_sans = DM_Sans({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "block",
  preload :true
});
const dm_Serif_Display = DM_Serif_Display({
  weight: [ "400"],
  style: ["normal","italic"],
  subsets: ["latin"],
  display: "block",
  preload:true
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fff" />



       
      </Head>

     
      <body className="suppressHydrationWarning={true}"style={{ fontFamily: `${dm_sans.style.fontFamily}`, 'sans': `${dm_sans.style.fontFamily}`, '--serief': `${dm_Serif_Display.style.fontFamily}` }}
>
        <GlobalProviders>
          <CommonLayout>{children}</CommonLayout>
          <ScrollToTop />
        </GlobalProviders>
      </body>
    </html>
  );
}
