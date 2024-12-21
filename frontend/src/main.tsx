import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

const query = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={query}>
    <ToastContainer />
    <App />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
