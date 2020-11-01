// 오버로드된 함수 타입

// 단축형  호출 시그니처
type Log1 = (message: string, userId?: string) => void

// 전체 호출 시그니처
type Log2 = {
    (message: string, userId?: string): void
}

// 오버로드된 함수 시그니처를 이용하면 표현력이 높은 API를 설계할수있다.
type Reserve = {
    (from: Date, to: Date, destination: string): Reservation
}

let reserve: Reserve = (from, to, destination) => {
    // ...
}

type Reserve = {
    (from: Date, to: Date, destination: string): Reservation
    (from: Date, destination: string): Reservation
}

// reserve 함수를 다음처럼 바꿀 수 있다.

let reserve: Reserve = (
    from: Date,
    toOrDestination: Date | string,
    destination?: string
) => {
    //...
}

