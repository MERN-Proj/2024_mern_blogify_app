import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { fetchPost } from "@/APIServices/posts/postsAPI.js";
import QueryKey from "@/utils/reactQueryKeys.js";

const PostDetails = (props) => {
  // !Get the post id
  const { postId } = useParams();
  // ! use query
  const {
    data: { postFound },
    error,
    isError,
    isLoading,
  } = useQuery({
    queryKey: [QueryKey.posts.fetchById, postId],
    queryFn: () => fetchPost(postId),
  });

  return (
    <div>
      <h1>{postFound.title}</h1>
      <p>{postFound.description}</p>
    </div>
  );
};

export default PostDetails;
