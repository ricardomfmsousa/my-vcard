import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Header as HeaderComponent } from "./Header";

export default {
  title: "Design System/Layout/Header",
  component: HeaderComponent,
} as ComponentMeta<typeof HeaderComponent>;

export const Header: ComponentStory<typeof HeaderComponent> = (args) => {
  return <HeaderComponent {...args} />;
};

Header.args = {
  sx: {},
  introPadding: "30px",
};
