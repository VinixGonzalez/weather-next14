import React from "react";

export const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full w-full">
      {children}
    </main>
  );
};
