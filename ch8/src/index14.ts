// 인터페이스

// 클래스는 인터페이스를 통해 사용할 때가 많다.
// 타입 별칭처럼 인터페이스도 타입에 이름을 지어주는 수단이므로 인터페이스를 사용하면 타입을 더 깔끔하게 정의할 수 있다.

type Sunshi = {
    calories: number
    salty: boolean
    tasty: boolean
}

interface Sushi {
    calories: number
    salty: boolean
    tasty: boolean
}

// 타입 별칭 대신 인터페이스를 대신 사용할 수 있다.

type Cake = {
    calories: number
    sweet: boolean
    tasty: boolean
}

// Food 라는 타입을 따로 빼서 공통 정보를 정의하고 다른 음식들도 Food를 이용해 다시 정의해보자.

type Food = {
    calories: number
    tasty: boolean
}

type Sushi1 = Food & {
    salty: boolean
}

type Cake1 = Food & {
    sweet: boolean
}

// 이 코드를 인터페이스로 정의할 수 있다.
interface Food1 {
    calories: number
    tasty: boolean
}

interface Sushi extends Food1 {
    salty: boolean
}

interface Cake2 extends Food1 {
    sweet: boolean
}

// 타입 별칭의 오른편에는 타입 표현식( &, | ) 을 포함한 모든 타입이 등장 할 수 있다.

type A = number
type B = A | string

interface A1 {
    good(x: number): string
    bad(x: number): string
}

interface B1 extends A1 {
    good(x: string | number): string
    bad(x: string): string  // 에러 'A1'을 올바르게 상속받지 않는다.
}