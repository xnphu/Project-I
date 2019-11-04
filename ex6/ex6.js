var fibonacciCheck = (number) => {
    var fibonacciSequence = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
    for (var i = 0; i < fibonacciSequence.length(); i++) {
        if (number == fibonacciSequence[i]) {
            return number + 'is fibonacci number';
        } else {
            return number + 'is not fibonacci number';
        }
    }
}



