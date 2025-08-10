import localFont from 'next/font/local';

export const montserrat = localFont({
  src: [
    {
      path: './fontsSrc/Montserrat-VariableFont_wght.ttf',
    }
  ],
  variable: '--font-montserrat',
});
