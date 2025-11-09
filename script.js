function chunkArray(arr, n) {
    // Your implementation
    if (arr.length === 0) return [];
let result = []
  for (let i = 0; i < arr.length; i += n){
    result.push(arr.slice(i,i+n))
  }
       return result
    
}

//For the purpose of user debugging.
//pass your array and chunk size in function call
chunkArray([1, 2, 3], 5);
module.exports = chunkArray
