//Activity 1 - Vacation Time!

/*const printVacations = (human) => {
    for (let info of human) {
        console.log(info[0] + " really wants to go to " + info[1] + "."); 
    }
}

let human = new Map([
    ["Kay", "Hawaii"], 
    ["Jay", "India"], 
    ["Oliver", "Manhattan"]
]);

printVacations(human);*/

//Activity 2 - Vacation Choices

const printVacations2 = (person) => {
    var destArr = [];

    for (let m of person) {
        var firstState =  `${m[0]}` + " really wants to go to ";
        for (i=1;i<m.length;i++) {                          //printing out inner array 
            destArr = m[i];
        }
        var insertOr = destArr.slice( -1);
        var len = insertOr.length;
        console.log(firstState + destArr.join(", ") + " or " + insertOr);
    }   
}

let person = new Map([
    ["Kay", ["Hawaii", "Bali", "Jamaica"]], 
    ["Jay", ["India", "Pakistan"]], 
    ["Oliver", ["Manhattan", "New Orleans"]]
]);

printVacations2(person);