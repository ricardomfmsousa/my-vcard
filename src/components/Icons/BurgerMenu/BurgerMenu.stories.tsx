import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { BurgerMenu as BurgerMenuComponent } from "./BurgerMenu";

export default {
  title: "Design System/Icons/BurgerMenu",
  component: BurgerMenuComponent,
} as ComponentMeta<typeof BurgerMenuComponent>;

export const BurgerMenu: ComponentStory<typeof BurgerMenuComponent> = () => (
  <BurgerMenuComponent fontSize="large" />
);
