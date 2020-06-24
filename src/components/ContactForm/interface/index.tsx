export interface FormValues {
  name?: string;
  email?: string;
  services?: Array<any>;
}

export interface OtherProps {
  errors?: any;
  className?: string;
  name?: string;
  text?: string;
  // value?: string | Array<any> | number;
  handleChange?: (param: any) => void;
  handleSubmit?: (param: any) => void;
  submitError?: boolean;
  children?: JSX.Element;
}

export interface InputProps {
  id: string;
  placeholder: string;
  key?: string | number;
  className?: string;
  autoComplete?: string;
  value?: string | Array<any> | number;
  onChange?: (param: any) => void;
  name?: string;
  text?: string;
  type?: string;
  custom?: boolean;
  children?: React.ReactNode | string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone_number: string;
  services: Array<any>;
}
export interface ComposeEmailProps {
  form: ContactForm;
}
