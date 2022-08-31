import { globalStyle } from "@vanilla-extract/css";

globalStyle("body", {
  "@media": {
    "(prefers-color-scheme: dark)": {
      backgroundColor: "#111",
    },
  },
});
