import "@fontsource/over-the-rainbow";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";

import { window } from "browser-monads-ts";
import {
  RouteUpdateArgs,
  Script,
  ScriptStrategy,
  WrapPageElementBrowserArgs,
  WrapRootElementBrowserArgs,
} from "gatsby";
import React from "react";

import { ConsoleInfo } from "./src/components/ConsoleInfo/ConsoleInfo";
import { ThemeProvider } from "./src/context/ThemeContext";

interface Win extends Window {
  gtag: (...args: unknown[]) => void;
}

/**
 * Trigger a page view event on route update
 */
export const onRouteUpdate = ({
  location,
}: RouteUpdateArgs): boolean | null => {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }
  const pagePath = location
    ? location.pathname + location.search + location.hash
    : undefined;
  setTimeout(() => {
    const win = window as unknown as Win;
    if (typeof win.gtag === "function") {
      win.gtag("event", "page_view", { page_path: pagePath });
    }
  }, 100);
  return true;
};

export const wrapPageElement: React.FC<WrapPageElementBrowserArgs> = ({
  element,
}) => {
  // Due to `gatsby-plugin-react-i18next` plugin implementation, in order to
  // have the translation context available inside `ConsoleInfo`,
  // the context must wrap the component and not the other way around.
  const newElement = React.cloneElement(
    element, // I18nextProvider
    element.props,
    React.cloneElement(
      element.props.children, // I18nextContext.Provider
      element.props.children.props,
      React.createElement(
        ConsoleInfo,
        undefined,
        element.props.children.props.children
      )
    )
  );

  return <ThemeProvider>{newElement}</ThemeProvider>;
};

export const wrapRootElement: React.FC<WrapRootElementBrowserArgs> = ({
  element,
}) => {
  return (
    <>
      {element}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GATSBY_GTM_ID}`}
        strategy={ScriptStrategy.offMainThread}
      />
      <Script id="gtag-config" strategy={ScriptStrategy.offMainThread}>
        {`
          window.dataLayer = window.dataLayer || []
          window.gtag = function gtag() { window.dataLayer.push(arguments) }
          gtag('js', new Date())
          gtag('config', '${process.env.GATSBY_GTM_ID}', { send_page_view: false })
        `}
      </Script>
    </>
  );
};
