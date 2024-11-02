import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { NotFoundPage as NotFoundPageComponent } from "../pages/404";

export default {
  title: "UI/Pages/NotFoundPage",
  component: NotFoundPageComponent,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof NotFoundPageComponent>;

export const NotFoundPage: ComponentStory<typeof NotFoundPageComponent> = (
  args
) => <NotFoundPageComponent {...args} />;
