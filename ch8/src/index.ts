// 함수선언과 호출
// 함수는 일급(first-class) 객체이다.
// 즉, 객체를 다루듯이 함수를 반환하거나, 객체와 프로토타입에 할당하거나, 함수에
// 프로퍼티를 읽는 등의 작업을 할 수 있다.

function add(a: number, b: number) {
    return a + b
}


// 이름이 붙인 함수
function greet(name: string) {
    return 'hello ' + name
}

// 함수 표현식
let greet2 = function (name: string) {
    return 'hello ' + name
}

// 화살표 함수 표현식
let greet3 = (name: string) => {
    return 'hello ' + name
}

// 단축형 화살표 함수 표현식
let greet4 = (name: string) => 'hello ' + name

// 함수 생성자
let greet5 = new Function('name', 'return "hello " + name')

// 타입스크립트는 함수 생성자를 제외한 모든 문법을 안전하게 지원하며,
// 이 모든 문법은 보통 매개변수 타입의 필수 어노테이션, 반환 타입의 선택형 어노테이션에 적용하는 것과 같은 규칙을 따른다.

// 타입스크립트에서 함수를 호출할 때 타입 정보는 따로 제공할 필요가 없으며,
// 바로 인수를 전달하면 타입스크립트가 함수의 매개변수와 인수의 타입이 호환이 되는지 확인한다.

add(1, 2)   // 3으로 평가
greet('Crystal')    // 'hello Crystal'로 평가

// 물론 인수를 전달하지 않거나 잘못된 타입의 인수를 전달하면 타입스크립트가 인수를 발생시킨다.

add(1)  // 에러 2개의 인수가 필요한데 1개만 전달함
add(1, 'a') // 에러 'a' 인수타입은 'number' 매개변수 타입에 할당할 수 없음