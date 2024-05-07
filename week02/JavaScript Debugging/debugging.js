const PI = 3.14;
let area = 0;

function circleArea(radius) {
    const area = radius * PI;
    return area;
}

area = circleArea(3);
console.log("Area1:", area); // Insert some console.log() statements to review what is happening.

area = circleArea(4);
console.log("Area2:", area);