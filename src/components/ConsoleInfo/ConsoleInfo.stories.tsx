import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { ConsoleInfo as ConsoleInfoComponent } from "./ConsoleInfo";

export default {
  title: "UI/ConsoleInfo",
  component: ConsoleInfoComponent,
} as ComponentMeta<typeof ConsoleInfoComponent>;

export const ConsoleInfo: ComponentStory<typeof ConsoleInfoComponent> = () => (
  <ConsoleInfoComponent>Open your browser console!</ConsoleInfoComponent>
);
