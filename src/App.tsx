import { Route, Routes } from "react-router";
import { ROUTES } from "src/helpers";
import Home from "src/pages/Home/Home";
import "./App.css";
function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
    </Routes>
  );
}

export default App;
