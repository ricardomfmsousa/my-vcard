import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Footer as FooterComponent } from "./Footer";

export default {
  title: "Design System/Layout/Footer",
  component: FooterComponent,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof FooterComponent>;

export const Footer: ComponentStory<typeof FooterComponent> = (args) => (
  <FooterComponent {...args} />
);
