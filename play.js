const person = {
    name: 'sujith',
    age: 30,
    greet() {
        console.log('Hi, I am ' + this.name)
    }
};

const hobbies = ['football', 'parkour', 'drive'];
hobbies.push('Programming');
//console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
//console.log(hobbies)

//Spread Operator - Copy/Move Array
const copiedArray = [...hobbies];

// Rest do action on each element
const copiedRestArray = (...args) => {
    return args;
}
console.log(copiedRestArray(1,2,3,4,4))
