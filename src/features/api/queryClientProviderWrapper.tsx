"use client";

import { ReactNode } from "react";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/features/api/client";

const QueryClientProviderWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryClientProviderWrapper;
