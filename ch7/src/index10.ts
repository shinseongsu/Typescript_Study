// null, undefined, void, never
// 자바스크립트는 null, undefined 두 가지 값으로 부재를 표현한다.
// 타입스크립트도 두 가지 값 모두를 지원한다.

// void는 명시적으로 아무것도 반환하지 않는 함수의 반환한 용도의 타입이다.
// never는 절대 반환하지 않는 함수 타입을 가진다.

// (a) number 또는 null을 반환하는 함수
function a11(x: number) {
    if (x < 10) {
        return x
    }
    return null
}

// (b) undefined를 반환하는 함수
function b11() {
    return undefined
}

// (c) void를 반환하는 함수
function c11() {
    let a = 2 + 2
    let b = a * a
}

// (d) never를 반환하는 함수
function d11() {
    throw TypeError('I always error')
}

// (e) never를 반환하는 또 다른 함수
function e11() {
    while(true) {
        doSomething()
    }
}