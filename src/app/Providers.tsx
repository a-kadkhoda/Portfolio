import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
};

export default Providers;
