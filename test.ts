
class Coord {
    message = '1';
    lat: number;
    long: number;

        computeDistance(newLat: number, newLong: number): number {
            return (this.lat - newLat) + (this.long - newLong);
        }

    constructor(lat: number, long: number) {
        this.lat = lat;
        this.long = long;
        console.log(this.message);
    }
}

const poin = new Coord(0, 1);

// poin.lat = 1;
// poin.long = 2;
 
// ---------

const nationallity = 'Ukrainian';

class MapLocation extends Coord {
    message = '2';

    _name: string;

    get name() {
        return this._name;
    }

    set name(arg: string) {
        this._name = arg + `_login`;
    }

    override computeDistance(newLat: number, newLong: number): number {
        console.log(this._name);
        return (this.lat - newLat) + (this.long - newLong);
    }

    constructor(lat: number, long: number, name: string) {
        super(lat, long);
        this.name = name;
        console.log(this.message);
    }
}

const a = new MapLocation(0, 1, 'str');

a.name = 'Yakrik';
a.name;

// ---------

interface LoggerService {
    log: (s: string) => void; 
}

class Logger implements LoggerService {
    log(s: string): void {
        console.log(s);
    }
}