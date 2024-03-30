import { useFormik } from "formik";
import * as Yup from "yup";

const CreatePost = (props) => {
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
      console.log(values);
    },
  });

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
