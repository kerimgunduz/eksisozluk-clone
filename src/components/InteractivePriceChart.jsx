import { useMemo, useRef, useState, useEffect, useCallback } from "react";
import { formatCryptoPrice } from "../hooks/useCryptoMarket";

const CHART_HEIGHT = 168;
const PADDING = { top: 12, right: 12, bottom: 28, left: 12 };

function getTimeLabel(index, total) {
  if (total <= 1) return "bugün";
  const daysAgo = Math.round((1 - index / (total - 1)) * 7);
  if (daysAgo <= 0) return "bugün";
  if (daysAgo === 1) return "dün";
  return `${daysAgo} gün önce`;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export default function InteractivePriceChart({
  data = [],
  positive = true,
  className = "",
}) {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return undefined;

    const updateWidth = () => {
      setWidth(element.getBoundingClientRect().width);
    };

    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const chart = useMemo(() => {
    if (!data.length || width <= 0) {
      return null;
    }

    const innerWidth = width - PADDING.left - PADDING.right;
    const innerHeight = CHART_HEIGHT - PADDING.top - PADDING.bottom;
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;

    const points = data.map((value, index) => ({
      index,
      value,
      x:
        PADDING.left +
        (data.length > 1 ? index / (data.length - 1) : 0) * innerWidth,
      y: PADDING.top + innerHeight * (1 - (value - min) / range),
    }));

    const line = points
      .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
      .join(" ");

    const area = `${line} L ${points[points.length - 1].x} ${PADDING.top + innerHeight} L ${points[0].x} ${PADDING.top + innerHeight} Z`;

    const yTicks = [0, 0.5, 1].map((ratio) => ({
      y: PADDING.top + innerHeight * (1 - ratio),
      label: formatCryptoPrice(min + range * ratio),
    }));

    const xLabels = [0, Math.floor((data.length - 1) / 2), data.length - 1].map(
      (index) => ({
        x: points[index].x,
        label: getTimeLabel(index, data.length),
      })
    );

    return { points, line, area, yTicks, xLabels, innerHeight, innerWidth, min, max };
  }, [data, width]);

  const resolveIndex = useCallback(
    (clientX) => {
      if (!containerRef.current || !chart) return null;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left - PADDING.left;
      const ratio = x / chart.innerWidth;
      return clamp(Math.round(ratio * (data.length - 1)), 0, data.length - 1);
    },
    [chart, data.length]
  );

  const handlePointerMove = (event) => {
    const index = resolveIndex(event.clientX);
    if (index != null) setHoverIndex(index);
  };

  const handlePointerLeave = () => {
    setHoverIndex(null);
  };

  const activeIndex =
    hoverIndex != null && chart
      ? hoverIndex
      : chart
        ? chart.points.length - 1
        : 0;
  const activePoint = chart?.points[activeIndex] ?? null;
  const activeValue = data[activeIndex];

  const tooltipPosition = useMemo(() => {
    if (!chart || !activePoint) {
      return { left: "50%", top: 12, transform: "translate(-50%, 0)" };
    }

    const gap = 10;
    const showBelow = activePoint.y < 48;
    const left = clamp(activePoint.x, 56, width - 56);

    return {
      left,
      top: showBelow ? activePoint.y + gap : activePoint.y - gap,
      transform: showBelow ? "translate(-50%, 0)" : "translate(-50%, -100%)",
    };
  }, [chart, activePoint, width]);

  if (!data.length) return null;

  const stroke = positive ? "#22c55e" : "#ef4444";
  const fill = positive ? "rgba(34, 197, 94, 0.18)" : "rgba(239, 68, 68, 0.18)";

  return (
    <div
      ref={containerRef}
      className={`interactive-price-chart ${className}`.trim()}
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      onTouchMove={(event) => {
        if (event.touches[0]) handlePointerMove(event.touches[0]);
      }}
      onTouchEnd={handlePointerLeave}
      role="img"
      aria-label="7 günlük fiyat grafiği"
    >
      {chart && width > 0 && (
        <>
          <svg
            width={width}
            height={CHART_HEIGHT}
            viewBox={`0 0 ${width} ${CHART_HEIGHT}`}
            className="interactive-price-chart__svg"
          >
            {chart.yTicks.map((tick) => (
              <g key={tick.label}>
                <line
                  x1={PADDING.left}
                  x2={width - PADDING.right}
                  y1={tick.y}
                  y2={tick.y}
                  className="interactive-price-chart__grid"
                />
                <text
                  x={width - PADDING.right}
                  y={tick.y - 4}
                  className="interactive-price-chart__axis-label interactive-price-chart__axis-label--y"
                >
                  {tick.label}
                </text>
              </g>
            ))}

            <path d={chart.area} fill={fill} />
            <path
              d={chart.line}
              fill="none"
              stroke={stroke}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {chart.xLabels.map((tick) => (
              <text
                key={tick.label}
                x={tick.x}
                y={CHART_HEIGHT - 8}
                className="interactive-price-chart__axis-label interactive-price-chart__axis-label--x"
              >
                {tick.label}
              </text>
            ))}

            {activePoint && (
              <>
                <line
                  x1={activePoint.x}
                  x2={activePoint.x}
                  y1={PADDING.top}
                  y2={PADDING.top + chart.innerHeight}
                  className="interactive-price-chart__crosshair"
                />
                <circle
                  cx={activePoint.x}
                  cy={activePoint.y}
                  r="4.5"
                  fill={stroke}
                  stroke="var(--bg-surface)"
                  strokeWidth="2"
                />
              </>
            )}
          </svg>

          <div
            className="interactive-price-chart__tooltip"
            style={{
              left: tooltipPosition.left,
              top: tooltipPosition.top,
              transform: tooltipPosition.transform,
            }}
          >
            <span className="interactive-price-chart__tooltip-price">
              {formatCryptoPrice(activeValue)}
            </span>
            <span className="interactive-price-chart__tooltip-date">
              {getTimeLabel(activeIndex, data.length)}
            </span>
          </div>
        </>
      )}
    </div>
  );
}
