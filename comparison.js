let mathScore = 50
let frenchScore = 12

const promoted = mathScore >= 50 && frenchScore > 50
const reseat = mathScore < 50 || frenchScore < 50

console.log("Is the student promoted?", promoted)
console.log("Does the student need to reseat?", reseat)