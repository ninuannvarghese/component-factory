import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.

  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464
    },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.

  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.

  }
};

const TVOMultiCarousel = () => {
  return /*#__PURE__*/React.createElement(Carousel, {
    swipeable: true,
    draggable: false,
    showDots: true,
    responsive: responsive,
    ssr: true // means to render carousel on server-side.
    ,
    infinite: true,
    autoPlay: true,
    autoPlaySpeed: 10000,
    keyBoardControl: true,
    customTransition: "all .5",
    transitionDuration: 500,
    containerClass: "carousel-container",
    removeArrowOnDeviceType: ["tablet", "mobile"],
    deviceType: "mobile",
    dotListClass: "custom-dot-list-style",
    itemClass: "carousel-item-padding-40-px"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "https://assets.tvo.org/prod/s3fs-public/styles/narrow_x2/public/media-library/ev.jpeg?yjMGcnvuOaVdp6cz52N9e1t4jRLJZgE4&itok=U7AP6LSk 1x"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "https://assets.tvo.org/prod/s3fs-public/styles/narrow_x2/public/media-library/cp19596129.jpg?.aZGr8_R9vijMT03ihoawnjTcDsxIQ.i&itok=0SdrBQh7 1x"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "https://assets.tvo.org/prod/s3fs-public/styles/narrow_x2/public/media-library/dougford_29.jpg?mkacrz9TNqMY0MGAfEovGAEVgEwI_Diz&itok=oMRdv-PI 1x"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "https://assets.tvo.org/prod/s3fs-public/styles/narrow_x2/public/media-library/dougford_30.jpg?bF1vIo6158mj5Jkq_kR0r.wu7ZVMqmkH&itok=cI-9bZ-n 1x"
  })));
};

export default TVOMultiCarousel;