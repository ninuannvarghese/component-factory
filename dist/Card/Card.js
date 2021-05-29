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
export default function CustomCard({
  title,
  altText,
  summary,
  thumbnail,
  tag,
  targetlabel
}) {
  const classes = useStyles();
  return /*#__PURE__*/React.createElement(Card, {
    className: classes.root
  }, /*#__PURE__*/React.createElement(CardActionArea, null, /*#__PURE__*/React.createElement(CardMedia, {
    className: classes.media,
    image: thumbnail,
    alt: altText
  }), /*#__PURE__*/React.createElement(CardContent, null, /*#__PURE__*/React.createElement(Typography, {
    gutterBottom: true,
    variant: "h5",
    component: "h2"
  }, title), /*#__PURE__*/React.createElement(Typography, {
    variant: "body2",
    color: "textSecondary",
    component: "p"
  }, summary))), /*#__PURE__*/React.createElement(CardActions, null, /*#__PURE__*/React.createElement(Button, {
    size: "small",
    color: "primary"
  }, tag), /*#__PURE__*/React.createElement(Button, {
    size: "small",
    color: "primary"
  }, targetlabel)));
}