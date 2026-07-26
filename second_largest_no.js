const secondLargestNumber = (arr) => {
  let max = arr[0];
  let secondMaxNumber = -Infinity;

  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }

  for (let num of arr) {
    if (num !== max && num > secondMaxNumber) {
      secondMaxNumber = num;
    }
  }

  return secondMaxNumber;
};

console.log(secondLargestNumber([6, 3, 8, 2, 8, 3]));
