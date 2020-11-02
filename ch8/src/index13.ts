// this를 반환 타입으로 사용하기

let set = new Set
set.add(1).add(2).add(3)
set.has(2)  //true
set.has(4)  //false

class Set {
    has(value: number): boolean {
        // ...
    }
//    add(value: number): Set {

//    }
    add(value: number): this {
        
    }
}

class MutableSet extends Set {
    delete(value: number): boolean {
        // ..
    }
    add(value: number): MytableSet {
        // ..
    }
}