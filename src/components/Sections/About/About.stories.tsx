import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { About as AboutComponent } from "./About";

export default {
  title: "Design System/Sections/About",
  component: AboutComponent,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof AboutComponent>;

export const About: ComponentStory<typeof AboutComponent> = (args) => (
  <AboutComponent {...args} />
);

About.args = {};
