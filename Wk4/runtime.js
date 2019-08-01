/* 
Read the following functions. For each one, figure out:
- What does the function do? 
- Try to figure out the runtime -- O(1), O(log n), O(n), O(n log n), O(n^2), or O(2^n)
- Run the function with a few different input sizes and see how long it takes
- When the input size doubles, what happens to the time it takes to run?
*/


const mysteryFunction0 = function(array) {
    const myFavoriteNum = 7;
    for (i = 0; i < array.length; i++) {
      if (array[i] === myFavoriteNum) {
        return true;
      }
    }
    return false;
  }

  console.log(mysteryFunction0([1,2,3,5,6,8,9,10,4,6,8,9,8,7,6,5,4]));
  /*Test 1: array.length = 3; time = 0.113sec
    Test 2: array.length = 6; time = 0.274sec
    Test 3: array.length = 9; time =  0.231sec 
    Test 4: array.length = 50; time = 0.103secs
    This function checks to see if myFavoriteNum is included in the input array. I'm guessing the runtime
    is 0(N);....testing...seems like linear time although it does seem to be solving in faster for certain 
    bigger lenghts. This could be due to returning with false taking longer than returning true as the function
    has to run all the way through*/
  
  
  
  const mysteryFunction1 = function(array) {
    index = 4;
    return array[index];
  }
  /* This is 0(1) because it doesn't have to ever access more than one array index to return the correct statement.*/
  
  
  var mysteryFunction2 = function(n) {
    let primes = []
    for (i = 2; i < n; i++) {
      let factorFound = false;
      for (j = 2; j < n; j++) {
        if (i % j == 0) {
          factorFound = true;
        }
      }
      if (factorFound === false) {
        primes.push(i);
      }
    }
    return primes.length;
  }
  /* This is 0(N2) */
  
  const mysteryFunction3 = function(array) {
    myLength = array.length;
    if (myLength % 2 == 0) {
      return "even length";
    } else {
      return "odd length";
    }
  }
  /* 0(N) */
  
  
  var mysteryFunction4 = function(string) {
    let eCount = 0;
    for (i = 0; i < string.length; i++) {
      if (string[i] === 'e') {
        eCount++;
      }
    }
    return eCount;
  }
  /* 0(N) */
  
  
  var mysteryFunction5 = function(array) {
    array.sort();
  }
  /* 0(n log n) */  
  
  const mysteryFunction6 = function(dict, key) {
    var value = dict[key];
    return value;
  }
  /* 0(1) */
  
  
  const mysteryFunction7 = function(array) {
    // Assume `array` is an array of ints sorted from smallest to biggest
    const lookingFor = 9;
    let lowerBound = 0;
    let upperBound = array.length - 1;
    let guessIndex = Math.floor(upperBound / 2);
    while (lowerBound <= upperBound) {
      if (array[guessIndex] === lookingFor) {
        return true;
      } else if (lookingFor < array[guessIndex]) {
        upperBound = guessIndex - 1;
      } else {
        lowerBound = guessIndex + 1;
      }
      guessIndex = Math.floor((lowerBound + upperBound) / 2);
    }
    return false;
  }
  /* 0(n log n) */
  
  
  const mysteryFunction8 = function(dictionary) {
    for(var key in dictionary) {
      var value = dictionary[key];
      if (key == value) {
        return true;
      }
      return false;
    }
  }
  /* 0 (n log n) */  