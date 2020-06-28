function point(x: number, y: number): number {
    return x + y;
}

let myPoint = function(x,y) { return x + y; }


function point1(x: number, y: number = 10): number {
    return x + y;
}

console.log("OUTPUT: " + point1(20));

function optionPoint(x : number, y? : number ): number {
    if(y) {
        return x + y;
    }
    return x;
}

console.log("OUTPUT: " + optionPoint(10, 10));
console.log("OUTPUT: " + optionPoint(10));
