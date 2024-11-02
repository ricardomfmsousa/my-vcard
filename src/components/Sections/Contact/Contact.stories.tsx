import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Contact as ContactComponent } from "./Contact";

export default {
  title: "UI/Sections/Contact",
  component: ContactComponent,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ContactComponent>;

export const Contact: ComponentStory<typeof ContactComponent> = (args) => (
  <ContactComponent {...args} />
);

Contact.args = {};
