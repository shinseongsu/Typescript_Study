// 디자인 패턴

// 팩토리 패턴은 어떤 객체를 만들지 전적으로 팩토리에 위임한다.

type Shoe = {
    purpose: string
}

class BalletFlat implements Shoe {
    purpose = 'dancing'
}

class Boot implements Shoe {
    purpose = 'woodcutting'
}

class Sneaker implements Shoe {
    purpose = 'walking'
}

// 이 예제에서는 type를 사용했는데 대신 인터페이스를 사용해도 된다는 사실을 잊지말자.
// 이제 신발 팩토리를 구현한다.

let Shoe = {
    create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
        switch(type) {
            case 'balletFlat': return new BalletFlat
            case 'boot': return new Boot
            case 'sneaker': return new Sneaker
        }
    }
}

Shoe.create('boot') // Shoe

// 빌더 패턴

// 빌더 패턴으로 객체의 생성과 객체 수현 방식을 분리할수 있다.
// 제이쿼리(jquery) 나 ES6의 Map, Set 등의 자료구조를 사용해봤다면 빌더 패턴에 친숙할 것이다.

class RequestBuilder {
    private data: object | null = null
    private url: string | null = null
    private method: 'get' | 'post' | null = null

    setMethod(method: 'get' | 'post'): this {
        this.method = method
        return this
    }

    setData(data: object): this {
        this.data = data
        return this
    }

    setURL(url: string): this {
        this.url = url
        return this
    }

    send() {
        // ..
    }
}

new RequestBuilder()
    .setURL('/users')
    .setMethod('get')
    .setData({ firstName: 'Anna' })
    .send()