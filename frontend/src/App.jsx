import { useState } from "react";

import CreatePost from "@/components/posts/CreatePost.jsx";
import PostsList from "@/components/posts/PostsList.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <CreatePost />
        <PostsList />
      </div>
    </>
  );
}

export default App;
