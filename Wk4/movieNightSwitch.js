function randomPerm(arr, len, n) {
    
    for (i=0;i < len; i++) {
        if (i % 2 == 0) {
            let temp1 = 0;
            temp1 = arr[0];
            arr[0] = arr[len];
            arr[len] = temp1;
        } else {
            let temp2 = 0;
            temp2 = arr[i];
            arr[i] = arr[len];
            arr[len] = temp2;
        }
        var newArr = arr.splice(len - n + 1);
        return newArr;
    }
}

function movieNight(arr) {
    var newArr = ['B'];

        for(i=0;i<arr.length;i++) {
            if (arr[i] == 'M') {
                newArr.push('P', 'M');
            } 
            if (arr[i] == 'D') {
                newArr.push('A', 'D');
            }
            if (arr[i] == 'P') {
                newArr.push('M');
            }
        }
        var len = newArr.length;
        var n = 3;
        var ans = randomPerm(newArr, len, n);
        return ans;
}

var finalAns = movieNight(['P', 'D', 'A']);
console.log(finalAns); 

