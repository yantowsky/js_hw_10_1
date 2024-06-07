const user = {
    name: 'Eugene',
    age: 45,
    city: 'Dnipro',
    getShowInfo() {
        return `Name: ${this.name}, Age: ${this.age}, City: ${this.city}`;
    }
}

console.log(user.getShowInfo());