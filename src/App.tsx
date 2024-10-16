import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { TasksProvider } from "./providers/Tasks-provider";
import { SnackbarProvider } from "notistack";

const TasksPage = lazy(() => import("./pages/Tasks/Tasks-page"));
const NotFoundPage = lazy(() => import("./pages/NotFound/NotFound-page"));

function AppRoutes() {
  return (
    <>
      <BrowserRouter basename="/">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<TasksPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

function App() {
  return (
    <TasksProvider>
      <SnackbarProvider maxSnack={3}>
        <AppRoutes />
      </SnackbarProvider>
    </TasksProvider>
  );
}

export default App;
