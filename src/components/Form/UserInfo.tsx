import { Container, TextField, Box, Button } from "@material-ui/core";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

export default function UserInfo({
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
          name: Yup.string()
            .max(15, "Name field should be less then 15 characters")
            .required("Name field is required"),
          age: Yup.number()
            .max(60, "Age should be less then 60")
            .min(10, "Age should be greter then 10")
            .required("Age field is required"),
        })}
      >
        <Form>
          <Box m={2}>
            <Field
              fullWidth
              type="text"
              as={TextField}
              variant="outlined"
              label="Name"
              name="name"
              id="name"
            />
            <ErrorMessage
              name="name"
              render={(msg) => <span style={{ color: "red" }}>{msg}</span>}
            />
          </Box>
          <Box m={2}>
            <Field
              fullWidth
              type="number"
              as={TextField}
              label="Age"
              variant="outlined"
              name="age"
              id="age"
            />
            <ErrorMessage
              name="age"
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
