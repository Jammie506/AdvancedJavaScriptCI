console.log("Start");

//.map() function

let nums = [1, 2, 3, 4, 5];
console.log(nums);
let results = []
for (let num of nums){
    results.push(num*2)
}
console.log(results)

let numsTwo = [1, 2, 3, 4, 5];
console.log(numsTwo);
const resultsTwo = numsTwo.map(num => num*2);
console.log(resultsTwo)