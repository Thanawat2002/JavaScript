function reverseString(value) {
    let reverseString = ""

    value.split("").forEach((char) => {
        reverseValue = char + reverseValue;
    })

    return reverseValue;
}

console.log(reverseString("Reverse Me"));