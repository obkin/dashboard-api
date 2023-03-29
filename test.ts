type coords = { lat: number, lon: number };

interface ICoords {
    lat: number;
    lon: number;
}

function compute(coords: ICoords) {

}

// ---------

type ID = string | number;

type UniqueID = 'lost' | 'found';

// ---

interface Animal {
    name: string;
    tail: boolean;
}

interface Dog extends Animal {
    kind: string;
}

const dog1: Dog = {
    name: 'Jack',
    tail: false,
    kind: 'dog'
}

interface Dog {
    age?: number;
}

const dog2: Dog = {
    name: 'William',
    tail: true,
    kind: 'dog',
    age: 3
}

// ---

type tAnimal = {
    name: string,
    tail: boolean;
}

type tDog = tAnimal & {
    kind?: string;
    age: number;
}

const dog3: tDog = {
    name: 'Niky',
    tail: true,
    age: 2
}

type userOrUsers = string | string[];