import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { education } from "./resume-data";
import { ResumeCard as ResumeCardComponent } from "./ResumeCard";

export default {
  title: "UI/ResumeCard",
  component: ResumeCardComponent,
} as ComponentMeta<typeof ResumeCardComponent>;

export const ResumeCard: ComponentStory<typeof ResumeCardComponent> = (
  args
) => <ResumeCardComponent {...args} />;

ResumeCard.args = {
  resume: education[0],
  sx: undefined,
};
