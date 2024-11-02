import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Social as SocialComponent } from "./Social";

export default {
  title: "UI/Social",
  component: SocialComponent,
} as ComponentMeta<typeof SocialComponent>;

const Template: ComponentStory<typeof SocialComponent> = (args) => (
  <SocialComponent {...args} />
);
Template.args = {
  sx: undefined,
  direction: "column",
};

export const Small = Template.bind({});
Small.args = {
  ...Template.args,
  size: "small",
  sx: undefined,
};

export const Medium = Template.bind({});
Medium.args = {
  ...Template.args,
  size: "medium",
  sx: undefined,
};

export const Large = Template.bind({});
Large.args = {
  ...Template.args,
  size: "large",
  sx: undefined,
};

export const Tooltip = Template.bind({});
Tooltip.args = {
  ...Template.args,
  size: "large",
  sx: undefined,
  tooltipPlacement: "right",
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  ...Template.args,
  size: "large",
  sx: undefined,
  tooltipPlacement: "bottom",
  direction: "row",
};
