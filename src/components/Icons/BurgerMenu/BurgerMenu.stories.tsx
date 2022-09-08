import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { BurgerMenu as BurgerMenuComponent } from "./BurgerMenu";

export default {
  title: "UI/Icons/BurgerMenu",
  component: BurgerMenuComponent,
} as ComponentMeta<typeof BurgerMenuComponent>;

export const BurgerMenu: ComponentStory<typeof BurgerMenuComponent> = (
  args
) => <BurgerMenuComponent {...args} />;

BurgerMenu.args = {
  style: {
    fontSize: "4em",
  },
};
