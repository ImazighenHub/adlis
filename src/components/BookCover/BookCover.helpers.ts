export const bookCoverVariantStyles = {
  xs: 'w-[28.95px] h-10;',
  s: 'w-[55px] h-[76px]',
  m: 'w-[114px] h-[189px]',
  l: 'md:w-[174px] w-[144px] md:h-[239px] h-[199px]',
  xl: 'md:w-[296px] w-[256px] md:h-[404px] h-[354px]',
} as const;

export type BookCoverVariant = keyof typeof bookCoverVariantStyles;
