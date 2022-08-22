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
  links: Array(5)
    .fill(0)
    .map((_, i) => ({ name: `Link${i}`, href: `/link${i}` })),
  currentRoute: "/link3",
  sx: {},
  introPadding: "0px",
};
