const arr = [67, 45, '20', '23', 4, 6, '60'];
const mixedSum = (arr = []) => {
   let sum = 0;
   for(let i = 0; i < arr.length; i++){
      const mix = arr[i];
      sum += +mix;
   };
   return sum;
};
console.log(mixedSum(arr));