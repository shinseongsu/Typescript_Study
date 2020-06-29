class Face {
    private edge: number;

    constructor(edge: number) {
        this.edge = edge;
    }

    public addEdge() {
        this.edge++;
    }

    protected getEdge() {
        return this.edge;
    }
}

class Rect extends Face {
    constructor(){
        super(4);
    }

    public getEdge() {
        return this.getEdge();  // 에러 
    }
}

const rect = new Rect();
console.log(rect.getEdge());