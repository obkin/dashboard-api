let a = 'str';

let b: typeof a;

let d: typeof b;

if (typeof a == 'string') {
    console.log('string');
}

// ---------

type Coord = {
    lat: number,
    long: number
}

interface ICoord {
    lat: number,
    long: number
}

type Point = keyof Coord;

const c: Point = 'lat'; 

// ---------

function log(arg: string | null): void {
    arg?.toLowerCase();

    if (arg == null) {
        throw new Error(`${arg} - has null type`);
    } else {
        arg.toUpperCase();
    }
}

// ---------

const id1: Symbol = Symbol('id');
const id2: Symbol = Symbol('id');

console.log(id1 == id2);

// ---------

let user = {
    name: 'John'
};

let age: Symbol = Symbol('age');

// user[age] = 19;