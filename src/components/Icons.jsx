export function SearchIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.5 15.5L20 20" />
    </svg>
  );
}

export function RefreshIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M23 4v6h-6M1 20v-6h6" />
      <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
    </svg>
  );
}

export function HeartIcon({ filled, size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  );
}

export function MinusBoxIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M8 12h8" />
    </svg>
  );
}

export function ShareIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4" y="4" width="6" height="6" rx="0.5" />
      <path d="M13 4h7v7M10 14l11-11" />
    </svg>
  );
}

export function DropIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#3d9fd4">
      <path d="M12 2.5S5.5 10.5 5.5 14.5a6.5 6.5 0 1013 0C18.5 10.5 12 2.5 12 2.5z" />
    </svg>
  );
}

export function DotsIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="5" cy="12" r="1.6" />
      <circle cx="12" cy="12" r="1.6" />
      <circle cx="19" cy="12" r="1.6" />
    </svg>
  );
}

export function PenaIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" fill="#e74c3c" />
      <path d="M10 7.5l7 4.5-7 4.5V7.5z" fill="#fff" />
    </svg>
  );
}

export function ChevronDownIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function AvatarPlaceholder() {
  return (
    <div className="avatar">
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="15" stroke="#c8c8c8" strokeWidth="1.2" />
        <circle cx="16" cy="13" r="5" fill="#c8c8c8" />
        <path d="M8 27c1.5-5 4.8-7.5 8-7.5s6.5 2.5 8 7.5" fill="#c8c8c8" />
      </svg>
    </div>
  );
}
