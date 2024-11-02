import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { ThemeSwitcher as ThemeSwitcherComponent } from "./ThemeSwitcher";

export default {
  title: "UI/ThemeSwitcher",
  component: ThemeSwitcherComponent,
} as ComponentMeta<typeof ThemeSwitcherComponent>;

export const ThemeSwitcher: ComponentStory<
  typeof ThemeSwitcherComponent
> = () => <ThemeSwitcherComponent />;
