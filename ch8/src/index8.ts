// 호출 시그니처
// 지금까지 함수의 매개변수 타입과 반환 타입을 살펴봤다.

function sum(a: number, b: number): number {
    return a + b
}

// 타입 별칭으로 한정할 수 있는 독립 호출 시그니처를 추출해보자.

// greet(name: string) 함수
type Greet = (name: string) => string

// log(message: string, userId?: string) 함수
type Log = (message: string, userId?: string) => void

// sumVariadicSage(...numbers: number[]): number함수
type SumVariadicSafe = (...numbers: number[]) => number

// 호출 시그니처와 구현의 관계를 더 구체적으로 확인하자.
let log3: Log = (
    message,
    userId = 'Not signed in'
) => {
    let time = new Date().toISOString()
    console.log(time, message, userId)
}