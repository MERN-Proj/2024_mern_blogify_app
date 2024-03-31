import { useMutation, useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import QueryKey from "@/utils/reactQueryKeys.js";
import { deletePost, fetchAllPosts } from "@/APIServices/posts/postsAPI.js";

const PostsList = (props) => {
  //! use query
  const { data, error, isPending, isError, refetch } = useQuery({
    queryKey: [QueryKey.posts.fetchAll],
    queryFn: fetchAllPosts,
  });

  //! post mutation
  const postMutation = useMutation({
    mutationKey: [QueryKey.posts.delete],
    mutationFn: deletePost,
    onSettled: async () => {
      await refetch();
    },
  });

  const handleDelete = (postId) => {
    postMutation.mutate(postId);
  };

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
              <Link to={`/posts/${post?._id}`}>
                <button>View</button>
              </Link>
              <button onClick={() => handleDelete(post._id)}>delete</button>
            </div>
          );
        })}
    </div>
  );
};

export default PostsList;
