type coords = { lat: number, long: number }; 

interface ICoords {
    lat: number;
    long: number;
}

type ID = string | number;

type UniqueID = 'lost' | 'found';

function compute(coords: ICoords) {

}

// ---------

type myString = string;

// ---------

/*

interface Animal {
    name: string;
}

interface Dog extends Animal {
    tail?: boolean
}

const dog: Dog = {
    name: 'Jack',
    // tail: true
};

*/

// ---------

type Animal = {
    name: string;
}

type Dog = Animal & {
    tail: boolean;
}

const dog: Dog = {
    name: 'Maison',
    tail: false
}

// ---------

interface User {
    name: string;
}

interface User {
    age: number;
}

const user: User = {
    name: 'Olya',
    age: 21
}