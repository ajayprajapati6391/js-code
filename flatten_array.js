const flattenArray = (arr, result = []) => {
  for (let num of arr) {
    if (Array.isArray(num)) flattenArray(num, result);
    else result.push(num);
  }
  return result;
};

console.log(flattenArray([1, [2, [3, 4], 5]]));
