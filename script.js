function reverseWords(sentence) {
    // Your implementation
    if(sentence.length ===0 ) return ''
    let str = sentence.split('').reverse().join('')
    let str2 = str.split(' ').reverse().join(' ')
    return str2
}

//For the purpose of user debugging.
reverseWords("Hello World");

module.exports = reverseWords