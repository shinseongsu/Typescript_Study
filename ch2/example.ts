// 논리(Boolean)
let isRun : boolean = false;

console.log(isRun);

// 숫자(Number)
let decimal: number = 5;
let hex: number = 0xff;

//문자열(String)
let firstName: string = '김';
let lastName: string = '철수';

let fullName: string = '김 철수';
let age: Number = 11;
let profile = `Full Name: ${fullName}
Age ${age}`;

console.log(profile);

// 배열(Array)

let list: number[] = [1, 2, 3];
let list1: Array<number> = [1, 2, 3];

console.log(list1);

// 튜플(Tuple)

let point: [string, number];
point = [ "x", 10 ];

console.log(point);

// 열거(Enum)

enum Color { Red = 1, Green, Blue };
let color : Color = Color.Green
console.log(color);


// 임의(Any)

let sure: any = 1;
sure = "이건 문자열";
sure = true;

console.log(sure);

// void

function log(msg): void {
    console.log("LOG : ", msg);
}

log("message");

// Null 과 Undefined

let a : number = null;

console.log(a);

// 네버(Never)

function error(message: string): never {
    throw new Error(message);
}

//error("111111");

// 객체(Object)

let user: { name: string; age: number; } = { name: '김철수', age: 12 }
console.log(user.name);