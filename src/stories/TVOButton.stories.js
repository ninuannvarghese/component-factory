import React from "react";

import { action } from "@storybook/addon-actions";

import TVOButton from "../components/TVOButton";

export default {
  title: "TVO/Styled Button",
  component: TVOButton,
};

export const Default = () => (
  <TVOButton onClick={action("Styled button clicked")}>Styled Button</TVOButton>
);
