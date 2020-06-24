import React, { useRef, useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import Request from "./ComposeEmail";

import {
  formatDataEntry,
  isValidEmail,
  isValidPhoneNumber,
  formatPhoneNumber,
} from "../../utils/appHelpers";
// import { withFormik, FormikProps, FormikErrors } from "formik";
// import { FormValues, OtherProps } from "./interface";
import ReCAPTCHA from "react-google-recaptcha";
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
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [fullname, setFullname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [services, setServices] = useState("");
  const [hasValidEmail, setHasValidEmail] = useState(false);
  const [hasValidPhoneNumber, setHasValidPhoneNumber] = useState(false);
  const [hasSelectedService, setHasSelectedService] = useState(false);
  const [hasCompletedReCAPTCHA, setHasCompletedReCAPTCHA] = useState(false);
  // let temp = recaptchaRef.current ? recaptchaRef.current.getValue() : null;
  // console.log("ref", temp);

  //Local methods
  //   const handleChangeName = (e: any) => (values.name = e.target.value);
  const handleChangeName = (e: any) => {
    // e.preventDefault();
    let name_input = e.target.value;
    setFullname(name_input);
    console.log("name", name_input);
  };
  //   const handleChangeEmail = (e: any) => (values.email = e.target.value);
  const handleChangeEmail = (e: any) => {
    // e.preventDefault();
    let email_input = e.target.value;
    setEmail(email_input);
    console.log("email", email_input);
    // if (isValidEmail(email_input)) setHasValidEmail(true);
  };
  const handleChangePhoneNumber = (e: any) => {
    e.preventDefault();
    let phonenumber_input = e.target.value;
    setPhonenumber(phonenumber_input);
    // if (isValidPhoneNumber(phonenumber_input)) {
    console.log("phone number", phonenumber_input);
    // formatPhoneNumber(phonenumber_input);
    // setHasValidPhoneNumber(true);
    // }
  };

  const handleSelectService = (e: any) => {
    let services_input = e.target.value;
    setServices(services_input);
    if (services_input) setHasSelectedService(true);
  };

  const handleReCAPTCHA = (val: any) => {
    console.log("recapturjsahdflk", val);
    // if (val) setHasCompletedReCAPTCHA(true);
  };

  const submit = (e: any) => {
    e.preventDefault();
    let formData = formatDataEntry(e.target);
    let request = new Request(formData);
    let send = request.sendFormToAgent().then((ret) => ret);
    console.log("submit", send);
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
      key={"11"}
      id="name"
      placeholder="Full name"
      name="name"
      value={fullname}
      onChange={(e) => handleChangeName(e)}
      autoComplete="name"
    />
  );
  const PhoneInput = () => (
    <Input
      key={"12"}
      id="phone"
      type="tel"
      placeholder="Phone number"
      name="phone"
      value={phonenumber}
      onChange={handleChangePhoneNumber}
      autoComplete="tel"
    />
  );
  const EmailInput = () => (
    <Input
      key={"13"}
      id="email"
      type="email"
      placeholder="Email"
      name="email"
      value={email}
      onChange={handleChangeEmail}
      autoComplete="email"
    />
  );

  const FormSecurity = () => (
    <ReCAPTCHA
      key={4}
      ref={recaptchaRef}
      sitekey="6LforKIZAAAAAHb3HJMM6eXvqjPmsL85a-sFGCl4"
      onChange={handleReCAPTCHA}
      theme="dark"
      size="normal"
    />
  );
  const SubmitBtn = () => (
    <Form.Row key={5}>
      <Col xs={1} sm={4}></Col>
      <Col className="text-right">
        <FormSecurity />
        <br />
        <Button variant="dark" type="submit" disabled={!hasCompletedReCAPTCHA}>
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
      <PhoneInput />
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
