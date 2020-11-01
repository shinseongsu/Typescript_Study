// 문맥적 타입화
// 함수의 매개변수 타입을 명시하지 않아도 되는 첫 사례입니다.
// 이미 log의 타입을 Log로 지정했으므로 타입스크립트가 message의 타입을 string로 추론할 수 있기 때문이다.
// 이는 문맥적 타입화라는 타입스크립트 강력한 타입 추론 기능이다.

import { timeStamp } from "console"

function times (
    f: (index: number) => void,
    n: number
) {
    for(let i = 0; i < n; i++) {
        f(i)
    }
}

// times를 호출할 때 함수 선언을 인라인으로 제공하면 인수로 전달하는 함수의 타입을 명시할 필요가 없다.

times(n => console.log(n), 4)

// times의 시그니처에서 f의 인수 index를 number로 선언했으므로 타입스크립트는 문맥상 n이 number임을 추론할 수 있다.

function f(n) {     // 에러: 매개변수 'any' 타입이 됨
    console.log(n)
}

times(f, 4)
