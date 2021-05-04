import React from "react";

import { action } from "@storybook/addon-actions";

import TVOCard from "../../components/Card/TVOCard";

export default {
  title: "TVO/Card",
  component: TVOCard,
};

export const Default = () => (
  <TVOCard
    title="Can Ontario boost EV battery recycling before it’s too late?"
    summary="Lithium-ion batteries are meant to power the future — but that won’t happen if we don't tackle recycling"
    thumbnail="https://assets.tvo.org/prod/s3fs-public/styles/full_width_1280/public/media-library/ev.jpeg"
    tag="Earth Week"
    targetlabel="Learn More"
    altText="Electric vehicle"
  />
);
