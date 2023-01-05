const names = ['Justin', 'Sarah', 'Christopher']

//while loop
console.log('-- while loop --')
let index = 0
while (index < names.length) {
    const name = names[index]
    console.log(name)
    index++
}

//for loop
console.log('-- for loop --')
for (let index = 0; index < names.length; index++) {
    const name = names[index]
    console.log(name)
}

//for of loop
console.log('-- for of loop --')
for (const name of names) {
    console.log(name)
}

//do while loop **sniplet