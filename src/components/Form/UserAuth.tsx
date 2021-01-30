import { Container, TextField, Box, Button } from "@material-ui/core";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

export default function UserAuth({
  handleNext,
  data,
  setData,
}: {
  handleNext: () => void;
  data: any;
  setData: any;
}) {
  return (
    <Container maxWidth="lg">
      <Formik
        initialValues={data}
        onSubmit={(values) => {
          setData(values);
          handleNext();
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email")
            .required("Email Is Required"),
          password: Yup.string()
            .min(10, "Length should be greter then 10")
            .max(60, "Length should be less then 60")
            .required("Password field is required")
        })}
      >
        <Form>
          <Box m={2}>
            <Field
              fullWidth
              type="email"
              as={TextField}
              variant="outlined"
              label="Email"
              name="email"
              id="email"
            />
            <ErrorMessage
              name="email"
              render={(msg) => <span style={{ color: "red" }}>{msg}</span>}
            />
          </Box>
          <Box m={2}>
            <Field
              fullWidth
              type="password"
              as={TextField}
              label="Password"
              variant="outlined"
              name="password"
              id="password"
            />
            <ErrorMessage
              name="password"
              render={(msg) => <span style={{ color: "red" }}>{msg}</span>}
            />
          </Box>
          <Box m={2}>
            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </Box>
        </Form>
      </Formik>
    </Container>
  );
}
