import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardArticle from "./CardArticle";

export default {
  title: "Components/Card/CardArticle",
  component: CardArticle,
} as ComponentMeta<typeof CardArticle>;

const Template: ComponentStory<typeof CardArticle> = (args) => (
  <CardArticle {...args}>{args.title}</CardArticle>
);

export const XS = Template.bind({});
XS.args = {
  title: "Майкл Де Санта",
  description: "Кризис среднего возраста",
  href: "https://gtals.ru",
  image: "/assets/images/michael.jpeg",
  color: "#65b4d4",
};

export const MD = Template.bind({});
MD.args = {
  title: "Майкл Де Санта",
  description: "Кризис среднего возраста",
  href: "https://gtals.ru",
  image: "/assets/images/michael.jpeg",
  size: "md",
  color: "#65b4d4",
};

export const LG = Template.bind({});
LG.args = {
  title: "Майкл Де Санта",
  description: "Кризис среднего возраста",
  href: "https://gtals.ru",
  image: "/assets/images/michael_transparent_2.png",
  variant: "shadow",
  size: "lg",
  color: "#65b4d4",
};
