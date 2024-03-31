import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";

import { createPost } from "@/APIServices/posts/postsAPI.js";
import QueryKey from "@/utils/reactQueryKeys.js";

const CreatePost = (props) => {
  // post mutation
  const mutation = useMutation({
    mutationKey: [QueryKey.posts.create],
    mutationFn: createPost,
  });

  const formik = useFormik({
    // initial data
    initialValues: {
      title: "",
      description: "",
    },
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
      };
      mutation.mutate(postData);
    },
  });

  const { isPending, isError, isSuccess } = mutation;

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input type="text" name="title" {...formik.getFieldProps("title")} />
        </div>
        <div>
          <input
            type="text"
            name="description"
            {...formik.getFieldProps("description")}
          />
          {/* display err msg */}
          {formik.touched.title && formik.errors.title && (
            <span style={{ color: "red" }}>{formik.errors.title}</span>
          )}
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
