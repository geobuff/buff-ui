import React, { FC } from "react";

import { SVGBase, SVGElement } from "./SVGMap.types";

const getChild = (
  element: SVGElement,
  onPathMouseOver: any,
  onPathMouseMove: any,
  onPathMouseOut: any
): JSX.Element => {
  switch (element.type) {
    case "path":
      return (
        <path
          key={element.id}
          id={element.id}
          name={element.name}
          aria-label={element.name}
          d={element.d}
          onMouseOver={onPathMouseOver}
          onMouseMove={onPathMouseMove}
          onMouseOut={onPathMouseOut}
          style={element.style ? element.style : {}}
        />
      );
    case "polygon":
      return (
        <polygon
          key={element.id}
          id={element.id}
          name={element.name}
          aria-label={element.name}
          points={element.points}
          onMouseOver={onPathMouseOver}
          onMouseMove={onPathMouseMove}
          onMouseOut={onPathMouseOut}
          style={element.style ? element.style : {}}
        />
      );
    case "polyline":
      return (
        <polyline
          key={element.id}
          id={element.id}
          name={element.name}
          aria-label={element.name}
          points={element.points}
          onMouseOver={onPathMouseOver}
          onMouseMove={onPathMouseMove}
          onMouseOut={onPathMouseOut}
          style={element.style ? element.style : {}}
        />
      );
    case "circle":
      return (
        <circle
          key={element.id}
          id={element.id}
          name={element.name}
          aria-label={element.name}
          cx={element.cx}
          cy={element.cy}
          r={element.r}
          onMouseOver={onPathMouseOver}
          onMouseMove={onPathMouseMove}
          onMouseOut={onPathMouseOut}
          style={element.style ? element.style : {}}
        />
      );
    case "rect":
      return (
        <rect
          key={element.id}
          id={element.id}
          name={element.name}
          aria-label={element.name}
          x={element.x}
          y={element.y}
          width={element.width}
          height={element.height}
          transform={element.transform}
          onMouseOver={onPathMouseOver}
          onMouseMove={onPathMouseMove}
          onMouseOut={onPathMouseOut}
          style={element.style ? element.style : {}}
        />
      );
    case "line":
      return (
        <line
          key={element.id}
          id={element.id}
          name={element.name}
          aria-label={element.name}
          x1={element.x1}
          y1={element.y1}
          x2={element.x2}
          y2={element.y2}
          style={element.style ? element.style : {}}
        />
      );
    case "image":
      return (
        <image
          key={element.id}
          id={element.id}
          name={element.name}
          aria-label={element.name}
          width={element.width}
          height={element.height}
          transform={element.transform}
          xlinkHref={element.xlinkHref}
          clipPath={element.clipPath}
          onMouseOver={onPathMouseOver}
          onMouseMove={onPathMouseMove}
          onMouseOut={onPathMouseOut}
          style={element.style ? element.style : {}}
        />
      );
    case "defs":
      return (
        <defs
          key={element.id}
          id={element.id}
          name={element.name}
          aria-label={element.name}
        >
          <clipPath id={element.clipPathId}>
            <rect width={element.width} height={element.height} />
          </clipPath>
        </defs>
      );
    default:
      throw Error(`Invalid SVG child type '${element.type}'.`);
  }
};

export interface SVGMapProps {
  map: SVGBase;
  mapStyle?: object;
  onPathMouseOver?: (
    event: React.MouseEvent<SVGPathElement, MouseEvent>
  ) => void;
  onPathMouseMove?: (
    event: React.MouseEvent<SVGPathElement, MouseEvent>
  ) => void;
  onPathMouseOut?: (
    event: React.MouseEvent<SVGPathElement, MouseEvent>
  ) => void;
}

export const SVGMap: FC<SVGMapProps> = ({
  map = null,
  mapStyle = null,
  onPathMouseOver = () => {},
  onPathMouseMove = () => {},
  onPathMouseOut = () => {},
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox={map.viewBox}
    aria-label={map.label}
    style={mapStyle}
  >
    {map.elements?.map((element: SVGElement) =>
      getChild(element, onPathMouseOver, onPathMouseMove, onPathMouseOut)
    )}
  </svg>
);
