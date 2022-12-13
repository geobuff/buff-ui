export enum FooterVariant {
  SIMPLE,
  EXTENDED,
}

export interface FooterLink {
  href: string;
  text: string;
  isExternal: boolean;
}
