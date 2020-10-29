type Cat = {name: string, purrs: boolean}
type Dog = {name: string, barks: boolean, wags: boolean}
type CatOrDogOrBoth = Cat | Dog
type CatAndDog = Cat & Dog

// Cat
let a8: CatOrDogOrBoth = {
    name: 'Bonkers',
    purrs: true
}

// Dog
a8 = {
    name: 'Domino',
    barks: true,
    wags: true
}

// 둘 다
a8 = {
    name: 'Donkers',
    barks: true,
    purrs: true,
    wags: true
}

let b8: CatAndDog = {
    name: 'Domino',
    barks: true,
    purrs: true,
    wags: true
}

// 실전에서는 대개 인터섹션보다 유니언을 자주 사용한다.

function trueOrNull(isTrue: boolean) {
    if (isTrue) {
        return 'true'
    }
    return null
}

// string 또는 null 을 반환한다.
type Returns = string | null

