import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Intro as IntroComponent } from "./Intro";

export default {
  title: "Design System/Sections/Intro",
  component: IntroComponent,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof IntroComponent>;

export const Intro: ComponentStory<typeof IntroComponent> = (args) => (
  <IntroComponent {...args} />
);

Intro.args = {
  introPadding: "20px",
};
