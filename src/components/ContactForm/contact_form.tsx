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
  const [services, setServices] = useState(null);
  // const [otherServices, setOtherServices] = useState("");
  const [hasValidEmail, setHasValidEmail] = useState(false);
  const [hasValidPhoneNumber, setHasValidPhoneNumber] = useState(false);
  const [hasSelectedService, setHasSelectedService] = useState(false);
  // const [showInputOther, setShowInputOther] = useState(false);
  const [hasCompletedForm, setHasCompletedForm] = useState(false);
  const [hasCompletedReCAPTCHA, setHasCompletedReCAPTCHA] = useState(false);
  const [showResponseMessage, setShowResponseMessage] = useState(false);
  const [responseMessage, setResponseMessage] = useState({
    color: "",
    message: "",
  });

  // let temp = recaptchaRef.current ? recaptchaRef.current.getValue() : null;
  // console.log("ref", temp);

  //Local methods
  useEffect(() => {
    if (fullname && hasValidEmail && hasValidPhoneNumber && hasSelectedService)
      setHasCompletedForm(true);
    else setHasCompletedForm(false);
  }, [fullname, hasValidEmail, hasValidPhoneNumber, hasSelectedService]);
  const handleChangeName = (e: any) => {
    // e.preventDefault();
    let name_input = e.target.value;
    setFullname(name_input);
  };
  //   const handleChangeEmail = (e: any) => (values.email = e.target.value);
  const handleChangeEmail = (e: any) => {
    // e.preventDefault();
    let email_input = e.target.value;
    setEmail(email_input);
    if (isValidEmail(email_input)) setHasValidEmail(true);
  };
  const handleChangePhoneNumber = (e: any) => {
    // e.preventDefault();
    let phonenumber_input = e.target.value;
    setPhonenumber(phonenumber_input);
    if (isValidPhoneNumber(phonenumber_input)) {
      let formatted_number = formatPhoneNumber(phonenumber_input);
      setPhonenumber(formatted_number);
      setHasValidPhoneNumber(true);
    }
  };

  const handleSelectService = (val: any) => {
    let services_input = val;
    setServices(services_input);
    if (services_input && services_input.length > 0) {
      // setShowInputOther(val.some((option: any) => option.label === "Other"));
      setHasSelectedService(true);
    } else setHasSelectedService(false);
  };

  // const handleChangeInputOther= (e:any)=>{
  //   setOtherServices(e.target.value)
  // }

  const handleReCAPTCHA = (val: any) => {
    if (val) setHasCompletedReCAPTCHA(true);
    else setHasCompletedReCAPTCHA(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let formData = {
      fullname,
      phonenumber,
      email,
      services,
    };
    let formatted_entries = formatDataEntry(formData);
    let request = new Request(formatted_entries);
    let send = request.sendFormToAgent().then((ret) => ret);
    send
      .then((resp: any) => {
        setShowResponseMessage(true);
        setResponseMessage({
          color: "black",
          message: "Thank you! We have received your request.",
        });
      })
      .catch((err: any) => {
        setShowResponseMessage(true);
        setResponseMessage({
          color: "red",
          message: "Oops! Something went wrong.",
        });
      });
    // console.log("submit", request.getFormDetails());
  };

  return showResponseMessage ? (
    <h2 className="text-center" style={{ color: responseMessage["color"] }}>
      {responseMessage["message"]}
    </h2>
  ) : (
    <Form onSubmit={handleSubmit}>
      {/*Full Name */}
      <Form.Row>
        <Col xs={1} sm={4} />
        <Form.Group as={Col}>
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
      {/* Phone number */}
      <Form.Row>
        <Col xs={1} sm={4} />
        <Form.Group as={Col}>
          <Form.Control
            id="phone"
            type="tel"
            placeholder="Phone number"
            name="phone"
            maxLength={14}
            value={phonenumber}
            onChange={handleChangePhoneNumber}
            autoComplete="tel"
          />
          {/* <Form.Text className="text-muted">{text}</Form.Text> */}
        </Form.Group>
        <Col xs={1} sm={4} />
      </Form.Row>
      {/* Email */}
      <Form.Row>
        <Col xs={1} sm={4} />
        <Form.Group as={Col}>
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
      {/* Select Service */}
      <Form.Row>
        <Col xs={1} sm={4} />
        <Form.Group as={Col}>
          <Select
            key={1}
            as="select"
            id="services"
            placeholder="Service"
            name="services"
            value={services}
            options={Services.service_list}
            onChange={handleSelectService}
            isMulti
            isClearable
            theme={(theme) => ({
              ...theme,
              borderRadius: 4,
              colors: {
                ...theme.colors,
                primary25: "#d7be69",
                primary: "black",
              },
            })}
          />
          {/* <Form.Text className="text-muted">{text}</Form.Text> */}
        </Form.Group>
        <Col xs={1} sm={4} />
      </Form.Row>
      {/* other option */}
      {/* {showInputOther ? (
      <Form.Row>
        <Col xs={1} sm={4} />
        <Form.Group as={Col}>
          <Form.Control
            id="other"
            type="input"
            placeholder=""
            name="other"
            value={otherServices}
            onChange={handleChangeInputOther}
          />
        </Form.Group>
        <Col xs={1} sm={4} />
      </Form.Row>
      ) 
      : (<></>)} */}
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
