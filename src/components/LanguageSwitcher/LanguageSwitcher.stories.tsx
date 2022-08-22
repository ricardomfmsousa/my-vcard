import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import {
  LanguageSwitcher as LanguageSwitcherComponent,
} from "./LanguageSwitcher";

export default {
  title: "Design System/LanguageSwitcher",
  component: LanguageSwitcherComponent,
} as ComponentMeta<typeof LanguageSwitcherComponent>;

export const LanguageSwitcher: ComponentStory<
  typeof LanguageSwitcherComponent
> = () => <LanguageSwitcherComponent />;
