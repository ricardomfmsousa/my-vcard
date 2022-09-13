import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Resume as ResumeComponent } from "./Resume";

export default {
  title: "UI/Sections/Resume",
  component: ResumeComponent,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ResumeComponent>;

export const Resume: ComponentStory<typeof ResumeComponent> = (args) => (
  <ResumeComponent {...args} />
);

Resume.args = {};
