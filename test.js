function movieSwitch(arr) {
    var newArr = ['B'];

    switch(moviegoer) {
        case 'M':
            newArr.push('P', 'M');
            break;
        case 'D':
            newArr.push('A', 'D');
        case 'P':
            newArr.push('M');
    }
    var len = newArr.length;
    var n = 3;
    var ans = randomPerm(newArr, len, n);
    return ans;
}

var finalAns = movieSwitch(['A', 'D', 'M']);
console.log(finalAns);