let a = 'John';

console.log(typeof a);

if (typeof a == 'string') {
    //...
} else {
    //...
}

// ---

let b: typeof a;

// ---------

type Coord = {
    lat: number;
    long: number;
}

// enum Coord2 {
//     lat = 'lat',
//     long = 'long'
// }

type Point = keyof Coord;

let somePoint: Point = 'lat';

// ---------

function log(arg: string | null) {
    if (arg == null) {
        console.log('...');
    } else {
        arg.toUpperCase();
    }
}