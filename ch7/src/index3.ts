// bigint
// bigint는 자바스크립트와 타입스크립트에 새로 추가된 타입으로 
// 이를 이용하면 라운딩 관련 에러 걱정 없이 큰 정수를 처리할 수 있다.
// number는 253까지의 정수를 표현할 수 있지만 bigint를 이용하면 이보다 큰 수도 표현할 수 있다.
// bigint 타입은 모든 Bigint의 집합으로 덧셈, 뺄셈, 곱셈, 나눗셈, 비교 등의 연산을 지원한다.

// bigint는 es2020부터 지원.

let a4 = 1234n      // bigint
const b4 = 5678n    // bigint
var c4 = a4 + b4    // bigint
let d4 = a4 < 1234  // boolean
// let e4 = 88.5n      // 에러 bigint 리터럴은 반드시 정수여야 함
let f4: bigint = 100n   // bigint
let g4: 100n = 100n // 100n
// let h4: bigint = 100    // 에러 '100' 타입은 'bigint' 타입에 할당할 수 없음