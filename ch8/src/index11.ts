// 다형성

function filter(array, f) {
    let result = []
    for(let i = 0; i < array.length; i++) {
        let item = array[i]
        if (f(item)) {
            result.push(item)
        }
    }
    return result
}

filter([1,2,3,4], _ => _ < 3)   // [1, 2]로 평가


// type Filter = {
//     (array: unknown, f: unknown) => unknown[]
// }

type Filter1 = {
    (array: number[], f: (item: number) => boolean): number[]
}


type Filter2 = {
    (array: number[], f: (item: number) => boolean): number[]
    (array: string[], f: (item: string) => boolean): string[]
}

type Filter3 = {
    (array: number[], f: (item: number) => boolean): number[]
    (array: string[], f: (item: string) => boolean): string[]
    (array: object[], f: (item: object) => boolean): object[]
}

// 시그니처 대로 filter 함수를 구현하고 실행하면 다음의 결과 나타난다.

let result = filter(
    names,
    _ => _.firstName.startsWith('b')
)   // 에러 object 타입에 존재하지 않음


// 다음은 filter 예제에 제네릭타입 매개변수 T를 적용한 코드다.

type Filter = {
    <T>(array: T[], f: (item: T) => boolean): T[]
}

let filter1: Filter = (array, f) => // ...

// (a) T는 number로 한정됨
filter1([1, 2, 3], _ => _ > 2)

// (b) T는 string로 한정됨
filter1(['a', 'b'], _ => _ !== 'b')

// (c) T는 {filterName: string}으로 한정됨
let names = [
    { firstName: 'beth' },
    { firstName: 'caitlyn' },
    { firstName: 'xin' }
]

filter(names, _ => _.firstName.startsWith('a'))