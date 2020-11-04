// final 클래스 흉내내기
// 타입스크립트는 클래스나 메서드에 final 키워드를 지원하지 않지만 클래스에서 final의 효과를 흉내내기는 어렵지 않다.
// final 키워드는 클래스나 메서드를 확장하거나 오버라이드 할 수 없게 만드는 기능이다.

class MessageQueue {
    private constructor(private meesage: string[]) { }
}

// 생성자를 private으로 선언하면 new 로 인스턴스를 생성하거나 클래스를 확정 할 수 없게 된다.

class BadQueue extends MessageQueue { } // 에러 생성자가 private 이므로 클래스를 확장할 수 없다.

new MessageQueue([])                    // 에러 'MessageQueue' 클래스의 생성자가 private 이므로 클래스 내부 선언에서만 접근 할 수 있음.

class MessageQueue1 {
    private constructor(private messages: string[]) { }
    static create(message: string[]) {
        return new MessageQueue1(message)
    }
}

class BadQueue extends MessageQueue1 { }  // 에러 private 이므로 클래스를 확장할 수 없다.

MessageQueue1.create([])        // MessageQueue1

