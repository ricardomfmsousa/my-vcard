import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { FullScreenMenu as FullScreenMenuComponent } from "./FullScreenMenu";

export default {
  title: "Design System/FullScreenMenu",
  component: FullScreenMenuComponent,
} as ComponentMeta<typeof FullScreenMenuComponent>;

export const FullScreenMenu: ComponentStory<typeof FullScreenMenuComponent> = (
  args
) => <FullScreenMenuComponent {...args} />;

FullScreenMenu.args = {
  links: [
    { name: "Intro", href: `/` },
    { name: "About", href: `/#about` },
    { name: "Resume", href: `/#resume` },
    { name: "Contact", href: `/#contact` },
  ],
  onClose: () => alert("This will close the menu"),
};
