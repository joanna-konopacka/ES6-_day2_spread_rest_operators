const getAverage = (...values) => {
    const sum = values.reduce((acc, curr) => acc + curr);
    return sum / values.length;
}

console.log(getAverage(2, 4, 5, 6, 7, 79));
console.log(getAverage(1, 2, 3, 4, 5, 6, 7, 8, 9));