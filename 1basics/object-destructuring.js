const person = {
    name: 'Yusuf',
    age: 40,
    hobbies: true
}

const animal = {
    breed: 'labrador',
    type: 'dog'
}

// Object destructuring
// It pulls the property name from the incoming object and prints the value
const printName = ({ name} ) => console.log(name)
printName(person) // outputs 'Yusuf
printName(animal) // outputs 'undefined'

// Property de-structuring
const {name, age} = person
console.log(name) //pulls the name property from the person and prints it
console.log(age)  //pulls the age property from the person and prints it 

// Array de-structuring
const hobbies = ['Sports','Cooking']
let [hobby1, hobby2] = hobbies
console.log(hobby1) 
console.log(hobby2)