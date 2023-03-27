let a: number = 5; 
let b = 'str';


let c: number = a + Number(b);

// ------

let d = true;
let e: boolean = false;

// ---------

let arrStr: string[] = ['str1', 'str2', 'str3'];
let arrNum: number[] = [1, 2, 3];
let arrBool: boolean[] = [true, false, true];


let someArr: [number, string, boolean] = [1, 'str2', true];

someArr.push('some');
someArr.pop();

// ---------

let f: any = 'str';
    f = 5;
    f = true;

// ---

let anyArr: any[] = [1, 'str', true];

// ---------


function greet(name: string): string {
    return name + ', hello!';
}

// ---------

arrStr.map(str => {

});

// ---------

function coord(coords: { lat: number, long?: number }): number | undefined {
    return coords ? 1 : undefined;
}