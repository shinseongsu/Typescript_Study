// this 타입
// 자바스크립트를 사용해보지 않은 독자라면 자바스크립트에서 this 변수가 클래스에 속한 메서드들뿐 아니라 모든 함수에서 정의된다는 사실
// this의 값은 함수를 어떻게 호출했는지에 따라 달라지는데 이는 자바스크립트를 코드를 이해하기 어렵게 만드는 고질적인 문제 중 하나이다.

let x = {
    a() {
        return this
    }
}

x.a()   // a()의 바디 안에서 this는 객체 x임

let a = x.a
a()     // 이제 a()의 바디 안에서 this는 정의되지 않은 상태임

function fancyDate() {
    return ${ this.getDate() } / ${ this.getMonth() } / ${ this.getFullYear() }
}

fancyDate.call(new Date)    // "4/14/2005"

fancyDate() //  에러 this.getDate() 는 함수가 아님

function fancyDate1(this: Date) {
    return ${ this.getDate() } / ${ this.getMonth() } / ${ this.getFullYear() }
}

fancyDate1.call(new Date)
fancyDate1()            // 에러