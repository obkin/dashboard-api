class Coord {
    #message = '1';
    lat: number;
    long: number;

    protected computeDistance(newLat: number, newLong: number) {
        return 0;
    }

    private test() {
        console.log('Everything is OK');
    }

    constructor(lat: number, long: number) {
        this.lat = lat;
        this.long = long;
        // console.log(this.message);
    }
}

const instCoord = new Coord(243, 564);
// instCoord.lat = 124;
// instCoord.long = 657;
console.log(instCoord);

// ---------------------------

class MapLocation extends Coord {
    #message = '2';
    private _name: string;

    get name() {
        return this._name + ', hello!';
    }

    set name(s: string) {
        this._name = s + '_cool';
    }

    override computeDistance(newLat: number, newLong: number) {
        console.log(this.name);
        return (newLat - this.lat) + (newLong - this.long);
    }

    constructor(lat: number, long: number, name: string) {
        super(lat, long);
        this.name = name;
        // console.log(this.message);
    }
}

const newMapLoc = new MapLocation(435, 135, 'Talor');
console.log(newMapLoc.computeDistance(123, 234));

console.log(newMapLoc.name);
newMapLoc.name = 'John';
console.log(newMapLoc.name);

// ---------------------------

class some extends MapLocation {
    #message = '3';
    private _age: number;

    get age() {
        return this._age;
    }

    set age(s: number) {
        this._age = s + 1;
    }

    constructor(lat: number, long: number, name: string, age: number) {
        super(lat, long, name);
        this._age = age;
        console.log(this.#message);
        // console.log(this.message);
    }
}

const newInst = new some(123, 432, 'str', 20);
// console.log(newInst.age);
// newInst.age = 20
// console.log(newInst.age);

// ---------------------------

interface LoggerService {
    log: (arg: string) => string;
}

class Logger implements LoggerService {
    public log(arg: string): string {
        return 'gg';
    }
    private a: number;

    #b: string;
}

const logger = new Logger();
logger.log('str');

// ---------------------------

class MyClass<TYPE> {
    a: TYPE;

    static a = 1;

    static log() {

    }

    static {

    }
}

MyClass.a;
MyClass.log();

const instClass = new MyClass<string>();
console.log(typeof instClass.a);

// ---------------------------

class User<TYPE> {
    age: TYPE;
}

const user1 = new User<number>();
user1.age;

// ---------------------------

abstract class MyOwnClass {
    print(arg: string): void {
        console.log(arg);
    }
}

class UserClass extends MyOwnClass {
    log(text: string, time: Date): void {

    }
}

const userClass = new UserClass();
userClass.print('gg');
// userClass.a;

// ---------------------------

class Animal {
    name: string;
    age: number;
}

class Dog {
    name: string;
    age: number;

    tail: boolean;
    high: number;
    weight: number;
    penis: boolean;
}

const animalInstance: Animal = new Dog();
// animalInstance.tail;