// 배열
// 자바스크립트처럼 타입스크립트 배열도 연결, 푸시, 검색, 슬라이스 등을 지원하는 특별한 객체이다.

let a9 = [1, 2, 3]  // number[]
let b9 = ['a', 'b'] // string[]
let c9: string[] = ['a'] // string[]
let d9 = [1, '9']   // (string| number)[]
const e9 = [2, 'b'] // (string| number)[]

let f9 = ['red']
f9.push('blue')
// f9.push(true)   // 에러 'true' 타입 인수를 'string' 타입 매개변수에 할당할 수 없음

let g9 = []         // any[]
g9.push(1)          // number[]
g9.push('red')      // (string | number)[]

let h9: number[] = []   // number[]
h9.push(1)
// h9.push('red')      // 에러 'red' 타입 인수를 'number' 타입 매개변수에 할당할 수 없음


// 배열의 모든 요소에 대한 문자열은 대문자로 바꾸고, 숫자에는 3을 곱하는 맵 동작을 적용
d9.map(_ => {
    if (typeof _ === 'number' ) {
        return _ * 3
    }
    return _.toUpperCase()
})

function buildArray() {
    let a = []  // any[]
    a.push(1)   // number[]
    a.push('x') // (string | number)[]
    return a
}

let myArray = buildArray()
// myArray.push(true)  // 'true' 타입의 인수는 'string | number' 타입의 매개변수에 할당할 수 없음