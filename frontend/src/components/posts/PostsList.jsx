import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import QueryKey from "@/utils/reactQueryKeys.js";
import { fetchAllPosts } from "@/APIServices/posts/postsAPI.js";

const PostsList = (props) => {
  //! use query
  const {
    data: { posts },
    error,
    isPending,
    isError,
  } = useQuery({
    queryKey: [QueryKey.posts.fetchAll],
    queryFn: fetchAllPosts,
  });

  return (
    <div>
      {isPending && <p>Loading....</p>}
      {error && <p>{error.message}</p>}
      {posts &&
        posts.map((post) => {
          return (
            <div key={post._id}>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <Link to={`/posts/${post?._id}`}>
                <button>Edit</button>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default PostsList;
