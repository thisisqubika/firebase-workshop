import { extendTheme } from "@chakra-ui/react";
import colors from "./theme/colors";
import typography from "./theme/typography";

const theme = extendTheme({
  colors,
  ...typography
})

export default theme;
