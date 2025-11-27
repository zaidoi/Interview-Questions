function sum(...args) {
    // Your implementation
    let total = 0
    for (let item of args) {
        total+= item
    }
    console.log(total)
    return total
}

//For the purpose of user debugging.
sum(5,-5,10,20);

module.exports = sum