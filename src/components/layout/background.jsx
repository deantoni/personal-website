import * as $ from "classnames";
import React, { useEffect, useRef, useState } from "react";
import useColorScheme from "../../hooks/use-color-scheme";
import useRequestAnimationFrame from "../../hooks/use-request-animation-frame";
import Field from "../../lib/particles/field";

const Background = ({ className }) => {
  const [colorScheme] = useColorScheme();

  const [field, setField] = useState(null);

  const canvasRef = useRef(null);

  useRequestAnimationFrame(() => {
    if (!canvasRef.current) return;
    if (!field) return;

    if (colorScheme !== "dark") return;

    field.draw(canvasRef.current);
    field.process();
  }, [field, colorScheme]);

  useEffect(() => {
    const [w, h] = [window.innerWidth, window.innerHeight];
    canvasRef.current.width = w;
    canvasRef.current.height = h;

    setField(new Field(w, h));
  }, []);

  return (
    <div className={$(className)}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default Background;
