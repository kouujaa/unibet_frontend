import { QueryClient, QueryClientProvider } from "react-query";
import { createWebStoragePersistor } from "react-query/createWebStoragePersistor-experimental";
import { persistQueryClient } from "react-query/persistQueryClient-experimental";
import { Route, Routes } from "react-router";
import { ROUTES } from "src/helpers";
import Home from "src/pages/Home/Home";
import "./App.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 120000, // 2 minutes
    },
  },
});
const persistor = createWebStoragePersistor({
  storage: window.localStorage,
});
persistQueryClient({ queryClient, persistor });
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
