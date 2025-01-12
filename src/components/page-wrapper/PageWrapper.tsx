import { Box } from "@mui/material";
import React from "react";

import { ReactNode } from "react";

const PageWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box
      sx={{
        my: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  );
};

export default PageWrapper;
