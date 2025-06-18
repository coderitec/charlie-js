function handleScoreIncrease(score){
    return score + 10
}

// console.log(handleScoreIncrease(12))
// console.log(handleScoreIncrease(2))
// console.log(handleScoreIncrease(60))
// console.log(handleScoreIncrease(1230))

function handleGreeting(){
    return 'Good morning'
}

function handleAddition(num1, num2=0){
    const result = num1 + num2
    console.log(result)
}

handleAddition(12, 7)
handleAddition(12, 70)
handleAddition(3,6)
handleAddition(3)

function generateRandomNumber(val=10){
    const random = Math.random()*val
    console.log(Math.floor(random))
}

generateRandomNumber()
generateRandomNumber(100)
generateRandomNumber(1000)


const handleStrCapitalize = (str) => {
    str = str.toLowerCase()
    let firstChar = str.charAt(0).toUpperCase()
    str = str.replace(str[0], firstChar)
    return str
}

const handlePower = (num, power) => num ** power

console.log(handlePower(4,2))

console.log(handleStrCapitalize('frontend'))
console.log(handleStrCapitalize('production'))
console.log(handleStrCapitalize('EncapsuLATION'))

remainder(5, 5)
remainder(15, 17)
remainder(200, 150)

function remainder(val, divider) {
    console.log(val % divider)  
}

const random = function(){
    return Math.random()
}
