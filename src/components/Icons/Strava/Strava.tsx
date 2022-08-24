import { SvgIcon } from "@mui/material";
import React from "react";

export const Strava = React.forwardRef(
  (
    props: React.ComponentPropsWithRef<"svg">,
    ref: React.Ref<SVGSVGElement>
  ): JSX.Element => (
    <SvgIcon ref={ref} {...props} viewBox="0 0 64 64">
      <path d="M27.898 21.944l7.564 14.928h11.124L27.898 0 9.234 36.876H20.35" />
      <path
        d="M41.03 47.852l-5.572-10.976h-8.172L41.03 64l13.736-27.124h-8.18"
        opacity="0.5"
      />
    </SvgIcon>
  )
);

Strava.displayName = "Strava";
