import { useEffect } from "react";

function isOverSidebar(sidebar, clientX, clientY) {
  const rect = sidebar.getBoundingClientRect();
  return (
    clientX >= rect.left &&
    clientX <= rect.right &&
    clientY >= rect.top &&
    clientY <= rect.bottom
  );
}

export function useScrollRouting(sidebarRef, { disabled = false } = {}) {
  useEffect(() => {
    if (disabled) return;

    const handleWheel = (e) => {
      if (window.matchMedia("(max-width: 900px)").matches) return;

      const sidebar = sidebarRef.current;
      if (!sidebar) return;

      if (isOverSidebar(sidebar, e.clientX, e.clientY)) {
        e.preventDefault();
        sidebar.scrollTop += e.deltaY;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [sidebarRef, disabled]);
}
