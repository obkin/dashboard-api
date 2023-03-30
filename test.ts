type directions = 'left' | 'right';

enum Directions {
    Left,
    Right
}

function move(direction: Directions) {
    switch (direction) {
        case Directions.Left:
            return -1;
        case Directions.Right:
            return 1;
        default:
            return 0;
    }
}

move(Directions.Left);
move(Directions.Right);

// ---------

function objMod(obj: { Left: number }) {

}

objMod(Directions);

// ---------

const enum Directions2 {
    Up,
    Down
}

let myDirection = Directions2.Up;