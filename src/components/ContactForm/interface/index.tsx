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
  handleChange?: (param: any) => void;
  handleSubmit?: (param: any) => void;
  submitError?: boolean;
  children?: JSX.Element;
}

export interface InputProps {
  id: string;
  placeholder: string;
  className?: string;
  onChange?: (param: any) => void;
  name?: string;
  text?: string;
  type?: string;
  custom?: boolean;
  children?: React.ReactNode;
}
