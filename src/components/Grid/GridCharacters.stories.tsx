import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Grid, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import CardArticle from "../Card/CardArticle/CardArticle";

export default {
  title: "Components/Grid/Characters",
  component: Grid,
} as ComponentMeta<typeof Grid>;

const Heroes: ComponentStory<typeof Grid> = (args) => {
  const sizeH: "xs" | "md" | "lg" | undefined = useBreakpointValue({
    base: "xs",
    sm: "md",
    lg: "lg",
  });

  const sizeS: "xs" | "md" | "lg" | undefined = useBreakpointValue({
    base: "xs",
    lg: "md",
  });
  return (
    <>
      <SimpleGrid columns={[1, null, 3]} spacing={[3, 5, null, 7]}>
        <CardArticle {...args} size={sizeH} color="#65b4d4" />
        <CardArticle
          {...args}
          image="/assets/images/franklin_transparent_2.png"
          title="Франклин Клинтон"
          description="Хочет свалить из квартала"
          color="#abedab"
          size={sizeH}
        />
        <CardArticle
          {...args}
          image="/assets/images/Frame 1.png"
          title="Тревор Филипс"
          description="Тяжелое детство"
          color="#ffa357"
          size={sizeH}
        />
      </SimpleGrid>
      <SimpleGrid mt="80px" columns={[1, null, 2, 4]} spacing={[3, 5, null, 7]}>
        <CardArticle
          title="Аманда Де Санта"
          size={sizeS}
          description="Счастлива в браке"
          image="https://gtals.ru/wp-content/uploads/2015/08/gta5_amanda_de_santa_main.jpg"
        />
        <CardArticle
          image="https://gtals.ru/wp-content/uploads/2015/08/gta5_jimmy_de_santa_main.jpg"
          title="Джимми Де Санта"
          description="Золотая молодежь"
          size={sizeS}
        />
        <CardArticle
          image="https://gtals.ru/wp-content/uploads/2015/08/gta5_tracey_de_santa_main.jpg"
          title="Трейси Де Санта"
          description="Избалованная принцесса"
          size={sizeS}
        />
        <CardArticle
          image="https://gtals.ru/wp-content/uploads/2015/08/gta5_lester_crest_main-1.jpg"
          title="Лестер Крест"
          description="Главный по АЙТИ"
          size={sizeS}
        />
      </SimpleGrid>
      <SimpleGrid
        mt="40px"
        columns={[1, null, 2, 3, 4]}
        spacing={[3, 5, null, 5]}
      >
        <CardArticle
          title="Аманда Де Санта"
          size="xs"
          description="Счастлива в браке"
          image="https://gtals.ru/wp-content/uploads/2015/08/gta5_amanda_de_santa_main.jpg"
        />
        <CardArticle
          image="https://gtals.ru/wp-content/uploads/2015/08/gta5_jimmy_de_santa_main.jpg"
          title="Джимми Де Санта"
          description="Золотая молодежь"
          size="xs"
        />
        <CardArticle
          image="https://gtals.ru/wp-content/uploads/2015/08/gta5_tracey_de_santa_main.jpg"
          title="Трейси Де Санта"
          description="Избалованная принцесса"
          size="xs"
        />
        <CardArticle
          image="https://gtals.ru/wp-content/uploads/2015/08/gta5_lester_crest_main-1.jpg"
          title="Лестер Крест"
          description="Главный по АЙТИ"
          size="xs"
        />
        <CardArticle
          title="Аманда Де Санта"
          size="xs"
          description="Счастлива в браке"
          image="https://gtals.ru/wp-content/uploads/2015/08/gta5_amanda_de_santa_main.jpg"
        />
        <CardArticle
          image="https://gtals.ru/wp-content/uploads/2015/08/gta5_jimmy_de_santa_main.jpg"
          title="Джимми Де Санта"
          description="Золотая молодежь"
          size="xs"
        />
        <CardArticle
          image="https://gtals.ru/wp-content/uploads/2015/08/gta5_tracey_de_santa_main.jpg"
          title="Трейси Де Санта"
          description="Избалованная принцесса"
          size="xs"
        />
        <CardArticle
          image="https://gtals.ru/wp-content/uploads/2015/08/gta5_lester_crest_main-1.jpg"
          title="Лестер Крест"
          description="Главный по АЙТИ"
          size="xs"
        />
        <CardArticle
          title="Аманда Де Санта"
          size="xs"
          description="Счастлива в браке"
          image="https://gtals.ru/wp-content/uploads/2015/08/gta5_amanda_de_santa_main.jpg"
        />
        <CardArticle
          image="https://gtals.ru/wp-content/uploads/2015/08/gta5_jimmy_de_santa_main.jpg"
          title="Джимми Де Санта"
          description="Золотая молодежь"
          size="xs"
        />
        <CardArticle
          image="https://gtals.ru/wp-content/uploads/2015/08/gta5_tracey_de_santa_main.jpg"
          title="Трейси Де Санта"
          description="Избалованная принцесса"
          size="xs"
        />
        <CardArticle
          image="https://gtals.ru/wp-content/uploads/2015/08/gta5_lester_crest_main-1.jpg"
          title="Лестер Крест"
          description="Главный по АЙТИ"
          size="xs"
        />
      </SimpleGrid>
    </>
  );
};

export const GTA5 = Heroes.bind({});
GTA5.args = {
  title: "Майкл Де Санта",
  description: "Кризис среднего возраста",
  href: "https://gtals.ru",
  image: "/assets/images/michael_transparent_2.png",
  color: "#65b4d4",
};
