import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import Common from "./components/Common";

function App() {
  return (
    <main className="max-w-screen-md mx-auto py-3">
      <Routes>
        <Route path="/" element={<Common />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
