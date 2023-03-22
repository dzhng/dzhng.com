import './globals.css';

export const metadata = {
  title: 'Learning by shipping',
  description:
    'David Zhang is an entrepreneur and engineer based in the San Francisco Bay Area. In a past life, he founded Amity and NockNock.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
