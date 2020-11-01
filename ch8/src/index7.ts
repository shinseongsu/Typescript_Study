// 반복자
// 반복자(iterator)와 제너레이터는 상생 관계이다.
// 제너레이터로 값의 스트림을 생성할 수 있고 반복자로 생성된 값을 소비할 수 있기 때문이다.

let numbers = {
    *[Symbol.iterator]() {
        for(let n = 1; n <= 10; n++) {
            yield n
        }
    }
}

// for-of로 반복자 반복하기

for ( let a of numbers) {
    // 1, 2, 3 등
}

// 반복자 스프레드
let allNumbers = [...numbers]   // number[]

// 반복자 구조 분해 할당
let [one, two, ...rest] = numbers   // [number, number, number[]]