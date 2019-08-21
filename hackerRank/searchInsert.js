var searchInsert = function(nums, target) {
    var i = 0;

    while(i<nums.length) {
        if (target === nums[i]) {
            break;
        }
        if (target < nums[i]) {
            break;
         }
         else {
             i++;
         }
    }
    return i;
};

console.log(searchInsert([1,3,4,5,9], 5)); //testing with target that is in array

//console.log(searchInsert([1,3,4,5,9], 6)); //testing with target that is not in array