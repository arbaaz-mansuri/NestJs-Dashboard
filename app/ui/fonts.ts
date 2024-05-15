import { Inter, Lusitana } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const gt_walsheim_pro = localFont({
  src: [
    {
      path: './fonts/GTWalsheimPro-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/GTWalsheimPro-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/GTWalsheimPro-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  preload: true,
});
