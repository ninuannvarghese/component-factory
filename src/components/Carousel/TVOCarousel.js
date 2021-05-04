import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import TVOCard from "../Card/TVOCard";
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
        <TVOCard
          title="Can Ontario boost EV battery recycling before it’s too late?"
          summary="Lithium-ion batteries are meant to power the future — but that won’t happen if we don't tackle recycling"
          thumbnail="https://assets.tvo.org/prod/s3fs-public/styles/full_width_1280/public/media-library/ev.jpeg"
          tag="Earth Week"
          targetlabel="Learn More"
          altText="Electric vehicle"
        />
        <TVOCard
          title="The LTC report, an expired PPE stockpile, and a province utterly unprepared"
          summary="OPINION: The final report from the Long-Term Care COVID-19 Commission is an indictment of Ontario’s whole emergency-preparedness effort."
          thumbnail="https://assets.tvo.org/prod/s3fs-public/styles/feature_area_frame_image/public/media-library/fullerton_1.jpg?OIfPnrDBgtA8IwJCue7x4P.CK8lIrkrE"
          tag="Opinion"
          targetlabel="Learn More"
          altText="close-up of a blonde woman standing in front of flags from the article The LTC report, an expired PPE stockpile, and a province utterly unprepared"
        />
        <TVOCard
          title="My titleCan Ontario boost EV battery recycling before it’s too late?"
          summary="Lithium-ion batteries are meant to power the future — but that won’t happen if we don't tackle recycling"
          thumbnail="https://assets.tvo.org/prod/s3fs-public/styles/full_width_1280/public/media-library/ev.jpeg"
          tag="Earth Week"
          targetlabel="Learn More"
          altText="Electric vehicle"
        />
        <TVOCard
          title="My titleCan Ontario boost EV battery recycling before it’s too late?"
          summary="Lithium-ion batteries are meant to power the future — but that won’t happen if we don't tackle recycling"
          thumbnail="https://assets.tvo.org/prod/s3fs-public/styles/full_width_1280/public/media-library/ev.jpeg"
          tag="Earth Week"
          targetlabel="Learn More"
          altText="Electric vehicle"
        />
      </ItemsCarousel>
    </div>
  );
};
export default TVOCarousel;
