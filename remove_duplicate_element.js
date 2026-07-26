const removeDuplicateElement = (arr1) => {
  const arr2 = [];
  for (let i = 0; i < arr1.length; i++) {
    let found = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        found = true;
        break;
      }
    }
    if (!found) arr2.push(arr1[i]);
  }
  return arr2;
};

console.log(removeDuplicateElement([1, 1, 1, 3, 2, 4, 5]));
