export function required(input: string) {
  if (input == null || input.length == 0) return "Required";

  const hasValue = input.toString().replace(/^\s+/, "").replace(/\s+$/, "").length > 0;
  return hasValue ? null : "Required";
}

const emailRegEx = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@((?=[a-z0-9-]{1,63}\.)(xn--)?[a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,63}$/i;
export function isEmail(input: string) {
  return emailRegEx.test(input) ? null : "Not a valid Email Address";
}

export function isNumber(input: string) {
  const isNumeric = !isNaN(<any>input - parseFloat(input));
  return isNumeric ? null : "Not a valid number";
}

export function isInteger(input: string) {
  const isInt = parseFloat(input) - parseInt(input) === 0;
  return isInt ? null : "Not a valid integer";
}

const urlRegEx = /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)$/;
export function isUrl(input: string) {
  return urlRegEx.test(input) ? null : "Not a valid URL";
}