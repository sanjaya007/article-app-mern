import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import Common from "./components/Common";

function App() {
  return (
    <div className="main-wrapper h-screen w-screen bg-[#f1f2f6] dark:bg-[#0F172A]">
      <main className="max-w-screen-md mx-auto py-3">
        <Routes>
          <Route path="/" element={<Common />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
