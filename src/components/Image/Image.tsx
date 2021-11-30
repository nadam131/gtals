import { AspectRatio, chakra } from "@chakra-ui/react";
import NextImage, { ImageLoaderProps } from "next/image";

const ChakraNextUnwrappedImage = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    [
      "width",
      "height",
      "ratio",
      "src",
      "alt",
      "quality",
      "placeholder",
      "blurDataURL",
      "loader ",
      "layout",
      "objectFit",
      "objectPosition",
      "borderRadius",
    ].includes(prop),
});

const myLoader = (resolverProps: ImageLoaderProps): string => {
  return `${resolverProps.src}?w=${resolverProps.width}&q=${resolverProps.quality}`;
};

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const Image = (props: any) => {
  const {
    src,
    alt,
    width,
    quality,
    height,
    layout = "fill",
    borderRadius,
    objectFit = "cover",
    objectPosition = "top",
    __css,
    ...rest
  } = props;

  return (
    <AspectRatio
      w="100%"
      h="100%"
      pos="relative"
      className="group"
      borderRadius={borderRadius}
      {...__css}
      {...rest}
    >
      <ChakraNextUnwrappedImage
        w="auto"
        h="auto"
        loader={myLoader}
        width={width}
        quality={quality}
        height={height}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        src={src}
        alt={alt}
        layout={layout}
        borderRadius={borderRadius}
        objectFit={objectFit}
        objectPosition={objectPosition}
        transition="all 0.2s"
      />
    </AspectRatio>
  );
};

export default Image;
