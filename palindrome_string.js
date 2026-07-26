const palindomeString = (str) => {
  let st = "";
  for (let i = str.length - 1; i >= 0; i--) {
    st += str[i];
  }

  return st === str
    ? "The string is a palindrome."
    : "The string is not a palindrome.";
};

console.log(palindomeString("madam"));
