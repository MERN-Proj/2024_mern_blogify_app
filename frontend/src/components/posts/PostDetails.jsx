import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { fetchPost } from "@/APIServices/posts/postsAPI.js";
import QueryKey from "@/utils/reactQueryKeys.js";

const PostDetails = (props) => {
  // !Get the post id
  const { postId } = useParams();
  // ! use query
  const { data, error, isError, isLoading } = useQuery({
    queryKey: [QueryKey.posts.fetchById, postId],
    queryFn: () => fetchPost(postId),
  });

  return (
    <div>
      <h1>{data?.postFound.title}</h1>
      <p>{data?.postFound.description}</p>
      <Link to={`/posts/${postId}/edit`}>
        <button>Edit</button>
      </Link>
    </div>
  );
};

export default PostDetails;
