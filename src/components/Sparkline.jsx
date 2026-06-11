import { useMemo } from "react";

export default function Sparkline({
  data = [],
  width = 72,
  height = 22,
  positive = true,
  className = "",
}) {
  const { path, areaPath } = useMemo(() => {
    if (!data.length) return { path: "", areaPath: "" };

    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    const pad = 1;

    const points = data.map((value, index) => {
      const x = (index / (data.length - 1)) * width;
      const y =
        pad + (height - pad * 2) * (1 - (value - min) / range);
      return { x, y };
    });

    const line = points
      .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
      .join(" ");

    const area = `${line} L ${width} ${height} L 0 ${height} Z`;

    return { path: line, areaPath: area };
  }, [data, width, height]);

  if (!path) return null;

  const stroke = positive ? "#22c55e" : "#ef4444";
  const fill = positive ? "rgba(34, 197, 94, 0.15)" : "rgba(239, 68, 68, 0.15)";

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={`crypto-sparkline ${className}`.trim()}
      aria-hidden="true"
    >
      <path d={areaPath} fill={fill} />
      <path
        d={path}
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
