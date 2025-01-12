"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import { useColorScheme } from "@mui/material/styles";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

export default function ToggleDarkTheme() {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        mt: 1,
        p: 1,
      }}
    >
      <FormControl>
        <ToggleButtonGroup
          color="primary"
          value={mode}
          exclusive
          onChange={(event, newMode) => setMode(newMode)}
          aria-label="Platform"
        >
          <ToggleButton value="system">System</ToggleButton>
          <ToggleButton value="dark">Dark</ToggleButton>
          <ToggleButton value="light">Light</ToggleButton>
        </ToggleButtonGroup>
      </FormControl>
    </Box>
  );
}
