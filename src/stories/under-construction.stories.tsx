import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import {
  UnderConstructionPage as UnderConstructionPageComponent,
} from "../pages/under-construction";

export default {
  title: "Design System/Pages/UnderConstructionPage",
  component: UnderConstructionPageComponent,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof UnderConstructionPageComponent>;

export const UnderConstructionPage: ComponentStory<
  typeof UnderConstructionPageComponent
> = (args) => <UnderConstructionPageComponent {...args} />;
