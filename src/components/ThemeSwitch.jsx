import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

function subscribeNoop() {
  return () => {};
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

export default function ThemeSwitch({ className = "" }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribeNoop, getClientSnapshot, getServerSnapshot);

  if (!mounted) {
    return (
      <span
        className={`theme-switch theme-switch--placeholder ${className}`.trim()}
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      className={`theme-switch ${isDark ? "theme-switch--dark" : ""} ${className}`.trim()}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "açık temaya geç" : "koyu temaya geç"}
    >
      <span className="theme-switch__track" aria-hidden="true">
        <span className="theme-switch__thumb" />
      </span>
    </button>
  );
}
