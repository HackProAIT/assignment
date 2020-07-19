function realType(x) {
    if(typeof(x) === "object") {
        if(x == null)
            return "null";
        if(x.constructor === Array)
            return "array";
    }
    return typeof(x);
}

function numInStr(s) {
    let s1 = []
    for(let i in s) {
        let a = s[i].split('');
        
        for(let j in a) {
            if(isNaN(a[j]) === false && a[j] !== ' ') {
                s1.push(a.join(''));
                break;
            }                
        }
    }
    return s1;
}

console.log("realType (1) -> " + realType (1));
console.log("realType('a') -> " + realType('a'));
console.log("realType(true) -> " + realType(true));
console.log("realType ([]) -> " + realType ([]));
console.log("realType(null) -> " + realType(null));

console.log("numInStr (['1a', 'a', '2b', 'b']) -> " + numInStr (['1a', 'a', '2b', 'b']));
console.log("numInStr (['abc', 'abc10']) -> " + numInStr (['abc', 'abc10']));
console.log("numInStr (['abc', 'ab10c', 'a10bc', 'bcd']) -> " + numInStr (['abc', 'ab10c', 'a10bc', 'bcd']));
console.log("numInStr (['this is a test', 'test1']) -> " + numInStr (['this is a test', 'test1']));