import '@/app/ui/global.css';
import { gt_walsheim_pro } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${gt_walsheim_pro.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
