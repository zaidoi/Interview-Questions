function capitalizeWords(sentence) {
    // Your implementation
    if (!sentence) return "";
    let sent = sentence.trim().toLowerCase().split(/\s+/)
    let result = sent.map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
    return result
}
//For the purpose of user debugging.
capitalizeWords("");
module.exports = capitalizeWords