import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const outline = defineStyle({
  fontWeight: "semibold", // change the font weight,
});

const brandPrimary = defineStyle({
  background: "orange.500",
  _hover: {
    background: "orange.400",
  },
});

const brandSecondary = defineStyle({
  background: "orange.700",
  _hover: {
    background: "orange.600",
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { outline, brandPrimary, brandSecondary },
  baseStyle: {
    color: "white",
  },
});
