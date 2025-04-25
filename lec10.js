//  MEMORY kecture 10

// stack and heap memory

// primitive me stack memory
// non primitive me heap memory

let myName = "vikrant singh"
let yourName = myName
yourName = "nisu"
console.log(myName)
console.log(yourName)


let userOne = {
    email: "vikrantsinghan5@gmail.com",
    upi: 'uscdsv'

}
let userTwo ={...userOne};
userTwo.email="nisu@"
console.log(userOne.email)
console.log(userTwo.email)