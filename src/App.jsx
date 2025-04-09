import { Route, BrowserRouter, Routes } from "react-router";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index pathname="/" element={<Home replace to="home"></Home>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
