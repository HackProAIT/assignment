function specialReverse(s1, s2) {
    let a = s1.split(' ');
    for(let i=0; i<a.length; i++) {
        if(a[i][0] == s2) {
            a[i] = a[i].split('').reverse().join('');
        }
    }
    return a.join(' ');
}

function testJackpot(a) {
    for(let i=1; i<a.length; i++) {
        if(a[i] !== a[i-1])
            return false;
    }

    return true;
}

function removeDups(a) {
    let a1 = [];
    for(let i=0; i<a.length; i++) {
        if(a1.indexOf(a[i]) === -1)
            a1.push(a[i]);
    }
    return a1;
}

console.log("specialReverse ('word searches are super fun', 's') -> " + specialReverse ('word searches are super fun', 's'));
console.log("specialReverse ('first man to walk on the moon', 'm') -> " + specialReverse ('first man to walk on the moon', 'm'));
console.log("specialReverse ('peter piper picked pickled peppers', 'p') -> " + specialReverse ('peter piper picked pickled peppers', 'p'));

console.log("testJackpot(['@','@','@','@']) -> " + testJackpot(["@","@","@","@"]) );
console.log("testJackpot(['abc', 'abc', 'abc', 'abc']) -> " + testJackpot(['abc', 'abc', 'abc', 'abc']));
console.log("testJackpot(['SS', 'SS', 'SS', 'SS']) -> " + testJackpot(['SS', 'SS', 'SS', 'SS']));
console.log("testJackpot(['&&', '&', '&&&', '&&&&']) -> " + testJackpot(['&&', '&', '&&&', '&&&&']));
console.log("testJackpot(['SS', 'SS', 'SS', 'Ss']) -> " + testJackpot(['SS', 'SS', 'SS', 'Ss']));

console.log("removeDups ([1, 0, 1, 0]) -> " + removeDups ([1, 0, 1, 0]));
console.log("removeDups (['The', 'big', 'cat']) -> " + removeDups (['The', 'big', 'cat']));
console.log("removeDups (['John', 'Taylor', 'John']) -> " + removeDups (['John', 'Taylor', 'John']));