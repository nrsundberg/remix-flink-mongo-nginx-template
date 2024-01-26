import type { MetaFunction } from "@remix-run/node";
import {Button} from "~/components/ui/button";
import {TypographyH2} from "~/components/typography/Typography2";
import AppBar from "~/components/AppBar";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <AppBar/>


      <Button>Click me</Button>
    </div>
  );
}
