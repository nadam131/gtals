import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CardCharacter from "./CardCharacter";

export default {
  title: "Components/Card/CardCharacter",
  component: CardCharacter,
} as ComponentMeta<typeof CardCharacter>;

const Template: ComponentStory<typeof CardCharacter> = () => <CardCharacter />;

export const Default = Template.bind({});
Default.args = {};
