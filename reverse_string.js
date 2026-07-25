const reverseString = (str) => {
  let reverse = "";
  let i = str.length - 1;
  while (i >= 0) {
    reverse += str[i];
    i--;
  }
  return reverse;
};

console.log(reverseString("hello"));
