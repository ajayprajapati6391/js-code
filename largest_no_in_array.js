const largest = (arr) => {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) max = num;
  }
  return max;
};

console.log(largest([7, 12, 3, 4, 5]));
