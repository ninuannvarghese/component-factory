import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});
export default function MediaCard() {
  const classes = useStyles();
  return /*#__PURE__*/React.createElement(Card, {
    className: classes.root
  }, /*#__PURE__*/React.createElement(CardActionArea, null, /*#__PURE__*/React.createElement(CardMedia, {
    className: classes.media,
    image: "https://assets.tvo.org/prod/s3fs-public/styles/full_width_1280/public/media-library/ev.jpeg?R5WljeDguAZbXNdfaOgT3RFibVd6t44E&itok=rpk-n7o8",
    title: "Contemplative Reptile"
  }), /*#__PURE__*/React.createElement(CardContent, null, /*#__PURE__*/React.createElement(Typography, {
    gutterBottom: true,
    variant: "h5",
    component: "h2"
  }, "Can Ontario boost EV battery recycling before it\u2019s too late?"), /*#__PURE__*/React.createElement(Typography, {
    variant: "body2",
    color: "textSecondary",
    component: "p"
  }, "LLithium-ion batteries are meant to power the future \u2014 but that won\u2019t happen if we don't tackle recycling"))), /*#__PURE__*/React.createElement(CardActions, null, /*#__PURE__*/React.createElement(Button, {
    size: "small",
    color: "primary"
  }, "Earth Week"), /*#__PURE__*/React.createElement(Button, {
    size: "small",
    color: "primary"
  }, "Learn More")));
}