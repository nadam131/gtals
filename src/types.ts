export interface ArticleProps {
  id: string;
  slug: string;
  date: string;
  link: string;
  type: string;
  title: string;
  description: string;
  image: string;
  fields: {
    post_main_img: string;
    post_icn: string;
    post_main_img_nobg: string;
    post_color: string;
    post_name_slogan: string;
  };
  disabled: boolean;
}
