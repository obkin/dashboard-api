interface HasLength {
    length: number;
}

function log<T1 extends HasLength, T2>(arg: T1, arr: T2[]): T2[] {
    arg.length

    return arr;
}

log<HasLength, number>({ length: 5 }, [1, 5, 7]);

// log<string, number>('str', [1, 5, 7]);
// log<number, string>(5, ['str1', 'str2', 'str3']);
// log<boolean, boolean>(true, [false, true, false]);

// ---------

interface User {
    name: string;
    age?: number;
    bid: <TYPE>(sum: TYPE) => boolean;
}

const obj: User = {
    name: 'Jack',
    age: 19,
    bid: (sum) => {
        return true;
    }
}

obj.bid(12);
obj.bid('12');
obj.bid([1, 2, 4]);