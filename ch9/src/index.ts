// 타입 간의 관계

// 서브타입과 슈퍼타입

// - 배열은 객체의 서브타입이다.
// - 튜플은 배열의 서브타입이다.
// - 모든 것은 any의 서브타입이다.
// - never는 모든것의 서브타입이다.
// - Animal을 상속받은 Bird 클래스가 있다면 Bird는 Animal의 서브타입이다.

// - 객체를 사용해야 하는 곳에 배열도 사용할 수 있다.
// - 배열을 사용해야 하는 곳에 튜플도 사용할 수 있다.
// - any를 사용해야 하는 곳에 객체도 사용할 수 있다.
// - 어디에나 never를 사용할 수 있다.
// - Animal을 사용해야 하는곳에 Bird도 사용할 수 있다.

// - 배열은 튜플의 슈퍼타입이다.
// - 객체는 배열의 슈퍼타입이다.
// - any는 모든 것의 슈퍼타입이다.
// - never는 누구의 슈퍼타입도 아니다.
// - Animal은 Bird의 슈퍼타입이다.

// 가변성

// 보통 A라는 타입이 B라는 다른 타입의 서브 타입의 서브타입인지 아닌지 쉽게 판단할 수 있다.
// 맥개변수화된 타입 등 복합 타입에서는 이 문제가 더 복잡해진다.

// 형태와 배열 가변성

// 서버로부터 받은 기존 사용자
type ExistingUser = {
    id: number
    name: string
}

// 아직 서버에 저장하지 않은 새 사용자
type NewUser = {
    name: string
}

function deleteUser(user: { id?: number, name: string}) {
    delete user.id
}

let existingUser: ExistingUser = {
    id: 123456,
    name: 'Ima User'
}

deleteUser(existingUser)

// 기존 사용자 라는 새로운 타입을 추가한 다음 이 타입의 사용자를 삭제하자.

type LegacyUser = {
    id?: number | string
    name: string
}

let legacyUser: LegacyUser = {
    id: '793331',
    name: 'Xin Yang'
}

deleteUser(legacyUser)  // 에러 'string' 타입은 'number | undefined' 타입에 할당할 수 없음
