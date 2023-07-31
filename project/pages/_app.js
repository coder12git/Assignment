import '@/styles/globals.css'
import { NextSeo } from 'next-seo'

export default function App({ Component, pageProps }) {
  return (
    <>
        <NextSeo
        title="JET PROTOCOL"
        titleTemplate="%s - Next Generation DeFi Governance"
        description="Experience open source, transparent, and efficient borrowing and lending on Solana with Jet Protocol."
        canonical="https://tweepsbook.com/"
        openGraph={{
          url: "https://tweepsbook.com/",
          title: "JET PROTOCOL - Next Generation DeFi Governance",
          description:
            "Experience open source, transparent, and efficient borrowing and lending on Solana with Jet Protocol.",
          images: [
            {
              url: "https://miro.medium.com/v2/resize:fit:1400/1*W9Aw_0XNKk10Eph41mENkg.jpeg",
              width: 800,
              height: 420,
              alt: "Jet Protocol",
            },
          ],
        }}
        twitter={{
          handle: "@Suruchi18591098",
          site: "@Suruchi18591098",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </>
  )
}
