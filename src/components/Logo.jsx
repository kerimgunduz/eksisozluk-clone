import logoUrl from "../assets/kriptosozluklogo.svg";

export default function Logo({ height = 40 }) {
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
