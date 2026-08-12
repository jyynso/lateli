import { useState } from "react";

export default function ZoomImage({ src, alt }: { src: string; alt: string }) {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [isZoomed, setIsZoomed] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  const toggleZoom = () => {
    setIsZoomed((prev) => !prev);
  };

  return (
    <div
      className={`bg-white rounded-t-md lg:rounded-t-none lg:rounded-l-md relative overflow-hidden w-sm h-full lg:w-2xl lg:h-md ${
        isZoomed ? "cursor-zoom-out" : "cursor-zoom-in" }`}
      onClick={toggleZoom}
      onMouseMove={handleMouseMove}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleZoom();
        }
      }}
      aria-pressed={isZoomed}
      aria-label={isZoomed ? "Disable zoom" : "Enable zoom"}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-scale-down transition-transform duration-100"
        style={
          isZoomed
            ? { transform: "scale(2)", transformOrigin: `${pos.x}% ${pos.y}%` }
            : undefined
        }
      />
    </div>
  );
}