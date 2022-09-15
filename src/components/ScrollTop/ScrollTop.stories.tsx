import { Stack, Typography } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { ScrollTop as ScrollTopComponent } from "./ScrollTop";

export default {
  title: "UI/ScrollTop",
  component: ScrollTopComponent,
} as ComponentMeta<typeof ScrollTopComponent>;

const text = Array(20)
  .fill(0)
  .map(() => "Scroll down and look at the bottom right!");

export const ScrollTop: ComponentStory<typeof ScrollTopComponent> = (args) => (
  <Stack>
    {text.map((t) => (
      <Typography key={t}>
        {t}
        <br />
        <br />
      </Typography>
    ))}
    <ScrollTopComponent {...args} />
  </Stack>
);

ScrollTop.args = {
  bottom: "50px",
  right: "50px",
};
