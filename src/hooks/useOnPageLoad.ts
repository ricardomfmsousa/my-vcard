import { window } from "browser-monads-ts";
import React from "react";

/**
 * This hook calls the `callback` function once the page has fully loaded
 */
export const useOnPageLoad = (callback: () => void) => {
  React.useEffect(() => {
    // Check if the page has already loaded
    if (document.readyState === "complete") {
      callback();
    } else {
      window.addEventListener("load", callback);
      return () => window.removeEventListener("load", callback);
    }
  }, []);
};
