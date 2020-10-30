// 열거형
// 열거형(enum)은 해당 타입으로 사용할 수 있는 값을 열거하는 기법이다.
// 열거형은 키를 값에 할당하는, 순서가 없는 자료구조이다.

enum Language {
    English,
    Spanish,
    Russian
}

// 타입스크립트는 자동으로 열거형의 각 멤버에 적절한 숫자를 추론해 할당하지만,
// 값을 명시적으로 설정할 수도 있다.

enum Language1 {
    English = 0,
    Spanish = 1,
    Russian = 2
}

let myFirstLanguage = Language1.Russian
let mySecondLanguage = Language1['English']


// 여러개 정의 중 한가지값만 추론할 수 있다. 주의 해야한다.
enum Language2 {
    English = 0,
    Spanish = 1
}

enum Language2 {
    Russian = 2
}

// 모든 값을 정의 할 필요없다.
enum Language3 {
    English = 100,
    Spanish = 200 + 300,
    Russian // 타입스크립트가 500 다음 숫자인 501로 추론
}

// 문자열 값을 사용하거나 문자열과 숫자 값을 혼합할 수 있다.
enum Color1 {
    Red = '#c10000',
    Blue = '#007ac1',
    Pink = 0xc10050,
    White = 255
}

let red = Color1.Red
let pink = Color1.Pink

let green = Color1.Green    // 에러 'Green' 프로퍼티는 타입에 존재하지 않음.

let c12 = Color1[255]   // string
let d12 = Color1[6]     // string

// Color[6] 은 접근할 수 없어야 하지만 타입스크립트는 접근을 허용한다.
// 더 안전한 열거형 타입인 const enum을 이용하면 타입스크립트가 이런 안전하지 않은 작업을 막도록 만들 수 있다.

const enum Language4 {
    English,
    Spanish,
    Russian
}

let a12 = Language4.English

let b12 = Language4.Tagalog // 에러 Tagalog 프로퍼티 존재하지 않음
let c12 = Language4[0]      // 에러 const enum 멤버는 문자열 리터럴로만 접근할수 있다.
let d12 = Language4[6]      // 에러 const enum 멤버는 문자열 리터럴로만 접근할수 있다.
