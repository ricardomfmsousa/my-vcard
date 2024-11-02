import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { education, experience } from "./resume-data";
import { ResumeBoard as ResumeBoardComponent } from "./ResumeBoard";

export default {
  title: "UI/ResumeBoard",
  component: ResumeBoardComponent,
} as ComponentMeta<typeof ResumeBoardComponent>;

export const ResumeBoard: ComponentStory<typeof ResumeBoardComponent> = (
  args
) => <ResumeBoardComponent {...args} />;

ResumeBoard.args = {
  resume: {
    education,
    experience,
  },
  sx: undefined,
};
