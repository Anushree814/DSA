/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (Object.hasOwn(obj, nums[i])) {
      obj[nums[i]]++;
    } else {
      obj[nums[i]] = 1;
    }
  }
  console.log(obj);
  const no=nums.sort((a, b) => {
    console.log(a, b);
    if(a!==b){
    if (obj[a] !== obj[b]) {
      return a - b;
    } else return b - a;
}else return b-a
  });
  
//   let r = [];
//   for (let i of v) {
//     console.log(i);
//     let j = obj[i];
//     for (let k = 0; k < j; k++) {
//       r.push(i);
//     }
//   }
  console.log(no);
  //return r;
};

frequencySort([1,1,2,2,2,3])
