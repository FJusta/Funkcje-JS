function getTriangleArea(a, h) {
    if ((a <= 0) || (h <= 0)) {
        console.log('Nieprawidłowe dane');
    }
    return (a*h/2);
}
console.log(getTriangleArea(8, 3));

var triangle1Area = getTriangleArea(10, 15),
    triangle2Area = getTriangleArea(12, 18),
    triangle3Area = getTriangleArea(20, 25);

console.log(triangle3Area);