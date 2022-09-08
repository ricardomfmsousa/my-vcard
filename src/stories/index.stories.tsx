import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { IndexPage as IndexPageComponent } from "../pages";

export default {
  title: "UI/Pages/IndexPage",
  component: IndexPageComponent,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof IndexPageComponent>;

export const IndexPage: ComponentStory<typeof IndexPageComponent> = (args) => (
  <IndexPageComponent {...args} />
);
