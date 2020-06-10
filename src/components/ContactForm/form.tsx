import React, { useLayoutEffect, useState } from "react";
import { Container, Form, Col, Button } from "react-bootstrap";
// import { withFormik, FormikProps, FormikErrors } from "formik";
// import { FormValues, OtherProps } from "./interface";
// import ReCAPTCHA from "react-google-recaptcha";
import Input, { Select } from "./input";
import Services from "./services.json";

// const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
const InnerForm: React.FC = () => {
  //   console.log("props", props);
  //Prop variables
  //   const { values, touched, errors, isSubmitting } = props;
  //Prop methods
  //   const { handleSubmit } = props;
  //local variables
  //Local methods
  //   const handleChangeName = (e: any) => (values.name = e.target.value);
  const handleChangeName = (e: any) => console.log("name", e.target.value);
  //   const handleChangeEmail = (e: any) => (values.email = e.target.value);
  const handleChangeEmail = (e: any) => console.log("email", e.target.value);
  const handleSelectService = (e: any) =>
    console.log("service", e.target.value);
  const submit = (e: any) => {
    e.preventDefault();
    console.log("submit", e.target[0].value);
  };

  //local components
  const SelectBtn = () => (
    <Select id="services" placeholder="Service" name="services">
      {Services.service_list.map((el, i) => (
        <option key={i}>{el.label}</option>
      ))}
    </Select>
  );

  const FullNameInput = () => (
    <Input
      id="name"
      placeholder="Full name"
      name="name"
      onChange={handleChangeName}
    />
  );
  const EmailInput = () => (
    <Input
      id="email"
      placeholder="Email"
      name="email"
      onChange={handleChangeEmail}
    />
  );

  const SubmitBtn = () => (
    <Form.Row>
      <Col xs={1} sm={4} />
      <Col className="text-right">
        <Button
          variant="dark"
          type="submit"
          //   onClick={handleSubmit}
          //   disabled={
          //     isSubmitting ||
          //     !!(errors.name && touched.name) ||
          //     !!(errors.email && touched.email)
          //   }
        >
          Submit
        </Button>
      </Col>
      <Col xs={1} sm={4} />
    </Form.Row>
  );

  return (
    <Form onSubmit={submit}>
      <FullNameInput />
      {/* <Input
        id="name"
        placeholder="Full name"
        name="name"
        onChange={handleChangeName}
      /> */}
      {/* {errors.name && <div>{errors.name}</div>} */}
      <EmailInput />
      {/* <Input
        id="email"
        placeholder="Email"
        name="email"
        onChange={handleChangeEmail}
      /> */}
      {/* {errors.email && <div>{errors.email}</div>} */}
      <SelectBtn />
      <SubmitBtn />
    </Form>
  );
};

/* 
| --------------------------------------------------------------------------------------------
|  Formik wrapper
|  *****************************************
|  This is a wrapper function where you can pass form validation functions and handle form changes/submission.
|  The component receives all values from Redux state and React-Router.
| --------------------------------------------------------------------------------------------
*/
// const ContactForm = withFormik({
//   //   mapPropsToValues: () => ({ name: "", email: "", services: {} }),
//   validate: (values: FormValues) => {
//     let errors: FormikErrors<FormValues> = { name: "", email: "" };
//     if (!values.name) errors.name = "Required";
//     if (!values.email) errors.email = "Required";
//     // if (values.id && values.id.length < 2) {
//     //   errors.id = "ID must be more than 1 character";
//     // }
//     // if (values.id && values.id.length >= 2) {
//     //   delete errors.id;
//     // }
//     // if (!values.name) errors.name = "Required";
//     // if (values.name && values.name.length < 2) {
//     //   errors.name = "Name must be more than 1 character";
//     // }
//     // if (values.name && values.name.length >= 2) {
//     //   delete errors.name;
//     // }

//     return errors;
//   },

//   handleChange: ({ values }: any, { field }: any) => {
//     console.log(values);
//     console.log(field);
//   },

//   handleSubmit: (
//     { name, email, services }: FormValues,
//     { props, setSubmitting, setErrors }
//   ) => {
//     // if (values && values.id && values.name) {
//     // }
//     return console.log("values", name, email, services);
//     // console.log("props rest", rest);
//   },
//   //   validateOnBlur: false,
//   //   submitError: false,
//   displayName: "Contact Form",
// })(InnerForm);

// export default ContactForm;
export default InnerForm;
