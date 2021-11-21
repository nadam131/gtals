import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CardCharacter from "./CardCharacter";

export default {
  title: "Components/Card/CardCharacter",
  component: CardCharacter,
} as ComponentMeta<typeof CardCharacter>;

const Template: ComponentStory<typeof CardCharacter> = (args) => (
  <CardCharacter {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: "Майкл Де Санта",
  description: "Кризис среднего возраста",
  image: "/assets/images/michael.jpeg",
  color: "#65b4d4",
};
