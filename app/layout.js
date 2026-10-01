import './globals.css';

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "ByteSpace - Get Access to Hundreds of Courses",
  description: "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses. Join ByteSpace today.",
  keywords: "online courses, learning, education, ByteSpace, skills, development",
  openGraph: {
    title: "ByteSpace - Get Access to Hundreds of Courses",
    description: "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
    siteName: 'ByteSpace',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#003BE2',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
