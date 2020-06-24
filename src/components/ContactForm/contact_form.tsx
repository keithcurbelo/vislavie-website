import React, { useRef, useState, useEffect } from "react";
import { Form, Col, Button } from "react-bootstrap";
import Select from "react-select";

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
import Services from "./services.json";

const ContactForm: React.FC = () => {
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
  const [hasCompletedForm, setHasCompletedForm] = useState(false);
  const [hasCompletedReCAPTCHA, setHasCompletedReCAPTCHA] = useState(false);
  // let temp = recaptchaRef.current ? recaptchaRef.current.getValue() : null;
  // console.log("ref", temp);

  //Local methods
  useEffect(() => {
    if (fullname && hasValidEmail && hasValidPhoneNumber)
      setHasCompletedForm(true);
    else setHasCompletedForm(false);
  });
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
    if (isValidEmail(email_input)) setHasValidEmail(true);
  };
  const handleChangePhoneNumber = (e: any) => {
    e.preventDefault();
    let phonenumber_input = e.target.value;
    setPhonenumber(phonenumber_input);
    if (isValidPhoneNumber(phonenumber_input)) {
      console.log("phone number", phonenumber_input);
      let formatted_number = formatPhoneNumber(phonenumber_input);
      setPhonenumber(formatted_number);
      setHasValidPhoneNumber(true);
    }
  };

  const handleSelectService = (e: any) => {
    let services_input = e.target.value;
    setServices(services_input);
    if (services_input) setHasSelectedService(true);
  };

  const handleReCAPTCHA = (val: any) => {
    console.log("recapturjsahdflk", val);
    if (val) setHasCompletedReCAPTCHA(true);
    else setHasCompletedReCAPTCHA(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let formData = formatDataEntry(e.target);
    let request = new Request(formData);
    let send = request.sendFormToAgent().then((ret) => ret);
    console.log("submit", send);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Col xs={1} sm={4} />
        <Form.Group as={Col}>
          {/* Name */}
          <Form.Control
            id="name"
            placeholder="Full name"
            name="name"
            value={fullname}
            onChange={(e) => handleChangeName(e)}
            autoComplete="name"
          />
          {/* <Form.Text className="text-muted">{text}</Form.Text> */}
        </Form.Group>
        <Col xs={1} sm={4} />
      </Form.Row>
      <Form.Row>
        <Col xs={1} sm={4} />
        <Form.Group as={Col}>
          {/* Phone number */}
          <Form.Control
            id="phone"
            type="tel"
            placeholder="Phone number"
            name="phone"
            maxLength={10}
            value={phonenumber}
            onChange={handleChangePhoneNumber}
            autoComplete="tel"
          />
          {/* <Form.Text className="text-muted">{text}</Form.Text> */}
        </Form.Group>
        <Col xs={1} sm={4} />
      </Form.Row>
      <Form.Row>
        <Col xs={1} sm={4} />
        <Form.Group as={Col}>
          {/* Email */}
          <Form.Control
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
            autoComplete="email"
          />
          {/* <Form.Text className="text-muted">{text}</Form.Text> */}
        </Form.Group>
        <Col xs={1} sm={4} />
      </Form.Row>
      <Form.Row>
        <Col xs={1} sm={4} />
        <Form.Group as={Col}>
          {/* <Form.Label>Email address</Form.Label> */}
          <Select
            key={1}
            as="select"
            id="services"
            placeholder="Service"
            name="services"
            options={Services.service_list}
            isMulti
            isClearable
          />
          {/* <Form.Text className="text-muted">{text}</Form.Text> */}
        </Form.Group>
        <Col xs={1} sm={4} />
      </Form.Row>
      {/* Submit button */}
      <Form.Row>
        <Col xs={1} sm={4}></Col>
        <Col className="text-right">
          {hasCompletedForm ? (
            <ReCAPTCHA
              key={4}
              ref={recaptchaRef}
              sitekey="6LforKIZAAAAAHb3HJMM6eXvqjPmsL85a-sFGCl4"
              onChange={handleReCAPTCHA}
              theme="dark"
              size="compact"
            />
          ) : (
            <React.Fragment></React.Fragment>
          )}
          <br />
          <Button
            variant="dark"
            type="submit"
            disabled={!hasCompletedReCAPTCHA}
            block
          >
            Submit
          </Button>
        </Col>
        <Col xs={1} sm={4} />
      </Form.Row>
    </Form>
  );
};

export default ContactForm;