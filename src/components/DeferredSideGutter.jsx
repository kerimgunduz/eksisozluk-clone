import { useEffect, useState, Suspense, lazy } from "react";

const SideGutterBackground = lazy(() => import("./SideGutterBackground"));

export default function DeferredSideGutter() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const reveal = () => setShow(true);

    if (typeof requestIdleCallback === "function") {
      const idleId = requestIdleCallback(reveal, { timeout: 2000 });
      return () => cancelIdleCallback(idleId);
    }

    const timeoutId = setTimeout(reveal, 400);
    return () => clearTimeout(timeoutId);
  }, []);

  if (!show) return null;

  return (
    <Suspense fallback={null}>
      <SideGutterBackground />
    </Suspense>
  );
}
