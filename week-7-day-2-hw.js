//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
console.log(typeof person3)
console.log(typeof person3["shakes"]==='object')

const favFood = (aDict) => {
    for (key in aDict) {
        if (typeof aDict[key] === 'object' && typeof aDict[key][0] === 'object') {
            console.log(`My favorite ${key} are:`)
            for (keys in aDict[key][0]) {
                console.log(`${keys}: ${aDict[key][0][keys]}`)
            }
        } else {
            console.log(`My favorite types of ${key} are ${aDict[key]}`)
        }
    }
}

favFood(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(age, name) {
    this.age = age
    this.name = name

    // Use an arrow to create the printInfo method
    this.printInfo = () => {
        console.log(`Hi, my name is ${name} and I am ${age} years old.`)
    }

    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age   
    this.addAge = (() => {
        return () => {
            this.age++
            console.log(`Added 1 year to ${this.name}'s age.`)
        }

    })()
}

let person1 = new Person(31, "David")
person1.printInfo()
let person2 = new Person(9000, "Shoha")
person2.printInfo()
console.log("WHAT!? 9000?!? There's no WAY that can be right!")
person1.addAge()
person1.addAge()
person1.addAge()
console.log(`${person1.name} is now ${person1.age} years old`)



// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const pbf = (astring) => {
    return new Promise((res, rej)=>{
        if (astring.length > 10) {
            res('Big word')
        }
        else {
            rej('Small Number. Tough')
        }
    })
}

const getResult = async () => {
    let x = []
    try { // try and catch works the same way as .then and .catch
        x = await pbf(x) // wait for this promise to be fulfilled. This needs to be wrapped in a function, so we made getResult
    }
    catch (error){
        x = error
    }
    console.log(x)
};
getResult()



// =============Code Wars Problem #1 ============//
// Completed Problem
// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
const past = (h, m, s) => {
    return (h*3600000 + m*60000 + s*1000)
}


// =============Code Wars Problem #2 ============//
// Not completed before today
// https://www.codewars.com/kata/563b74ddd19a3ad462000054/train/javascript
const stringy = (size) => {
    let astring = ''
    for (let i = 0; i < size; i++){
        if (i%2===0){
            astring += '1'
        }
        else {
            astring += '0'
        }
    }
    return astring
}