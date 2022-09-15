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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target: { id }, isIntersecting }) => {
        if (isIntersecting) {
          setActiveElementId(id);
          callbacks?.onActiveElement && callbacks.onActiveElement(id);
        } else {
          callbacks?.onInactiveElement && callbacks.onInactiveElement(id);
        }
      });
    }, observerOptions);

    spyRefs.forEach(({ current }) => {
      if (current) {
        observer.observe(current);
      }
    });

    return () => observer.disconnect();
  }, [...spyRefs]);

  return [activeElementId];
};
