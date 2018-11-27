import Typography from "typography";
import kirkhamTheme from "typography-theme-kirkham";

// const typography = new Typography({ baseFontSize: "18px" })
const typography = new Typography(kirkhamTheme);
export const blackTypography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  headerFontFamily: [
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif"
  ],
  bodyFontFamily: ["Georgia", "serif"],
  backgroundColor: "#000"
});

export default typography;
export const rhythm = typography.rhythm;
