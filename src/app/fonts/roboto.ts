import localFont from 'next/font/local';

export const roboto = localFont({
  src: [
    {
      path: './fontsSrc/Roboto-VariableFont_wdth,wght.ttf',
    }
  ],
  variable: '--font-roboto',
});
