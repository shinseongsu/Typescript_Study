// 객체
// 타입스크립트의 객체(object) 타입은 형태를 정희한다.

let a7: object = {
    b : 'x'
}

// a7.b     // 에러 'b' 프로퍼티는 'object'에 존재하지 않음.

// 명시적으로 정의하지 않고 타입스크립트가 추론하도록 하면 어떨까?

let a7_1 = {
    b: 'x'
}       // {b: string}

a7_1.b  // string


let b7 = {
    c: {
        d: 'f'
    }
}       // {c: {d: string}}

// 타입스크립트가 c의 형태를 추론하게 하거나 중괄호({}) 안에서 명시적으로 타입을 묘사할 수 있다.

let a7_2: {b: number} = {
    b: 12
}   // {b: number}

let c7: {
    firstName: string,
    lastName: string
} = {
    firstName: 'john',
    lastName: 'barrowman'
}


class Person {
    constructor(
        public firstName: string,

        public lastName: string
    ) { }
}
c7 = new Person('matt', 'smith')    // OK

// {firstName: string, lastName: string}은 객체의 형태를 묘사하며 객체 리터럴과
// 클래스 인스턴스 모두 이 형태를 만족하므로 타입스크립트는 Person을 c로 할당하는 동작을 허용하다.


let a7_3: { b: number } 
// a7_3 = {}   // 에러 '{}' 타입에는
               // { b: number} 타입에 필요한 'b' 프로퍼티가 없음

/*               
a7_3 = {
    b: 1,
    c: 2    // 에러 '{b: number, c: number}' 타입을 '{b: number}' 타입에 할당할 수 없음
}    
*/

let a7_4: {
    b: number,
    c?: string,
    [key: number]: boolean
}

a7_4 = {b: 1}
a7_4 = {b: 1, c: undefined}
a7_4 = {b: 1, c: 'd'}
a7_4 = {b: 1, 10: true}
a7_4 = {b: 1, 10: true, 20: false}
// a7_4 = {10: true}        // 에러 '{10: true}' 타입에 b 프로퍼티가 없음
// a7_4 = {b: 1, 33: 'red'} // 에러 'string' 타입은 'boolean' 타입에 할당할 수 없음

let user: {
    readonly firstName: string
} = {
    firstName: 'abby'
}
user.firstName  // string
// user.firstName = 'abbey with an e'  // 에러 'firstName'은 읽기 전용입니다.

let danger: {}
danger = {}
danger = {x: 1}
danger = []
danger = 2


// 타입 별칭
// (let, const, var로) 변수를 선언해서 값 대신 변수로 청하듯이 타입 별치으로 타입을 가리킬 수 있다.

type Age = number
type Human = {
    name: string
    age: Age
}

// Age는 number이다. 타입 별칭을 이용하면 Human의 형태를 조금 더 이해하기 쉽게 정의할 수 있다.

let age: Age = 55
let driver: Human = {
    name: 'James May',
    age: age
}

// Age는 number의 별칭이므로 number에도 할당할 수 있다.
// 자바스크립트 변수 선언(let, const, var)과 마찬가지로 하나의 타입을 두 번 정의할 수는 없다.

type Color = 'red'
// type Color = 'blue' // 에러 'Color' 식별자를 중복 정의함.

let x = Math.random() < .5

if (x) {
    type Color = 'blue' //  위의 Color 정의를 덮어씀
    let b: Color = 'blue'
} else {
    let c: Color = 'red'
}