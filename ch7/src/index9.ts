// 튜플
// 튜플(tuple)은 배열의 서브타입이다.
// 튜플은 길이가 고정되었고, 각 인덱스의 타입이 알려진 배열의 일종이다.
// 다른 타입과 달리 튜플은 선언할 때 타입을 명시해야 한다.

let a10: [number] = [1]

// [이름, 성씨, 생년] 튜플
let b10: [string, string, number] = ['malcolm', 'gladwell', 1963]

// b10 = ['queen', 'elizabeth', 'li', 1962]    // 에러 'string'은 ' number 타입에 할당할 수 없음

// 방향에 따라 다른 값을 갖는 기차 요금 배열
let trainFares: [number, number?][] = [
    [3.75],
    [8.25, 7.70],
    [10.50]
]

// 튜플이 최소 길이를 갖도록 지정할때는 ... 를 사용할 수 있다.

// 최소 한 개의 요소를 갖는 string 배열
let friends: [string, ...string[]] = ['Sara', 'Tali', 'Chloe', 'Claire']
// 이행 배열
let list: [number, boolean, ...string[]] = [1, false, 'a', 'b', 'c']

// 읽기 전용 배열과 튜플
// 일반 배열은 가변인 반면, 상황에 따라서는 불변인 배열이 필요할 수 있다.

let as: readonly number[] = [1, 2, 3]   //readonly number[]
let bs: readonly number[] = as.concat(4)    // readonly number[]
let three = bs[2]                           // number
// as[4] = 5                               // 에러 'readonly number[]'의 인덱스 시그니처 타입은 읽기만 허용

// as.push(6)              // 에러 push 프로퍼티는 'readonly number[]' 타입에 존재하지 않음


type A = readonly string[]      // readonly string[]
type B = ReadonlyArray<string>  // readonly string[]
type C = Readonly<string[]>     // readonly string[]

type D = readonly [number, string]  // readonly [number, string]
type E = Readonly<[number, string]> // readonly [number, string]


