function isAnagram(str1, str2) {
    // Your implementation
    
    let modifyStr1 = str1.toLowerCase().replace(/[^a-zA-Z]/g, '')
    let modifyStr2 = str2.toLowerCase().replace(/[^a-zA-Z]/g, '')

    return modifyStr1.split('').sort().join('') === modifyStr2.split('').sort().join('')
}

//For the purpose of user debugging.
isAnagram("dormitory!!", "dirty room");
module.exports = isAnagram