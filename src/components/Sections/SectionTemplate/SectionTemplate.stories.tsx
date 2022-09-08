import { Box } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { SectionTemplate as SectionTemplateComponent } from "./SectionTemplate";

export default {
  title: "UI/Sections/SectionTemplate",
  component: SectionTemplateComponent,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof SectionTemplateComponent>;

const Template: ComponentStory<typeof SectionTemplateComponent> = (args) => (
  <SectionTemplateComponent {...args} />
);

const children = (
  <Box sx={{ background: "#202020", p: 10 }}>Section children</Box>
);

export const Lighter = Template.bind({});
Lighter.args = {
  variant: "lighter",
  title: "Lighter",
  subtitle: "This section has a lighter background",
  children,
};

export const Darker = Template.bind({});
Darker.args = {
  ...Template.args,
  variant: "darker",
  title: "Darker",
  subtitle: "This section has a darker background",
  children,
};

export const Multiple: ComponentStory<typeof SectionTemplateComponent> = () => {
  const variants = Array(4)
    .fill(0)
    .map((_, i) => (i % 2 === 0 ? "lighter" : "darker"));
  return (
    <>
      {variants.map((v, i) => (
        <SectionTemplateComponent
          variant={v}
          title={`Section ${i + 1}`}
          subtitle={`This is a ${v} section`}
        >
          {children}
        </SectionTemplateComponent>
      ))}
    </>
  );
};
