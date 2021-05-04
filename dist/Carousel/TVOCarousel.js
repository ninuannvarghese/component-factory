import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import TVOCard from "../Card/TVOCard";

const TVOCarousel = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `0 ${chevronWidth}px`
    }
  }, /*#__PURE__*/React.createElement(ItemsCarousel, {
    requestToChangeActive: setActiveItemIndex,
    activeItemIndex: activeItemIndex,
    numberOfCards: 2,
    gutter: 20,
    leftChevron: /*#__PURE__*/React.createElement("button", null, "<"),
    rightChevron: /*#__PURE__*/React.createElement("button", null, ">"),
    outsideChevron: true,
    chevronWidth: chevronWidth
  }, /*#__PURE__*/React.createElement(TVOCard, {
    title: "Can Ontario boost EV battery recycling before it\u2019s too late?",
    summary: "Lithium-ion batteries are meant to power the future \u2014 but that won\u2019t happen if we don't tackle recycling",
    thumbnail: "https://assets.tvo.org/prod/s3fs-public/styles/full_width_1280/public/media-library/ev.jpeg",
    tag: "Earth Week",
    targetlabel: "Learn More",
    altText: "Electric vehicle"
  }), /*#__PURE__*/React.createElement(TVOCard, {
    title: "The LTC report, an expired PPE stockpile, and a province utterly unprepared",
    summary: "OPINION: The final report from the Long-Term Care COVID-19 Commission is an indictment of Ontario\u2019s whole emergency-preparedness effort.",
    thumbnail: "https://assets.tvo.org/prod/s3fs-public/styles/feature_area_frame_image/public/media-library/fullerton_1.jpg?OIfPnrDBgtA8IwJCue7x4P.CK8lIrkrE",
    tag: "Opinion",
    targetlabel: "Learn More",
    altText: "close-up of a blonde woman standing in front of flags from the article The LTC report, an expired PPE stockpile, and a province utterly unprepared"
  }), /*#__PURE__*/React.createElement(TVOCard, {
    title: "My titleCan Ontario boost EV battery recycling before it\u2019s too late?",
    summary: "Lithium-ion batteries are meant to power the future \u2014 but that won\u2019t happen if we don't tackle recycling",
    thumbnail: "https://assets.tvo.org/prod/s3fs-public/styles/full_width_1280/public/media-library/ev.jpeg",
    tag: "Earth Week",
    targetlabel: "Learn More",
    altText: "Electric vehicle"
  }), /*#__PURE__*/React.createElement(TVOCard, {
    title: "My titleCan Ontario boost EV battery recycling before it\u2019s too late?",
    summary: "Lithium-ion batteries are meant to power the future \u2014 but that won\u2019t happen if we don't tackle recycling",
    thumbnail: "https://assets.tvo.org/prod/s3fs-public/styles/full_width_1280/public/media-library/ev.jpeg",
    tag: "Earth Week",
    targetlabel: "Learn More",
    altText: "Electric vehicle"
  })));
};

export default TVOCarousel;