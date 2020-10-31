// 선택적 매개변수와 기본 매개변수
// 객체와 튜플 타입에서처럼 함수에서도 ?를 이용해 선택적 매개변수를 지정한 수 있다.
// 함수의 매개변수를 선언할 때 필수 매개변수를 먼저 지정하고 선택적 매개변수를 뒤에 추가한다.

function log(message:string, userId?: string) {
    let time = new Date().toLocaleTimeString()
    console.log(time, message, userId || 'Not signed is')
}

log('Page loaded')

log('User signed in', 'da763be')

// 자바스크립트에서처럼 매개변수에 기본값을 지정할 수 있다.

function log1(message: string, userId = 'Not signed in') {
    let time = new Date().toISOString()
    console.log(time, message, userId)
}

log1('User clicked on a button', 'da763be')
log1('User signed out')


// userId에 기본값을 제공하므로 선택형 마크(?)와 타입을 지정할 필요가 없어졌다.
// 타입스크립트는 기본값으로 매개변수의 타입을 추론할 수 있기 때문이다.
// 덕분에 코드가 간결해지고 읽기도 쉬워진다.

type Context = {
    appId?: string
    userId?: string
}

function log2(message: string, context: Context = {}) {
    let time = new Date().toISOString()
    console.log(time, message, context.userId)
}