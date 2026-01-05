import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { NuqsAdapter } from "nuqs/adapters/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { scan } from "react-scan";
import { Toaster } from "sonner";
import { routeTree } from "./routeTree.gen";
import "./styles.css";
import { ThemeProvider } from "./ThemeProvider";

scan({ enabled: true });

async function enableMocking() {
  //* test/development/production
  if (import.meta.env.MODE === "test") {
    const { worker } = await import("./mocks/browser");

    return worker.start();
  }
}

const router = createRouter({ routeTree });

const queryClient = new QueryClient();

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <NuqsAdapter>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <Toaster
              closeButton
              duration={1500}
              position="top-center"
              richColors
            />
            <ReactQueryDevtools initialIsOpen={false} position="right" />
          </QueryClientProvider>
        </NuqsAdapter>
      </ThemeProvider>
    </StrictMode>
  );
});
