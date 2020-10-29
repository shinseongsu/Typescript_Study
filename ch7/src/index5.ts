// symbol
// symbo(심벌)은 ES2015에 새로 추가된 기능이다.
// 실무에서는 심벌을 자주 사용하지 않는 편이며 객체와 맵에서 문자열 키 대신하는 용도로 사용한다.
// 심벌키를 사용하면 사람들이 잘 알려진 키만 사용하도록 강제할 수 있으므로 키를 잘못 설정하는 실수를 방지한다.

let a6 = Symbol('a')    // symbol
let b6: symbol = Symbol('b')    // symbol
var c6 = a6 === b6      // symbol
// let d6 = a6 + 'x'       // 에러 '+' 연산을 'symbol' 타입에 적용할 수 없음

const e6 = Symbol('e')  // typeof e
const f6: unique symbol = Symbol('f')  // typeof f
// let g6: unique symbol = Symbol('f')    // 에러 'unique symbol' 타입은
                                          // 반드시 'const'여야 함

let h6 = e6 == e6   // boolean                                          
// let i6 = e6 == f6   // 에러 'unique symbol' 타입은 반드시 'const' 여야 한다.