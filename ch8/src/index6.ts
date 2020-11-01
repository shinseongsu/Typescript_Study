// 제너레이터 함수
// 제너레이터 함수는 여러개의 값을 생성하는 편리한 기능을 제공한다.
// 제너레이터 함수를 이용하면 값을 생성하는 속도도 정교하게 조절할 수 있다.

function* createFibonacciGenerator() {
    let a = 0
    let b = 1
    while(true) {
        yield a;
        [a,b] = [b, a+ b]
    }
}

let fibonacciGenerator = createFibonacciGenerator() // IterableIterator<number>

fibonacciGenerator.next()   // {value: 0, done: false}로 평가
fibonacciGenerator.next()   // {value: 1, done: false}로 평가
fibonacciGenerator.next()   // {value: 2, done: false}로 평가
fibonacciGenerator.next()   // {value: 3, done: false}로 평가
fibonacciGenerator.next()   // {value: 4, done: false}로 평가
fibonacciGenerator.next()   // {value: 5, done: false}로 평가

// 이 제너레이터에 next를 호출할 때마다 다음 피보나치 값을 계산해서 결과를 방출한다.
