function squareOf(n: number) {
    return n * n
}

squareOf(2)
// squareOf('z')   // 에러 "z"라는 타입의 인수는 'number' 타입의 매개변수에 할당할 수 없음


// any는 뭐든 할 수있지만 꼭 필요한 상황이 아니라면 사용하지 않는 것이 좋다.
let a: any = 666
let b: any = ['danger']
let c: any = a + b

// unknown
// 타입을 미리 알 수 없는 어떤 값이 있을 때 any 대신 unknown을 사용하자.
// unknown의 타입을 검사해 타입스크립트가 unknown 타입의 값을 사용할 수 없게 강제한다.

let a1: unknown = 30    // unknown
let b1 = a1 === 123     // boolean
// let c1 = a1 + 10        // 에러 객체 타입이 unknown 임.

if ( typeof a === 'number' ) {
    let d = a + 10      // number
}

// boolean 타입은 true(참), false(거짓) 두 개의 값을 갖는다.

let a2 = true   // boolean
let b2 = false  // boolean
const c2 = true  // true
let d2: boolean = true // boolean
let e2: true = true
// let f2: true = false // 에러 'false' 타입을 'true' 타입에 할당할 수 없다.

