import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Discord as DiscordComponent } from "./Discord";

export default {
  title: "Design System/Icons/Discord",
  component: DiscordComponent,
} as ComponentMeta<typeof DiscordComponent>;

export const Discord: ComponentStory<typeof DiscordComponent> = (args) => (
  <DiscordComponent {...args} />
);

Discord.args = {
  style: {
    fontSize: "4em",
  },
};
