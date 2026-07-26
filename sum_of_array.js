const sumArray = (arr) => {
  let sum=0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
};

// using reduce method
// const sumArray = (arr) => {
//   return arr.reduce((sum, num) => sum + num, 0);
// };

console.log(sumArray([1, 2, 3, 4, 5]));
