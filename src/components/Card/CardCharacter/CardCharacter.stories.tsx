import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardCharacter from "./CardCharacter";
import { SimpleGrid } from "@chakra-ui/layout";

export default {
  title: "Components/Card/CardCharacter",
  component: CardCharacter,
} as ComponentMeta<typeof CardCharacter>;

const Template: ComponentStory<typeof CardCharacter> = (args) => (
  <SimpleGrid columns={[1, null, 3]}>
    <CardCharacter {...args} />
  </SimpleGrid>
);

const TemplateGrid: ComponentStory<typeof CardCharacter> = (args) => (
  <SimpleGrid columns={[1, 2, null, 3, 4]} spacingX={10}>
    <CardCharacter {...args} />
    <CardCharacter {...args} />
    <CardCharacter {...args} />
    <CardCharacter {...args} />
    <CardCharacter {...args} />
    <CardCharacter {...args} />
    <CardCharacter {...args} />
    <CardCharacter {...args} />
  </SimpleGrid>
);

export const Base = Template.bind({});
Base.args = {
  name: "Майкл Де Санта",
  description: "Кризис среднего возраста",
  image: "/assets/images/michael.jpeg",
  color: "#65b4d4",
};

export const Hero = Template.bind({});
Hero.args = {
  name: "Майкл Де Санта",
  description: "Кризис среднего возраста",
  image: "/assets/images/michael.jpeg",
  color: "#65b4d4",
  variant: "hero",
};

export const Secondary = Template.bind({});
Secondary.args = {
  name: "Майкл Де Санта",
  description: "Кризис среднего возраста",
  image: "/assets/images/michael.jpeg",
  color: "#65b4d4",
  variant: "secondary",
};

export const Grid = TemplateGrid.bind({});
Grid.args = {
  name: "Майкл Де Санта",
  description: "Кризис среднего возраста",
  image: "/assets/images/michael.jpeg",
  color: "#65b4d4",
  variant: "secondary",
};
