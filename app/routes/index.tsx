import stylesheet from "~/styles/index.css";
import { Text, Box } from "~/components";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: stylesheet,
    },
  ];
}

export default function Index() {
  return (
    <Box
      padding={{
        mobile: "small",
        tablet: "medium",
        desktop: "large",
      }}
    >
      <Text>Hello from 🧁 vanilla-extract + 💿 Remix</Text>
    </Box>
  );
}
