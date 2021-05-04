import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import TVOCard from "./TVOCard";

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
  }, /*#__PURE__*/React.createElement(TVOCard, null), /*#__PURE__*/React.createElement(TVOCard, null), /*#__PURE__*/React.createElement(TVOCard, null), /*#__PURE__*/React.createElement(TVOCard, null)));
};

export default TVOCarousel;