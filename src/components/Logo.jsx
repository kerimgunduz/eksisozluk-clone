import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import logoDark from "../assets/kriptosozluklogo.svg";
import logoLight from "../assets/kriptosozluklogo-light.svg";

function subscribeNoop() {
  return () => {};
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

export default function Logo({ height = 40 }) {
  const { resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribeNoop, getClientSnapshot, getServerSnapshot);

  const logoUrl = mounted && resolvedTheme === "light" ? logoLight : logoDark;

  return (
    <img
      src={logoUrl}
      alt="kripto sözlük"
      className="site-logo"
      height={height}
      draggable={false}
    />
  );
}
