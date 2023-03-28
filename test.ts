const a: number = 5;
const b: string = 'str';
const d: boolean = true;

let c: string = a + b + d;

// ---------

let arr: (string | number | boolean)[] = ['John', 'Walter', 'Kate', 1, false];

let names: string[] = ['John', 'Walter', 'Kate'];
let numbers: number[] = [1, 2, 3];
let booleans: boolean[] = [true, true, false];

let someArr: any[] = ['str', 1, true, {link: 'https://youtube.com'}]; // types is absent

let tuple: [number, number, string, boolean, number] = [1, 5, 'str', false, 1];
let tupleEx: [number, string, boolean, number] = [875, 'John', false, 28];

// ---------

function greet(name: string): string {
    return name + ', hello!'; // John, hello!
}

console.log(names.map((name: string) => greet(name)));

// ---------

interface HelloFunc {
    hello: {
        hi: string;
        name: string;
    };
}

function helloFunc(obj: HelloFunc): string {
    return obj.hello.hi + ', ' + obj.hello.name;
}

// ---

function hello(hello: { hi: string, name?: string }): string {
    if (hello.name == 'string') {
        return hello.hi + ',' + hello.name + '!';
    } else {
        throw new Error(hello.name + ' - is undefined');
    }
}

console.log(hello({hi: 'Hello', name: 'John'}));

// ---------

let f: any = 5;
    f = 'str',
    f = true;