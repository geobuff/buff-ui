export interface SVGBase {
  id: number;
  key: string;
  className: string;
  label: string;
  viewBox: string;
  elements?: SVGElement[];
}

export interface SVGElement {
  type: string;
  id: string;
  name: string;
  d?: string;
  points?: string;
  x?: string;
  y?: string;
  width?: string;
  height?: string;
  cx?: string;
  cy?: string;
  r?: string;
  transform?: string;
  xlinkHref?: string;
  clipPath?: string;
  clipPathId?: string;
  x1?: string;
  y1?: string;
  x2?: string;
  y2?: string;
  style?: any;
}
