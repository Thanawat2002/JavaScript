let str = "Hello"

// does the same as
// for (let char of str) console.log(char)

let iterator = str[Symbol.iterator]()

while (true) {
    let result = iterator.next()
    if (result.done) break
    console.log(result.value)
}

console.log("\n")

for (let char of "test") {
    // triggers 4 times: once for each character
    console.log(char) // t, then e, then s, then t
}