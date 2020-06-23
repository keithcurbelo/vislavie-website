export const getCurrentYear = () => {
  let date = new Date();
  return date.getFullYear();
};

export const formatDataEntry = (arr: Array<any>) => ({
  name: arr[0].value,
  email: arr[1].value,
  services: arr[2].value,
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
    if (rawVal) return phone_number.replace(/[()-\s]/g, "");
    return `(${formatArr[1]}) ${formatArr[2]}-${formatArr[3]}`;
  }

  return phone_number.replace(/[()-\s]/g, "");
};
