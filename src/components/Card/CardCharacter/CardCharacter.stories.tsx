import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardCharacter, { VARIANTS } from "./CardCharacter";
import CardArticle from "../CardArticle/CardArticle";
import { Container, SimpleGrid } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";

export default {
  title: "Components/Card/CardCharacter",
  component: CardCharacter,
} as ComponentMeta<typeof CardCharacter>;

const Template: ComponentStory<typeof CardCharacter> = (args) => (
  <SimpleGrid p={10} columns={[1, null, 3]}>
    <CardCharacter {...args} />
  </SimpleGrid>
);

const TemplateGrid: ComponentStory<typeof CardCharacter> = (args) => (
  <SimpleGrid p={10} columns={[1, 2, null, 3, 4]} spacingX={10}>
    <CardCharacter {...args} />
    <CardCharacter {...args} />
    <CardCharacter {...args} />
    <CardCharacter {...args} />
    <CardCharacter {...args} />
    <CardCharacter {...args} />
    <CardCharacter {...args} />
  </SimpleGrid>
);

const TemplateGrid_Heroes: ComponentStory<typeof CardCharacter> = (args) => {
  const variant =
    (useBreakpointValue({
      base: "secondary",
      lg: "hero",
    }) as keyof typeof VARIANTS) || "base";
  return (
    <Container maxW="container.xxl">
      <SimpleGrid columns={3} spacingX={5}>
        <CardCharacter {...args} variant={variant} />
        <CardCharacter
          variant={variant}
          image="/assets/images/franklin_transparent_2.png"
          name="Франклин Клинтон"
          description="Хочет свалить из квартала"
          color="#abedab"
        />
        <CardCharacter
          variant={variant}
          image="/assets/images/trevor_transparent_2.png"
          name="Тревор Филипс"
          description="Тяжелое детство"
          color="#ffa357"
        />
      </SimpleGrid>
      <SimpleGrid mt={50} columns={[1, 2, 3, 4]} spacingX={10}>
        <CardCharacter
          {...args}
          name="Аманда Де Санта"
          variant="secondary"
          color=""
          image="https://gtals.ru/wp-content/uploads/2015/08/gta5_amanda_de_santa_main.jpg"
        />
        <CardCharacter
          image="https://gtals.ru/wp-content/uploads/2015/08/gta5_jimmy_de_santa_main.jpg"
          name="Джимми Де Санта"
          description="Золотая молодежь"
          variant="secondary"
        />
        <CardCharacter
          image="https://gtals.ru/wp-content/uploads/2015/08/gta5_tracey_de_santa_main.jpg"
          name="Трейси Де Санта"
          description="Избалованная принцесса"
          variant="secondary"
        />
        <CardCharacter
          image="https://gtals.ru/wp-content/uploads/2015/08/gta5_lester_crest_main-1.jpg"
          name="Лестер Крест"
          description="Главный по АЙТИ"
          variant="secondary"
        />
        <CardCharacter
          {...args}
          name="Аманда Де Санта"
          variant="secondary"
          color=""
          image="https://gtals.ru/wp-content/uploads/2015/08/gta5_amanda_de_santa_main.jpg"
        />
        <CardCharacter
          image="https://gtals.ru/wp-content/uploads/2015/08/gta5_jimmy_de_santa_main.jpg"
          name="Джимми Де Санта"
          description="Золотая молодежь"
          variant="secondary"
        />
        <CardCharacter
          image="https://gtals.ru/wp-content/uploads/2015/08/gta5_tracey_de_santa_main.jpg"
          name="Трейси Де Санта"
          description="Избалованная принцесса"
          variant="secondary"
        />
        <CardCharacter
          image="https://gtals.ru/wp-content/uploads/2015/08/gta5_lester_crest_main-1.jpg"
          name="Лестер Крест"
          description="Главный по АЙТИ"
          variant="secondary"
        />
      </SimpleGrid>
      <SimpleGrid mt={50} columns={[1, 2, 3, 4]} spacing={10}>
        <CardArticle
          {...args}
          title="Аманда Де Санта"
          variant="secondary"
          color=""
          image="https://gtals.ru/wp-content/uploads/2015/08/gta5_amanda_de_santa_main.jpg"
        />
        <CardArticle
          image="https://gtals.ru/wp-content/uploads/2015/08/gta5_jimmy_de_santa_main.jpg"
          title="Джимми Де Санта"
          description="Золотая молодежь"
          variant="secondary"
        />
        <CardArticle
          image="https://gtals.ru/wp-content/uploads/2015/08/gta5_tracey_de_santa_main.jpg"
          title="Трейси Де Санта"
          description="Избалованная принцесса"
          variant="secondary"
        />
        <CardArticle
          image="https://gtals.ru/wp-content/uploads/2015/08/gta5_lester_crest_main-1.jpg"
          title="Лестер Крест"
          description="Главный по АЙТИ"
          variant="secondary"
        />
        <CardArticle
          {...args}
          title="Аманда Де Санта"
          variant="secondary"
          color=""
          image="https://gtals.ru/wp-content/uploads/2015/08/gta5_amanda_de_santa_main.jpg"
        />
        <CardArticle
          image="https://gtals.ru/wp-content/uploads/2015/08/gta5_jimmy_de_santa_main.jpg"
          title="Джимми Де Санта"
          description="Золотая молодежь"
          variant="secondary"
        />
        <CardArticle
          image="https://gtals.ru/wp-content/uploads/2015/08/gta5_tracey_de_santa_main.jpg"
          title="Трейси Де Санта"
          description="Избалованная принцесса"
          variant="secondary"
        />
        <CardArticle
          image="https://gtals.ru/wp-content/uploads/2015/08/gta5_lester_crest_main-1.jpg"
          title="Лестер Крест"
          description="Главный по АЙТИ"
          variant="secondary"
        />
      </SimpleGrid>
    </Container>
  );
};

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

export const Hero_Transparent = Template.bind({});
Hero_Transparent.args = {
  name: "Майкл Де Санта",
  description: "Кризис среднего возраста",
  image: "/assets/images/michael_transparent.png",
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

export const Grid_Heroes = TemplateGrid_Heroes.bind({});
Grid_Heroes.args = {
  name: "Майкл Де Санта",
  description: "Кризис среднего возраста",
  image: "/assets/images/michael_transparent_2.png",
  color: "#65b4d4",
  variant: "hero",
};
