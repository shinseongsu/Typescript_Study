// 나머지 매개변수
// 인수를 여러 개 받는 함수라면 그 목록을 배열 형태로 건낼 수도 있다.

function sum(numbers: number[]): number {
    return numbers.reduce((total,n) => total + n, 0)
}

sum([1, 2, 3])  // 6으로 평가

// 때로는 고정 인자 API가 아니라 가변 인자 API가 필요할 때도 있다.
// 전통적인 자바스크립트는 요술 같은 arguments 객체를 통해 이 기능을 제공했다.

function sumVariadic(): number {
    return Array
            .from(arguments)
            .reduce((total, n) => total + n, 0)
}

sumVariadic(1, 2, 3)    // 6으로 평가

// 하지만 arguments에는 한 가지 큰 문제가 있다.
// 전혀 안전하지 않다는 점이다.

// 타입스크립트는 n과 total 모두를 any 타입으로 추론했고 sumVariadic을 설계 사용할 때까지는 문제가 드러나지 않는다.

// 나머지 매개변수(rest parameters)로 이 문제를 해결할 수 있다.
// 안전하지 않는 arguments를 사용하는 대신 나머지 매개변수를 이용해 sum 함수가 안전하게 임의의 인수를 받게 만든다.

function sumVariadicSafe(...numbers: number[]): number {
    return numbers.reduce((total, n) => total +n, 0)
}

sumVariadicSafe(1, 2, 3)  // 6으로 평가
