// The spread operator pulls out the elements either from an array or an object 
// The rest operator merges the elements.
// They both look the same and depending on the context, it is either spread or rest.
// So if we are merging, it is rest. If it is extracting, its spread 

// For e.g. if it is surrounded by [], it will be considered an array
// For e.g. if it is surrounded by {}, it will be considered an object

// ################# Spread operator ##################
const hobbies = ['Sports', 'Cooking']
const copiedArray = [...hobbies]
console.log(copiedArray) // here the copiedArray is of type array

const person = { name: 'Yusuf', age: 40}
let personData = {...person} //here the personData is of type object
console.log(personData)

// ################# Rest operator ##################
const toArray = (...args) => { return args }
console.log(toArray(1,2,3,4))