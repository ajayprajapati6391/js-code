const fibonacci = (n) => {
  let num1 = 0,
    num2 = 1;
  for (let i = 0; i < n; i++) {
    console.log(num1);
    let sum = num1 + num2;
    num1 = num2;
    num2 = sum;
  }
};

fibonacci(10);
