import type { ReactNode } from "react";
import { Box } from "../Box/Box";
import { Text as styles } from "~/styles";

export function Text({ children }: { children: ReactNode }) {
  return (
    <Box
      color={{
        lightMode: "darkGray",
        darkMode: "lightBlue",
      }}
      className={styles.root}
    >
      {children}
    </Box>
  );
}
