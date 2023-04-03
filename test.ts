interface HasLength {
    length: number;
}

function log<T1 extends HasLength, T2>(arg: T1, arr: T2[]): T2[] {
    arg.length
    arr.length

    return arr;
}

log<HasLength, number>({ length: 9 }, [1, 3, 4]);

// log<string, number>('str1', [1, 5, 6]);
// log<number, string>(1, ['str1', 'str2']);
// log<boolean, boolean>(true, [false, true, false]);

// ---------

interface User {
    name: string,
    age?: number;

    bid: <TYPE>(sum: TYPE) => boolean;
}

const user1: User = {
    name: 'John',
    age: 21,

    bid: <TYPE>(sum: TYPE) => {
        return true;
    }
};

user1.bid<number>(100);
user1.bid<string>('str');