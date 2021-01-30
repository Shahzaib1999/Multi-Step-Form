import { Container, TextField, Grid, Box, Button } from "@material-ui/core";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

export default function UserInfo({ handleNext }: any) {
  return (
    <Container maxWidth="lg">
      <Formik
        initialValues={{
          name: "",
          age: 0,
        }}
        onSubmit={(values) => {
          console.log(values);
          handleNext();
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("Name field is required")
            .max(15, "Name field should be less then 15 characters"),
          age: Yup.number()
            .max(60, "Age should be less then 60")
            .min(10, "Age should be greter then 10"),
        })}
      >
          <Form>
            <Box m={2}>
              <Field
                fullWidth
                type="text"
                as={TextField}
                variant="outlined"
                label="Name:"
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
                label="Age:"
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
              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                Submit
              </Button>
            </Box>
          </Form>
      </Formik>
      {/* <form onSubmit={formik.handleSubmit}>
                <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                />
                <Button color="primary" variant="contained" fullWidth type="submit">
                Submit
                </Button>
            </form> */}
    </Container>
  );
}
