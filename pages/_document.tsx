import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
        <meta name="description" content="Build Your Next Billion Naira Tech Startup! TSM Idea Builder helps you create innovative Nigerian tech startup ideas." />
        <meta name="keywords" content="Nigerian tech startup, business ideas, Nigeria, Lagos, tech innovation, startup generator" />
        <meta property="og:title" content="TSM Idea Builder - Build Your Nigerian Tech Empire!" />
        <meta property="og:description" content="Create innovative Nigerian tech startup ideas with realistic market scenarios and pricing." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}