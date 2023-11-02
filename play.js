const person = {
    name: 'sujith',
    age: 30,
    greet() {
        console.log('Hi, I am ' + this.name)
    }
};


const printName = ({ greet }) => {
    console.log(greet())
}

printName(person)