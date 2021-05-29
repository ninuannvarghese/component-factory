import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

const PrimaryRed = "#E7133D";
const PrimaryaccentRed = red.A200;
const PrimarydarkRed = red[900];
const SecondaryBlue = "#007FA3";
const SecondaryaccentBlue = "#2f8ba7";
const SecondaryDarkBlue = "#043544";

export const overridings = {
  name: "Light Theme",
  palette: {
    primary: {
      light: PrimaryaccentRed,
      main: PrimaryRed,
      dark: PrimarydarkRed,
      contrastText: "#fff",
    },
    secondary: {
      light: SecondaryaccentBlue,
      main: SecondaryBlue,
      dark: SecondaryDarkBlue,
      contrastText: "#fff",
    },
  },
};

export default createMuiTheme(overridings);
