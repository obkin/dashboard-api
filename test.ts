type direction = 'left' | 'right';

enum Directions {
    LEFT = 'left',
    RIGHT = 'right',
    TOP = 'top',
    DOWN = 'down'
}

function move(direction: Directions) {
    switch (direction) {
        case Directions.DOWN:
            return -1;
        case Directions.LEFT:
            return -1;
        case Directions.RIGHT:
            return 1;
        case Directions.TOP:
            return 1;
        default:
            return 0;
    }
}

move(Directions.DOWN);
move(Directions.LEFT);
move(Directions.RIGHT);
move(Directions.TOP);

// ---------

enum Host {
    LOCALHOST = 'localhost',
    HOST = 'myhost'
}

let a = 5;
    a *= 5;

enum Protocol {
    HTTP = 'ast'.length,
    HTTPS = Math.floor(0.9),
    AKMS = a
}

function connect(host: Host, protocol: Protocol) {

}

connect(Host.LOCALHOST, Protocol.HTTP);

// ---------

const enum STATUS {
    PAID = 600,
    REJECTED,
    REFUND
}

const b = STATUS.REFUND;

// ---------

function checkObj(obj: { LEFT: string }) {

}

checkObj(Directions);