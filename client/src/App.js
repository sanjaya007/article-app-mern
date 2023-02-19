import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import Common from "./components/Common";
import CreateArticle from "./pages/CreateArticle";
import ArticleView from "./pages/ArticleView";
import "./App.css";

import { UserContextProvider } from "./contexts/UserContext";

function App() {
  return (
    <div className="main-wrapper w-screen min-h-screen bg-[#f1f2f6] dark:bg-[#0F172A] px-3">
      <main className="max-w-screen-md mx-auto py-3">
        <UserContextProvider>
          <Routes>
            <Route path="/" element={<Common />}>
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/create-article" element={<CreateArticle />} />
              <Route path="/article/:id" element={<ArticleView />} />
            </Route>
          </Routes>
        </UserContextProvider>
      </main>
    </div>
  );
}

export default App;
