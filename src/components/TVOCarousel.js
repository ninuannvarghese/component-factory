import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import TVOCard from "./TVOCard";
const TVOCarousel = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={2}
        gutter={20}
        leftChevron={<button>{"<"}</button>}
        rightChevron={<button>{">"}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <TVOCard />
        <TVOCard />
        <TVOCard />
        <TVOCard />
      </ItemsCarousel>
    </div>
  );
};
export default TVOCarousel;
