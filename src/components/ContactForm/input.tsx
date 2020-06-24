import React, { FunctionComponent } from "react";
import { Form, Col } from "react-bootstrap";
import { InputProps } from "./interface";

const Input: FunctionComponent<InputProps> = ({ text, key, ...props }) => (
  <Form.Row>
    <Col xs={1} sm={4} />
    <Form.Group as={Col}>
      {/* <Form.Label>Email address</Form.Label> */}
      <Form.Control
        key={key ? key.toString() : key}
        onChange={props.onChange}
        value={props.value}
        {...props}
      />
      <Form.Text className="text-muted">{text}</Form.Text>
    </Form.Group>
    <Col xs={1} sm={4} />
  </Form.Row>
);

export const Select: FunctionComponent<InputProps> = ({ text, ...props }) => (
  <Form.Row>
    <Col xs={1} sm={4} />
    <Form.Group as={Col}>
      {/* <Form.Label>Email address</Form.Label> */}
      <Form.Control
        as="select"
        onChange={props.onChange}
        value={props.value}
        autoComplete={props.autoComplete}
        {...props}
      >
        {props.children}
      </Form.Control>
      <Form.Text className="text-muted">{text}</Form.Text>
    </Form.Group>
    <Col xs={1} sm={4} />
  </Form.Row>
);

export default Input;
