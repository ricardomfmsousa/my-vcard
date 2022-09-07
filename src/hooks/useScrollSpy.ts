import React from "react";

export const useScrollSpy = (
  spyRefs: React.RefObject<HTMLElement>[],
  callbacks?: {
    onActiveElement?: (elementId: string) => void;
    onInactiveElement?: (elementId: string) => void;
  }
): [string] => {
  const [activeElementId, setActiveElementId] = React.useState<string>("");
  const observerOptions = { threshold: 0.5 };

  React.useEffect(() => {
    let observer: IntersectionObserver;

    if (spyRefs.every((r) => r.current)) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach(({ target: { id }, isIntersecting }) => {
          if (isIntersecting) {
            setActiveElementId(id);
            callbacks?.onActiveElement && callbacks.onActiveElement(id);
          } else {
            callbacks?.onInactiveElement && callbacks.onInactiveElement(id);
          }
        });
      }, observerOptions);
      spyRefs.forEach((ref) => observer.observe(ref.current!));
    }
    return () => observer.disconnect();
  }, [...spyRefs]);

  return [activeElementId];
};
