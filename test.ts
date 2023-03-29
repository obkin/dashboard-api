// let a: string = 'str';

// const b = 'str';
// const d = 5;
// const e = true;
// const f = {};

// ---------

let j: 'str' = 'str';

// ---------

type directions = 'left' | 'right';

function move(direction: directions): 1 | -1 | 0 {
    switch (direction) {
        case 'left':
            return -1;
        case 'right':
            return 1
        default:
            return 0;
    }
}

move('left');

// ---------

/*

interface IConnection {
    host: string;
    port: number;
}

function connect(params: IConnection | 'default') {
    if (typeof params == 'object') {
        startConnection(params);
    } else if (params == 'default') {
        startConnection({ host: 'http://localhost', port: 3000 });
    } else {
        throw new Error('Set other settings');
    }
}

connect('default');

connect({ host: 'http://localhost', port: 3000 });


function startConnection(p: any) {

}

*/

// ---------

const connection = {
    host: 'localhost',
    protocol: 'https' as 'https'
}

function connect(host: string, protocol: 'http' | 'https') {

}

connect(connection.host, connection.protocol);

// ---------

let b: any = 5;
let c = b as number; 

// ---

let d: any = 5;
let e = <number>d;