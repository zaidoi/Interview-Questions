function countVowels(str) {
    // Your implementation
    let count = 0;
    let vowelarr = str.trim().split('')
    for (let i = 0; i < vowelarr.length; i++){
        if (vowelarr.length === 0) return 0
        if (vowelarr[i] == 'e' || vowelarr[i] == 'i' || vowelarr[i] == 'o' || vowelarr[i] == 'u' || vowelarr[i] == 'E' || vowelarr[i] == 'I' || vowelarr[i] == 'O' || vowelarr[i] == 'U' || vowelarr[i] == 'a' || vowelarr[i] == 'A') {
            count++
        } 
    }
  return count
}

//For the purpose of user debugging.
countVowels("hello");

module.exports = countVowels