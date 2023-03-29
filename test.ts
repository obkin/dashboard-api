const a: number | string = 1;

let b: number | boolean | string = '';
    b = 5;
    b = true;

// ---------

type ID = number | string | boolean;

function printA(id: ID) {
    if (typeof id == 'number') {
        console.log(id * 10); // number
    } else if (typeof id === 'string') {
        console.log(id.toUpperCase()); // string
    } else {
        console.log(id); // boolean
    }
}

// ---------

interface User {
    name: string;
    age: number;
}

function helloUser(userOrUsers: string | string[] | User) {
    if (Array.isArray(userOrUsers)) {
        userOrUsers.map(user => {
            return console.log(user + ', hello!');
        });
    } else if (typeof userOrUsers == 'string') {
        return userOrUsers + ', hello!';
    } else {
        return userOrUsers.name + ', hello!'
    }
}

console.log(helloUser({ name: 'John', age: 20 }));
helloUser(['Wolfgang', 'Katty', 'Chris']);
console.log(helloUser('Jenny'));


// ---------

type user = string | string[] | User;

function getUserName(user: user) {
    if (Array.isArray(user)) {
        return user;
    } else if (typeof user == 'string') {
        return user;
    } else {
        return user.name;
    }
}