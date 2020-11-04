// 데코레이터

// 데코레이터(decorator)는 타입스크립트의 실험적 기능으로 클래스, 클래스 메서드, 프로퍼티, 메서드 매개변수르 활용한 메타 프로그래밍에 깔끔한 문법을 제공한다.

@serializable
class APIPayload {
    getValue(): Payload {
        // ..
    }
}

let APIPayload = serializable(class APIPayload {
    getValue(): Payload {
        // ..
    }
})

type classConstructor<T> = new (...args: any[]) => T
function serializable<T extends classConstructor<{getValue(): Payload}>> (Constructor: T) {
    return class extends Constructor {
        serialize() {
            return this.getValue().toString()
        }
    }
}

let payload = new APIPayload
let serialized = payload.serialize()

let DecoratedAPIPayload = serializable(APIPayload)
let payload = new DecoratedAPIPayload
payload.serialize() // string