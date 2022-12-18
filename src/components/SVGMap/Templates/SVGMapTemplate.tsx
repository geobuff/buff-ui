import React, { FC } from "react";

import { SVGMap } from "../SVGMap";
import { SVGBase } from "../SVGMap.types";

export interface SVGMapTemplateProps {
  map: SVGBase;
  mapStyle?: object;
}

export const SVGMapTemplate: FC<SVGMapTemplateProps> = ({
  map = null,
  mapStyle = null,
}) => {
  const [svgMap, setSvgMap] = React.useState(map);
  const [target, setTarget] = React.useState("");

  const mouseOver = (event: React.MouseEvent<SVGPathElement, MouseEvent>) => {
    const name = event.currentTarget.getAttribute("name");
    setSvgMap({
      ...svgMap,
      elements: svgMap.elements.map((x) => {
        if (x.name.toLowerCase() === name.toLowerCase()) {
          x.style = { fill: "red" };
        }
        return x;
      }),
    });
  };

  const mouseMove = (event: React.MouseEvent<SVGPathElement, MouseEvent>) => {
    setTarget(event.currentTarget.getAttribute("name"));
  };

  const onMouseOut = (event: React.MouseEvent<SVGPathElement, MouseEvent>) => {
    const name = event.currentTarget.getAttribute("name");
    setSvgMap({
      ...svgMap,
      elements: svgMap.elements.map((x) => {
        if (x.name.toLowerCase() === name.toLowerCase()) {
          x.style = {};
        }
        return x;
      }),
    });
    setTarget("");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <p>
        Current target: {target ? <p>{target}</p> : <p>...</p>}
        <p />
      </p>
      <SVGMap
        map={svgMap}
        mapStyle={mapStyle}
        onPathMouseOver={mouseOver}
        onPathMouseMove={mouseMove}
        onPathMouseOut={onMouseOut}
      />
    </div>
  );
};
