import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import Common from "./components/Common";
import "./App.css";

function App() {
  return (
    <div className="main-wrapper w-screen min-h-screen bg-[#f1f2f6] dark:bg-[#0F172A] px-3">
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
