import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Strava as StravaComponent } from "./Strava";

export default {
  title: "Design System/Icons/Strava",
  component: StravaComponent,
} as ComponentMeta<typeof StravaComponent>;

export const Strava: ComponentStory<typeof StravaComponent> = (args) => (
  <StravaComponent {...args} />
);

Strava.args = {
  style: {
    fontSize: "4em",
  },
};
