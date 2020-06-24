export const getCurrentYear = () => {
  let date = new Date();
  return date.getFullYear();
};

export const formatDataEntry = (obj: any) => ({
  name: obj.fullname,
  phone_number: obj.phonenumber,
  email: obj.email,
  services:
    obj.services && obj.services.length > 0
      ? obj.services.map((srv: any) => srv.label)
      : [],
});

export const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isValidPhoneNumber = (phone_number: string) => {
  const regex = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/;
  return regex.test(phone_number);
};

export const formatPhoneNumber = (
  phone_number: string,
  rawVal: boolean = false
) => {
  phone_number = phone_number.toString();
  const regex = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/;
  const formatArr = phone_number.match(regex) || [];

  if (regex.test(phone_number)) {
    return rawVal
      ? phone_number.replace(/[()-\s]/g, "")
      : `(${formatArr[1]}) ${formatArr[2]}-${formatArr[3]}`;
  }

  return phone_number.replace(/[()-\s]/g, "");
};
