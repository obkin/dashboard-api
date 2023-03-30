let a = 5;

const b = 'str';

let j: 'someStr' | 'str' | 5 = 'someStr';

// ---------

type directions = 'left' | 'right';

function move(direction: directions): -1 | 1 | 0 {
    switch (direction) {
        case 'left':
            return -1;
            break;
        case 'right':
            return 1;
            break;
        default: 
            return 0;
            break;
    }
}

move('left');
move('right');

// ---------

/*

interface IConnection {
    host: string;
    port: number;
}

function connect(params: IConnection | 'default') {
    if (typeof params == 'object') {
        startConnection(params.host, params.port);
    } else {
        startConnection('localhost', 3000);
    }
}


function startConnection(h: string, p: number) {

}

*/

// ---------

interface IParams {
    host: string;
    protocol: 'https' | 'http';
}

const connectionParams = {
    host: 'localhost',
    protocol: 'https' as 'https'
}

function connect(host: string, protocol: 'https' | 'http') {

}

connect(connectionParams.host, connectionParams.protocol);