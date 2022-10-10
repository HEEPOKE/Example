function Fib() {

    var i;
    var fib = [0, 1];
    var Fibonacci = [];
    var Number = document.getElementById("Number").value;

    for (i = 2; i <= 100; i++) {

        fib[i] = fib[i - 2] + fib[i - 1];
        Fibonacci.push(fib[i]);
    }

    var index = [Number];

    const Show = index.map(e => Fibonacci[e])


    console.log(Show);
}