class Coord {
    message = '1';
    lat: number;
    long: number;

    protected test() {
        if (this.lat) {
            return true;
        }
    }

    computeDistance(newLat: number, newLong: number) {
        console.log(this.test());
        return (this.lat - newLat) + (this.long - newLong);
    }

    constructor(lat: number, long: number) {
        this.lat = lat;
        this.long = long;
        console.log(this.message);
    }
}

const point1 = new Coord(506, 708);
const point2 = new Coord(134, 534);
// console.log(typeof point1);
// console.log(typeof point1);

// point.lat = 0;
// point.long = 1;

console.log(point1);
console.log(point2);
console.log(new Coord(1, 2));
console.log(new Coord(14, 22));

// ---------------------------

class MapLocation extends Coord {
    #message = '2';
    private _name: string;

    get name() {
        return this._name + ', hello!';
    }

    set name(n: string) {
        this._name = n + '_login';
    }

    override computeDistance(newLat: number, newLong: number) {
        console.log(this._name);
        return (this.lat - newLat) + (this.long - newLong);
    }

    constructor(lat: number, long: number, name: string) {
        super(lat, long);
        this._name = name;
        console.log(this.#message);
        console.log(this.test());
    }
}

const point3 = new MapLocation(123, 657, 'Jack');
console.log(point3);
// point3.test();

console.log(point3.name);
point3.name = 'yarik'
// console.log(point3._name);

// ---------------------------

interface LoggerService {
    log: (s: string) => void;
}

class Logger {
    private log(arg: string): void {
        console.log(arg);
    }

    #b: number;
    private a: string;
}

const myLogger = new Logger();
// myLogger.a;
// myLogger.#b;
// myLogger.log('str');

// ---------------------------

class MyClass<TYPE> {
    a: TYPE;
}

const someClass = new MyClass<string>();
someClass.a;

// MyClass.a;
// MyClass.log();

// ---------------------------

abstract class Base {
    print(s: string) {
        console.log(s);
    }

    abstract error(s: string): void;
}

// const cl = new Base();

class BaseExtended extends Base {
    error(s: string): void {
        throw new Error(`error > ${s}`);
    }
}

const cl = new BaseExtended();
cl.print('str');

// ---------------------------

class Animal {
    name: string;
}

class Dog { 
    name: string;
    tail: boolean;
}

const puppy: Animal = new Dog();
puppy.name;