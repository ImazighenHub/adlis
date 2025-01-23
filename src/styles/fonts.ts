import localFont from 'next/font/local';

export const ibmPlexSans = localFont({
  src: [
    {
      path: '../assets/fonts/IBMPlexSans-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../assets/fonts/IBMPlexSans-ThinItalic.ttf',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../assets/fonts/IBMPlexSans-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../assets/fonts/IBMPlexSans-ExtraLightItalic.ttf',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../assets/fonts/IBMPlexSans-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/IBMPlexSans-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../assets/fonts/IBMPlexSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/IBMPlexSans-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../assets/fonts/IBMPlexSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/IBMPlexSans-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../assets/fonts/IBMPlexSans-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/IBMPlexSans-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../assets/fonts/IBMPlexSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/IBMPlexSans-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
});

export const bebasNeue = localFont({
  src: [
    {
      path: '../assets/fonts/BebasNeue-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--bebas-neue',
});

export const notoSansTifinagh = localFont({
  src: [
    {
      path: '../assets/fonts/NotoSansTifinagh-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--noto-sans-tifinagh',
});
