import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Discord as DiscordComponent } from "./Discord";

export default {
  title: "UI/Icons/Discord",
  component: DiscordComponent,
} as ComponentMeta<typeof DiscordComponent>;

export const Discord: ComponentStory<typeof DiscordComponent> = (args) => (
  <DiscordComponent {...args} />
);

Discord.args = {
  sx: {
    fontSize: "4em",
  },
};
