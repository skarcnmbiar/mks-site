"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true); // Ensure component is mounted before rendering
  }, []);

  if (!mounted) {
    return null; // Avoid rendering until hydration is complete
  }

  return (
    <>
      <Switch
        checked={resolvedTheme === "dark"} // Ensure the switch reflects the resolved theme
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      />
    </>
  );
}
