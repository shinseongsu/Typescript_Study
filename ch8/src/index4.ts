// call, apply, bind
// 함수를 괄호 ()로 호출하는 방법도 있지만 자바스크립트에서는 두 가지 방법을 추가로 제공한다.

function add(a: number, b: number): number {
    return a + b
}

add(10, 20)                 // 30으로 평가
add.apply(null, [10, 20])   // 30으로 평가
add.call(null, 10, 20)      // 30으로 평가
add.bind(null, 10, 20)()    // 30으로 평가