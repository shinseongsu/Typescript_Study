// 믹스인
// 자바스크립트와 타입스크트는 trait나 mixin 키워드를 제공하지 않지만 손쉽게 직접 구현 할 수 있다.

import { userInfo } from "os"


// 믹스인이란 동작과 프로퍼티를 클래스로 혼합(mix)할 수 있게 해주는 패턴으로, 다음으로 규칙을 따른다.

// - 상태를 가질 수 있다.
// - 구체 메서드만 제공할 수 있다.
// - 생성자를 가질 수 있다.

type ClassConstructor = new (...args: any[]) => {}

function withEZDebug<C extends ClassConstructor>(Class: C) {
    return class extends Class {
        debug() {
            let Name = this.constructor.name
            let value = this.getDebugValue()
            return Name + '(' + JSON.stringify(value) + ')'
        }
    }
}

class HardToDebugUser {
    constructor(
        private id: number,
        private firstName: string,
        private lastName: string
    ) { }
    getDebugValue () {
        return {
            id: this.id,
            name: this.firstName + ' ' + this.lastName
        }
    }
}

let User =withEZDebug(HardToDebugUser)
let User = new User(3, 'Emma', 'Gluzman')
userInfo.debug()