import React from "react";
import Hero from "./Hero";
import Secondary from "./Secondary";

const VARIANTS = {
  base: Hero,
  hero: Hero,
  secondary: Secondary,
};

export interface CardCharacterProps {
  name: string;
  image: string;
  description: string;
  color?: string;
  variant?: "base" | "hero" | "secondary";
}

const CardCharacter = ({ variant = "base", ...props }: CardCharacterProps) => {
  return React.createElement(VARIANTS[variant as keyof typeof VARIANTS], {
    ...props,
  });
};

export default CardCharacter;
