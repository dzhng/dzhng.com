import './globals.css';

export const metadata = {
  title: "David Zhang's personal website",
  description: 'Learning by shipping',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
