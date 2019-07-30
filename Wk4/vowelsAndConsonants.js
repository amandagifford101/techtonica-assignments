function vowelsAndConsonants(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    var assortedC = [];

    for (var i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            console.log(s[i]);
        }
        else {
            assortedC.push(s[i]);
        }
    }
    for (var i = 0; i < assortedC.length; i++) {
        console.log(assortedC[i]);
    }
}

vowelsAndConsonants("gifford");