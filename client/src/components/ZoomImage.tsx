import { useState } from "react";

export default function ZoomImage({ src, alt }: { src: string; alt: string }) {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [zoom, setZoom] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  return (
    <div
      className="bg-white rounded-t-md lg:rounded-t-none lg:rounded-l-md relative overflow-hidden cursor-zoom-in w-sm h-full lg:w-2xl lg:h-md"
      onMouseEnter={() => setZoom(true)}
      onMouseLeave={() => setZoom(false)}
      onMouseMove={handleMouseMove}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-scale-down transition-transform duration-100"
        style={
          zoom
            ? { transform: "scale(2)", transformOrigin: `${pos.x}% ${pos.y}%` }
            : {}
          }/>
    </div>
  );
}