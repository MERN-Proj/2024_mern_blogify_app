import { useQuery } from "@tanstack/react-query";

import QueryKey from "@/utils/reactQueryKeys.js";
import { fetchAllPosts } from "@/APIServices/posts/postsAPI.js";

const PostsList = (props) => {
  //! use query
  const { data, error, isPending, isError } = useQuery({
    queryKey: [QueryKey.posts.fetchAll],
    queryFn: fetchAllPosts,
  });

  return (
    <div>
      {isPending && <p>Loading....</p>}
      {error && <p>{error.message}</p>}
      {data &&
        data.posts.map((post) => {
          return (
            <div key={post._id}>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </div>
          );
        })}
    </div>
  );
};

export default PostsList;
