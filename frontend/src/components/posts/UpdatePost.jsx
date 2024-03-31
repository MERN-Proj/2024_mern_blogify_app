import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { fetchPost, updatePost } from "@/APIServices/posts/postsAPI.js";
import QueryKey from "@/utils/reactQueryKeys.js";

const UpdatePost = (props) => {
  const { postId } = useParams();

  const query = useQuery({
    queryKey: [QueryKey.posts.fetchById, postId],
    queryFn: () => fetchPost(postId),
  });
  // post mutation
  const mutation = useMutation({
    mutationKey: [QueryKey.posts.update, postId],
    mutationFn: updatePost,
  });

  const formik = useFormik({
    // initial data
    initialValues: {
      title: query.data?.postFound?.title || "",
      description: query.data?.postFound?.description || "",
    },
    enableReinitialize: true,
    // validation
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      description: Yup.string().required("Description is required"),
    }),
    // submit
    onSubmit: (values) => {
      const postData = {
        title: values.title,
        description: values.description,
        postId,
      };
      mutation.mutate(postData);
    },
  });

  return (
    <div>
      <h1> You are editing - {query.data?.postFound.title}</h1>

      {mutation.isPending && <p>Loading...</p>}
      {mutation.isSuccess && !mutation.isError && (
        <p>Post updated successfully</p>
      )}
      {mutation.isError && <p>{mutation.error.message}</p>}

      <form onSubmit={formik.handleSubmit}>
        <div>
          <input type="text" name="title" {...formik.getFieldProps("title")} />
          {/* display err msg */}
          {formik.touched.title && formik.errors.title && (
            <span style={{ color: "red" }}>{formik.errors.title}</span>
          )}
        </div>
        <div>
          <input
            type="text"
            name="description"
            {...formik.getFieldProps("description")}
          />
        </div>
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default UpdatePost;
