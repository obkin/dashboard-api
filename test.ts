class Coord {
    message = '1';
    lat: number;
    long: number;

    computeDistance(newLat: number, newLong: number) {
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
    message = '2';
    _name: string;

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
        console.log(this.message);
    }
}

const point3 = new MapLocation(123, 657, 'Jack');
console.log(point3);

console.log(point3.name);
point3.name = 'yarik'
console.log(point3._name);

// ---------------------------

interface LoggerService {
    log: (s: string) => void;
}

class Logger implements LoggerService {
    log(arg: string): void {
        console.log(arg);
    }
}