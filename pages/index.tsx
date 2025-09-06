import Head from 'next/head';
import IdeaBuilder from '../components/IdealBuilder';

// Cache bust: 2025-09-06 15:20 - Force Vercel deployment

export default function Home() {
  return (
    <>
      <Head>
        <title>TSM Idea Builder - Build Your Nigerian Tech Empire!</title>
        <meta name="description" content="Build Your Next Billion Naira Tech Startup! Create innovative Nigerian tech startup ideas with realistic market scenarios and pricing." />
        <meta name="keywords" content="Nigerian tech startup, business ideas, Nigeria, Lagos, tech innovation, startup generator, naira, jollof points" />
        <meta property="og:title" content="TSM Idea Builder - Build Your Nigerian Tech Empire!" />
        <meta property="og:description" content="Create innovative Nigerian tech startup ideas with realistic market scenarios and pricing. From Lagos to the World!" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TSM Idea Builder - Build Your Nigerian Tech Empire!" />
        <meta name="twitter:description" content="Create innovative Nigerian tech startup ideas with realistic market scenarios and pricing." />
        <meta name="twitter:image" content="/twitter-image.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <IdeaBuilder />
    </>
  );
}