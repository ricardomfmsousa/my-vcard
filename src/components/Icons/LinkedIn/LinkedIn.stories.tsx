import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { LinkedIn as LinkedInComponent } from "./LinkedIn";

export default {
  title: "Design System/Icons/LinkedIn",
  component: LinkedInComponent,
} as ComponentMeta<typeof LinkedInComponent>;

export const LinkedIn: ComponentStory<typeof LinkedInComponent> = (args) => (
  <LinkedInComponent {...args} />
);

LinkedIn.args = {
  style: {
    fontSize: "4em",
  },
};