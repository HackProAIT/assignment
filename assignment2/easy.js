function charCount(s1, s2) {
    let count = 0;
    for(let i=0; i<s2.length; i++) {
        if(s2[i] === s1)
            count++;
    }
    return count;
}

function addUp(a) {
    let sum = 0;
    for(let i=1; i<=a; i++) {
        sum+=i;
    }
    return sum;
}

function replaceVowel(s) {
    let s1 = '';
    
    for(let i=0; i<s.length; i++) {
        if(s[i] == 'a')
            s1+='1';
        else if(s[i] == 'e')
            s1+='2';
        else if(s[i] == 'i')
            s1+='3';
        else if(s[i] == 'o')
            s1+='4';
        else if(s[i] == 'u')
            s1+='5';
        else
            s1+=s[i];
    }    
    return s1;
}


console.log("charCount('a', 'edabit') -> " + charCount('a', 'edabit'));
console.log("charCount('c', 'Chamber of secrets') -> " + charCount('c', 'Chamber of secrets'));
console.log("charCount('b', 'big fat bubble') -> " + charCount('b', 'big fat bubble'));

console.log("addUp (4) -> " + addUp (4));
console.log("addUp (13) -> " + addUp (13));
console.log("addUp (600) -> " + addUp (600));

console.log("replaceVowel('karachi') -> " + replaceVowel('karachi'));
console.log("replaceVowel('chembur') -> " + replaceVowel('chembur'));
console.log("replaceVowel('khandbari') -> " + replaceVowel('khandbari'));