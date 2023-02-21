let N1 = "Miklós"
let N2 = "Ilián"

console.log("A nevem:",N1,N2)

console.log("#################################################################################################################################")

let a = new Date()
console.log("A mostani dátum:", a)

console.log("##################################################################################################################################")
var num1 = 18
var num2 = 20
if (num1+num2>10)
    console.log("A számok összege nagyobb mint 10")
else 
console.log("A számok összege kisebb mint 10")
console.log(`A megadott két szám: ${num1} és ${num2}, ezeknek az összege:${num1 + num2}`)

console.log("##################################################################################################################################")
var ts = []
var i = 0
var tb = []

for (let i = 3; i <= 12; i++) {
    tb.push(i * i)
   }

function asd(nums){
    for (var i = 0; i < nums.length; i++) {
        if(nums[i]%2==0) ts.push(nums[i])
    }
    return ts
}
var ok = asd(tb);
console.log(tb)
console.log(ts)

console.log("##################################################################################################################################")

var npido = true
var ttido = true
if (npido = true)
    console.log("Napos az idő!")
else
    console.log("Nem napos az idő...")

if (ttido = true)
    console.log("Tiszta az idő!")
else
    console.log("Nem tiszta az idő...")

if (npido,ttido=true)
    console.log(`Ha napos az idő ami ${npido} és tiszta az idő ami ${ttido} akkor hétvége van!`)




console.log("##################################################################################################################################")
