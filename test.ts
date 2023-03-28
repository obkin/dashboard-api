
let a: string | number = 5;
    a = 'str';

// ---

function printVar(arg: string | number) {
    if (typeof arg === 'string') {
        console.log(arg.toUpperCase());
    } else {
        console.log(arg + 1);
    }
}

// ---------

function helloUser(user: string | string[]) {
    if (Array.isArray(user)) {
        user.map(each => {
            console.log(each + ', hello!');
        });
    } else {
        user.toLowerCase();
    }
}