import React from "react";
import { ArticleProps } from "../../../types";

interface CardArticleSProps {
  article: ArticleProps;
}

export const CardArticleS = ({ article }: CardArticleSProps) => {
  return <div>{article.title}</div>;
};
