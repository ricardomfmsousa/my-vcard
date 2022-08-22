import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { VerticalSocial as VerticalSocialComponent } from "./VerticalSocial";

export default {
  title: "Design System/VerticalSocial",
  component: VerticalSocialComponent,
} as ComponentMeta<typeof VerticalSocialComponent>;

export const VerticalSocial: ComponentStory<typeof VerticalSocialComponent> = (
  args
) => <VerticalSocialComponent {...args} />;

VerticalSocial.args = {
  sx: { marginLeft: "100px" },
};
