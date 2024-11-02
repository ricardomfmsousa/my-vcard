declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}

declare module "*.png" {
  const value: unknown;
  export = value;
}

declare module "*.jpg" {
  const value: unknown;
  export = value;
}
