export const getCurrentYear = () => {
  let date = new Date();
  return date.getFullYear();
};

export const formatDataEntry = (arr: Array<any>) => ({
  name: arr[0].value,
  email: arr[1].value,
  services: arr[2].value,
});
