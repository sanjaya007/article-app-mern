import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import Common from "./components/Common";
import CreateArticle from "./pages/CreateArticle";
import ArticleView from "./pages/ArticleView";
import "./App.css";

import { UserContextProvider } from "./contexts/UserContext";
import EditArticle from "./pages/EditArticle";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <div className="main-wrapper w-screen min-h-screen bg-[#f1f2f6] dark:bg-[#0F172A] px-3">
      <main className="max-w-screen-md mx-auto py-3">
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
          <UserContextProvider>
            <Routes>
              <Route path="/" element={<Common />}>
                <Route index element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/create-article" element={<CreateArticle />} />
                <Route path="/article/:id" element={<ArticleView />} />
                <Route path="/edit-article/:id" element={<EditArticle />} />
              </Route>
            </Routes>
          </UserContextProvider>
        </GoogleOAuthProvider>
      </main>
    </div>
  );
}

export default App;
