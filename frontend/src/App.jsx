import { BrowserRouter, Route, Routes } from "react-router-dom";

import CreatePost from "@/components/posts/CreatePost.jsx";
import HomePage from "@/components/home/HomePage.jsx";
import PostsList from "@/components/posts/PostsList.jsx";
import PublicNavbar from "@/components/navbar/PublicNavbar.jsx";

function App() {
  return (
    <BrowserRouter>
      <PublicNavbar />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<CreatePost />} path="/create-post" />
        <Route element={<PostsList />} path="/lists" />
        {/*<Route element={<UpdatePost />} path="/posts/:postId" />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
