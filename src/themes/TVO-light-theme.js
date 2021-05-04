import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

const TVOPrimaryRed = "#E7133D";
const TVOPrimaryaccentRed = red.A200;
const TVOPrimarydarkRed = red[900];
const TVOSecondaryBlue = "#007FA3";
const TVOSecondaryaccentBlue = "#2f8ba7";
const TVOSecondaryDarkBlue = "#043544";

export const overridings = {
  name: "Light Theme",
  palette: {
    primary: {
      light: TVOPrimaryaccentRed,
      main: TVOPrimaryRed,
      dark: TVOPrimarydarkRed,
      contrastText: "#fff",
    },
    secondary: {
      light: TVOSecondaryaccentBlue,
      main: TVOSecondaryBlue,
      dark: TVOSecondaryDarkBlue,
      contrastText: "#fff",
    },
  },
};

export default createMuiTheme(overridings);
