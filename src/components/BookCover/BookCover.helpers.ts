export const bookCoverVariantStyles = {
  xs: 'w-[28.95px] h-10;',
  s: 'w-[55px] h-[76px]',
  m: 'w-[144px] h-[199px]',
  l: 'xs:w-[174px] w-[114px] xs:h-[239px] h-[169px]',
  xl: 'xs:w-[296px] w-[256px] xs:h-[404px] h-[354px]',
} as const;

export type BookCoverVariant = keyof typeof bookCoverVariantStyles;
