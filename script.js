function formLargestNumber(arr) {
    let nums = arr.map(String);
  
    nums.sort((a, b) => (b + a) - (a + b));
  
    let result = nums.join('');
  
    // Edge case: all zeros
    return result[0] === '0' ? '0' : result;
  }
  
  const input = [3, 30, 34, 5, 9];
  console.log(formLargestNumber(input));
  module.exports = formLargestNumber;
  