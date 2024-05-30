/* 
Clarifying Questions: How many solutions can there be?
What if User enteres an empty list?
What is the max elements in the list?
What is the range for the elements?
Can there be 0 solutions?
Can the target be a rational number? or does it have to be a natural number?
*/

/*
Understanding the question:
Two pointer Question
In real life situation this is used great for searching in large datasets

The idea is divide and conquer one pointer on top and one pointer on the bottom.

we create a cache to store previous numbers within nums. that way if we find a number and a number exists in hash such that it adss up to the target.
then we stop the function at that point

 */

function twoSum(nums, target) {
    //Exactly one solution
    //Cannot use the same element twice
    //Cache
    const hashmap = {};
    for (let i = 0; i < nums.length; i++) {
        if (hashmap[target - nums[i]] != null) {
            return [hashmap[target - nums[i]], i];
        }
        hashmap[nums[i]] = i;
    }
};

module.exports = twoSum;