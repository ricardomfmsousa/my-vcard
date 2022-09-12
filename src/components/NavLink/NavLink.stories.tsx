import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { NavLink as NavLinkComponent } from "./NavLink";

export default {
  title: "UI/NavLink",
  component: NavLinkComponent,
} as ComponentMeta<typeof NavLinkComponent>;

export const NavLink: ComponentStory<typeof NavLinkComponent> = (args) => (
  <NavLinkComponent {...args} />
);

NavLink.args = {
  children: "Hello, I'm an internal navigation link!",
  to: "/#hello",
  language: "pt",
  onClick: undefined,
  isActive: undefined,
  sx: undefined,
  tooltipPlacement: "bottom",
  tooltipText: "I'm a link tooltip",
};
