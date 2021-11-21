import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Image from "./Image";

export default {
  title: "Components/Image",
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => (
  <Image alt="storybook-default" {...args} />
);

export const Default = Template.bind({});
Default.args = {
  src: "/assets/images/michael.jpeg",
  layout: "fill",
  objectFit: "cover",
};
