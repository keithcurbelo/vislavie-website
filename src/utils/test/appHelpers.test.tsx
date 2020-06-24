import {
  formatPhoneNumber,
  isValidEmail,
  isValidPhoneNumber,
} from "../appHelpers";

test("Phone number formatting", () => {
  expect(formatPhoneNumber("5555551234")).toBe("(555) 555-1234");
  expect(formatPhoneNumber("5555551234", true)).toBe("5555551234");
  expect(formatPhoneNumber("(555) 555-1234", true)).toBe("5555551234");
  expect(formatPhoneNumber("(555) 555-1234", true)).not.toBe("(555) 555-1234");
});

describe("Form tests", () => {
  it("validates emails", () => {
    let good_email = "fake@example.com";
    let bad_email = "fake@email";
    expect(isValidEmail(good_email)).toBe(true);
    expect(isValidEmail(bad_email)).toBe(false);
    expect(isValidEmail(bad_email)).not.toBe(true);
  });
  it("validates phone numbers", () => {
    let good_phone_number = "5555551234";
    let bad_phone_number = "00";
    expect(isValidPhoneNumber(good_phone_number)).toBe(true);
    expect(isValidPhoneNumber(bad_phone_number)).toBe(false);
    expect(isValidPhoneNumber(bad_phone_number)).not.toBe(true);
  });
});
