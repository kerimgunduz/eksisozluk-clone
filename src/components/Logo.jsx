import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import logoDark from "../assets/kriptosozluklogo.svg";
import logoLight from "../assets/kriptosozluklogo-light.svg";

export default function Logo({ height = 40 }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

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
