function convert(a) {
    return a*60;
}

function dividesEvenly(a, b) {
    return a%b===0?true:false;
}

console.log('convert(5) -> ' + convert(5));
console.log('convert(3) -> ' + convert(3));
console.log('convert(2) -> ' + convert(2));

console.log('dividesEvenly(98, 7) -> ' + dividesEvenly(98, 7));
console.log('dividesEvenly(85, 4) -> ' + dividesEvenly(85, 4));