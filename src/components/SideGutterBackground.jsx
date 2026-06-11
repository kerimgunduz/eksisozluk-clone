import { FloatingPathsBackground } from "./ui/floating-paths";

export default function SideGutterBackground() {
  return (
    <div className="side-gutters" aria-hidden="true">
      <div className="side-gutter side-gutter--left">
        <FloatingPathsBackground position={1} className="floating-paths-fill" />
      </div>
      <div className="side-gutter side-gutter--right">
        <FloatingPathsBackground position={-1} className="floating-paths-fill" />
      </div>
    </div>
  );
}
