
import '@/app/ui/global.css';

import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-gray-100 text-gray-800`}
      >{children}</body>
    </html>
  );
}
